import React from 'react';
import { VideoRecorder } from './components/VideoRecorder';
import { ConfidenceMetrics } from './components/ConfidenceMetrics';
import { Brain } from 'lucide-react';

function App() {
  return (
    <>
      <div className="mesh-background" />
      <div className="min-h-screen">
        <header className="glass-effect shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Soft Skills Assessment System
              </h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Interview Recording
              </h2>
              <VideoRecorder />
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Real-time Analysis
              </h2>
              <ConfidenceMetrics />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;