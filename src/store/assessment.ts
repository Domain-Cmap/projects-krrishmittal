import { create } from 'zustand';
import { AssessmentStore, CandidateSession, AssessmentResult } from '../types/assessment';

export const useAssessmentStore = create<AssessmentStore>((set) => ({
  currentSession: null,
  isRecording: false,

  startSession: () => {
    const session: CandidateSession = {
      id: crypto.randomUUID(),
      startTime: Date.now(),
      results: [],
    };
    set({ currentSession: session, isRecording: true });
  },

  endSession: () => {
    set((state) => ({
      currentSession: state.currentSession
        ? { ...state.currentSession, endTime: Date.now() }
        : null,
      isRecording: false,
    }));
  },

  addResult: (result: AssessmentResult) => {
    set((state) => ({
      currentSession: state.currentSession
        ? {
            ...state.currentSession,
            results: [...state.currentSession.results, result],
          }
        : null,
    }));
  },
}));