export interface AssessmentResult {
  confidence: number;
  facialScore: number;
  voiceScore: number;
  bodyLanguageScore: number;
  timestamp: number;
}

export interface CandidateSession {
  id: string;
  startTime: number;
  endTime?: number;
  results: AssessmentResult[];
}

export interface AssessmentStore {
  currentSession: CandidateSession | null;
  isRecording: boolean;
  startSession: () => void;
  endSession: () => void;
  addResult: (result: AssessmentResult) => void;
}