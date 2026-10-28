// The kit's evidence logic, in one place the workflows share and the tests cover:
// reading and writing the logs (CSV), numbering each form, closing a prediction
// when a decision says how it ended, and building the trace from the links.
// No dependencies: it runs in actions/github-script and under `node --test`.

/** CSV text to rows of fields. Handles quoted fields, doubled quotes and line breaks inside quotes. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f !== '')) rows.push(row);
  return rows;
}

/** One field, quoted when it holds a comma, a quote or a line break. */
function csvField(v) {
  const s = v == null ? '' : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Rows of fields to CSV text, ending in a line break. */
function toCsv(rows) {
  return rows.map((r) => r.map(csvField).join(',')).join('\n') + '\n';
}

/** A log as objects keyed by its header row. */
function readLog(text) {
  const [head = [], ...rows] = parseCsv(text);
  return { head, rows: rows.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])) ) };
}

/** A log back to CSV text, in its header's order. */
function writeLog({ head, rows }) {
  return toCsv([head, ...rows.map((r) => head.map((h) => r[h] ?? ''))]);
}

/** The next number for a prefix, one past the highest already used: PRE-003 after PRE-002. */
function nextId(ids, prefix) {
  const n = ids.reduce((max, id) => {
    const m = String(id).match(new RegExp(`^${prefix}-(\\d+)$`));
    return m ? Math.max(max, Number(m[1])) : max;
  }, 0);
  return `${prefix}-${String(n + 1).padStart(3, '0')}`;
}

/** Every prediction a piece of text names, in order, once each. */
function predictionRefs(text) {
  return [...new Set(String(text ?? '').match(/PRE-\d+/g) ?? [])];
}

/** How a decision says a prediction ended, as the prediction's status. */
const OUTCOMES = {
  'It held': 'validated',
  'It was proved wrong': 'falsified',
  'It was dropped': 'abandoned',
  'We couldn’t tell': 'inconclusive',
};

/**
 * Closes a prediction: sets its status from the decision's outcome, with when and the decision's number.
 * Returns false, changing nothing, when the prediction isn't in the log or the outcome isn't one of OUTCOMES.
 */
function closePrediction(log, preId, outcome, at, decisionId) {
  const status = OUTCOMES[outcome];
  const row = log.rows.find((r) => r.registration_id === preId);
  if (!status || !row) return false;
  row.status = status;
  row.outcome_logged_at = at;
  row.outcome_notes = [row.outcome_notes, `Closed by ${decisionId}.`].filter(Boolean).join(' ');
  return true;
}

/**
 * The trace: one row per prediction, with everything that names it. Pull requests are
 * { number, body, merged } as GitHub returns them; only merged ones count as built.
 */
function buildTrace({ predictions, observations, decisions, pulls = [] }) {
  const head = ['prediction', 'status', 'expected', 'pull_requests', 'observations', 'decisions'];
  const rows = predictions.rows.map((p) => {
    const id = p.registration_id;
    const prs = pulls.filter((pr) => pr.merged && predictionRefs(pr.body).includes(id)).map((pr) => `#${pr.number}`);
    const obs = observations.rows.filter((o) => o.pre_reference === id).map((o) => o.session_id);
    const dec = decisions.rows.filter((d) => d.pre_reference === id).map((d) => d.decision_id);
    return { prediction: id, status: p.status, expected: p.hypothesis, pull_requests: prs.join(' '), observations: obs.join(' '), decisions: dec.join(' ') };
  });
  return { head, rows };
}

module.exports = { parseCsv, toCsv, readLog, writeLog, nextId, predictionRefs, OUTCOMES, closePrediction, buildTrace };
