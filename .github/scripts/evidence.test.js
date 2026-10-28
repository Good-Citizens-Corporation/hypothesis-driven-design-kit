// The basic behavior the workflows rely on. Run with `node --test .github/scripts/evidence.test.js`.
//
// The kit asks for design the way test-driven development asks for code: say what
// would prove the work wrong before you do the work. These tests are the same
// habit, kept for the kit's own code.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseCsv, readLog, writeLog, nextId, predictionRefs, closePrediction, buildTrace } = require('./evidence.js');

test('a quoted field keeps its commas, quotes and line breaks, and writes back the same', () => {
  const text = 'id,note\nPRE-001,"Said ""yes"", then\nchanged it"\n';
  const log = readLog(text);
  assert.equal(log.rows[0].note, 'Said "yes", then\nchanged it');
  assert.equal(writeLog(log), text);
});

test('blank lines are not rows', () => {
  assert.deepEqual(parseCsv('a,b\n\n1,2\n\n'), [['a', 'b'], ['1', '2']]);
});

test('numbers continue from the highest used, padded to three digits', () => {
  assert.equal(nextId([], 'DEC'), 'DEC-001');
  assert.equal(nextId(['PRE-001', 'PRE-009', 'PRE-002'], 'PRE'), 'PRE-010');
  assert.equal(nextId(['OBS-004', 'PRE-020'], 'OBS'), 'OBS-005');
});

test('a pull request names each prediction once, in order', () => {
  assert.deepEqual(predictionRefs('Tests PRE-002. See PRE-001 and PRE-002 again.'), ['PRE-002', 'PRE-001']);
  assert.deepEqual(predictionRefs(null), []);
});

const predictions = () => readLog('registration_id,hypothesis,status,outcome_logged_at,outcome_notes\nPRE-001,Fewer steps lift completion,registered,,\nPRE-002,Templates halve onboarding,registered,,\n');

test('a decision closes its prediction with the status its outcome means', () => {
  const log = predictions();
  assert.equal(closePrediction(log, 'PRE-001', 'It was proved wrong', '2026-10-28', 'DEC-001'), true);
  assert.equal(log.rows[0].status, 'falsified');
  assert.equal(log.rows[0].outcome_notes, 'Closed by DEC-001.');
  assert.equal(log.rows[1].status, 'registered');
});

test('an unknown prediction or outcome changes nothing', () => {
  const log = predictions();
  assert.equal(closePrediction(log, 'PRE-404', 'It held', '2026-10-28', 'DEC-001'), false);
  assert.equal(closePrediction(log, 'PRE-001', 'Maybe', '2026-10-28', 'DEC-001'), false);
  assert.equal(log.rows[0].status, 'registered');
});

test('the trace joins each prediction to the merged pull requests, observations and decisions that name it', () => {
  const trace = buildTrace({
    predictions: predictions(),
    observations: readLog('session_id,pre_reference\nOBS-001,PRE-001\nOBS-002,PRE-002\nOBS-003,PRE-001\n'),
    decisions: readLog('decision_id,pre_reference\nDEC-001,PRE-001\n'),
    pulls: [
      { number: 42, body: 'Builds the test for PRE-001', merged: true },
      { number: 43, body: 'PRE-001, still open', merged: false },
      { number: 44, body: 'Nothing named', merged: true },
    ],
  });
  assert.deepEqual(trace.rows[0], { prediction: 'PRE-001', status: 'registered', expected: 'Fewer steps lift completion', pull_requests: '#42', observations: 'OBS-001 OBS-003', decisions: 'DEC-001' });
  assert.deepEqual(trace.rows[1], { prediction: 'PRE-002', status: 'registered', expected: 'Templates halve onboarding', pull_requests: '', observations: 'OBS-002', decisions: '' });
});
