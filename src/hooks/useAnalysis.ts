import { useEffect, useRef } from 'react';
import { useAssessmentStore } from '../store/assessment';
import { analyzeFrame } from '../services/analysis';

export function useAnalysis(isRecording: boolean) {
  const analysisInterval = useRef<number>();
  const { addResult } = useAssessmentStore();

  useEffect(() => {
    if (isRecording) {
      // Analyze every 2 seconds
      analysisInterval.current = window.setInterval(() => {
        const result = analyzeFrame();
        addResult({
          ...result,
          timestamp: Date.now(),
        });
      }, 2000);
    }

    return () => {
      if (analysisInterval.current) {
        clearInterval(analysisInterval.current);
      }
    };
  }, [isRecording, addResult]);
}