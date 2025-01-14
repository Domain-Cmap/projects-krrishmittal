import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { Camera, StopCircle } from 'lucide-react';
import { useAssessmentStore } from '../store/assessment';
import { useAnalysis } from '../hooks/useAnalysis';

export function VideoRecorder() {
  const webcamRef = useRef<Webcam>(null);
  const { isRecording, startSession, endSession } = useAssessmentStore();
  
  useAnalysis(isRecording);

  const handleStartRecording = useCallback(() => {
    startSession();
  }, [startSession]);

  const handleStopRecording = useCallback(() => {
    endSession();
  }, [endSession]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="glass-effect p-4 rounded-xl">
        <Webcam
          ref={webcamRef}
          audio={true}
          className="w-full rounded-lg shadow-lg"
          screenshotFormat="image/jpeg"
        />
        
        <div className="mt-4 flex justify-center">
          {!isRecording ? (
            <button
              onClick={handleStartRecording}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Camera size={20} />
              Start Recording
            </button>
          ) : (
            <button
              onClick={handleStopRecording}
              className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-full hover:from-red-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg recording-pulse"
            >
              <StopCircle size={20} />
              Stop Recording
            </button>
          )}
        </div>
      </div>
    </div>
  );
}