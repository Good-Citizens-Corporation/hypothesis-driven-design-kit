// Rebuilds evidence-packet/trace_matrix.csv from the three logs and the repository's
// pull requests. Called from the workflows through actions/github-script.
const fs = require('fs');
const { readLog, writeLog, buildTrace } = require('./evidence.js');

const LOGS = 'evidence-packet';
const read = (name) => readLog(fs.readFileSync(`${LOGS}/${name}`, 'utf8'));

module.exports = async function rebuildTrace({ github, context }) {
  const pulls = await github.paginate(github.rest.pulls.list, { owner: context.repo.owner, repo: context.repo.repo, state: 'closed', per_page: 100 });
  const trace = buildTrace({
    predictions: read('pre_registrations.csv'),
    observations: read('observation_events.csv'),
    decisions: read('decision_log.csv'),
    pulls: pulls.map((p) => ({ number: p.number, body: p.body, merged: !!p.merged_at })),
  });
  fs.writeFileSync(`${LOGS}/trace_matrix.csv`, writeLog(trace));
  return trace.rows.length;
};
