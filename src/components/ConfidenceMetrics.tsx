import React from 'react';
import { useAssessmentStore } from '../store/assessment';
import { Brain, Mic, User } from 'lucide-react';

export function ConfidenceMetrics() {
  const { currentSession } = useAssessmentStore();
  const latestResult = currentSession?.results[currentSession.results.length - 1];

  const metrics = [
    {
      label: 'Facial Expressions',
      value: latestResult?.facialScore ?? 0,
      icon: User,
      color: 'from-pink-500 to-rose-500',
    },
    {
      label: 'Voice Analysis',
      value: latestResult?.voiceScore ?? 0,
      icon: Mic,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Overall Confidence',
      value: latestResult?.confidence ?? 0,
      icon: Brain,
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mt-8">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="glass-effect rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center justify-center mb-4">
            <div className={`p-3 rounded-full bg-gradient-to-r ${metric.color}`}>
              <metric.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-center text-gray-700 font-medium mb-2">{metric.label}</h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-gradient-to-r ${metric.color}">
                  Score
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-gray-600">
                  {metric.value.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${metric.value}%`, transition: 'width 1s ease-in-out' }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${metric.color}`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}