type PreRegistration = {
  registration_id: string;
  registered_at: string;
  hypothesis: string;
  primary_metric: string;
  baseline: string;
  success_threshold: string;
  falsification_criteria: string;
  timeline: string;
  status: 'registered' | 'validated' | 'falsified' | 'abandoned' | 'inconclusive';
  outcome_logged_at: string;
  outcome_notes: string;
};

type DesignOutput = {
  output_id: string;
  created_at: string;
  pre_reference: string;
  specification: string;
  artifact_type: string;
  artifact_ref: string;
  verification_method: string;
  verified_at: string;
  verified_by: string;
};

type TraceEntry = {
  trace_id: string;
  design_input: string;
  design_output: string;
  evidence_refs: string;
  verification_status: 'pass' | 'fail' | 'pending';
  validation_status: 'validated' | 'falsified' | 'inconclusive' | 'pending';
  notes: string;
};

type Decision = {
  date: string;
  decision: string;
  pre_reference: string;
  context: string;
  evidence: string;
  surprised: string;
  learning: string;
  next_steps: string;
};

type Observation = {
  session_id: string;
  timestamp: string;
  pre_reference: string;
  experiment_reference: string;
  observation_type: string;
  participants: string;
  key_findings: string;
  supports_hypothesis: string;
  quotes_artifacts: string;
  implications: string;
};

type EvidencePacket = {
  preRegistrations: PreRegistration[];
  designOutputs: DesignOutput[];
  traceMatrix: TraceEntry[];
  decisions: Decision[];
  observations: Observation[];
};

function parseCSV<T>(content: string): T[] {
  const lines = content.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const obj: Record<string, string> = {};
    headers.forEach((header, i) => {
      obj[header] = values[i] ?? '';
    });
    return obj as T;
  });
}

type FileReader = (filename: string) => Promise<string>;

async function loadEvidencePacket(readFile: FileReader): Promise<EvidencePacket> {
  const readCSV = async <T>(filename: string): Promise<T[]> => {
    const content = await readFile(filename);
    return parseCSV<T>(content);
  };

  const [preRegistrations, designOutputs, traceMatrix, decisions, observations] = await Promise.all([
    readCSV<PreRegistration>('pre_registrations.csv'),
    readCSV<DesignOutput>('design_outputs.csv'),
    readCSV<TraceEntry>('trace_matrix.csv'),
    readCSV<Decision>('decision_log.csv'),
    readCSV<Observation>('observation_events.csv'),
  ]);

  return { preRegistrations, designOutputs, traceMatrix, decisions, observations };
}

function getTraceForInput(packet: EvidencePacket, preId: string) {
  const input = packet.preRegistrations.find(p => p.registration_id === preId);
  const outputs = packet.designOutputs.filter(d => d.pre_reference === preId);
  const traces = packet.traceMatrix.filter(t => t.design_input === preId);
  const decisions = packet.decisions.filter(d => d.pre_reference === preId);
  const observations = packet.observations.filter(o => o.pre_reference === preId);

  return { input, outputs, traces, decisions, observations };
}

function validateTraceability(packet: EvidencePacket): { valid: boolean; gaps: string[] } {
  const gaps: string[] = [];

  for (const pre of packet.preRegistrations) {
    const outputs = packet.designOutputs.filter(d => d.pre_reference === pre.registration_id);
    if (outputs.length === 0) {
      gaps.push(`${pre.registration_id}: No design output`);
    }

    const traces = packet.traceMatrix.filter(t => t.design_input === pre.registration_id);
    if (traces.length === 0) {
      gaps.push(`${pre.registration_id}: Not in trace matrix`);
    }
  }

  return { valid: gaps.length === 0, gaps };
}

export {
  loadEvidencePacket,
  getTraceForInput,
  validateTraceability,
  parseCSV,
};

export type {
  FileReader,
  PreRegistration,
  DesignOutput,
  TraceEntry,
  Decision,
  Observation,
  EvidencePacket,
};
