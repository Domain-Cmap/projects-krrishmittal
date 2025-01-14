// Simulated confidence analysis service
export function analyzeFrame(): {
  facialScore: number;
  voiceScore: number;
  bodyLanguageScore: number;
  confidence: number;
} {
  // Simulate realistic-looking scores
  const facialScore = 65 + Math.random() * 20;
  const voiceScore = 70 + Math.random() * 15;
  const bodyLanguageScore = 60 + Math.random() * 25;
  
  // Calculate overall confidence as weighted average
  const confidence = (facialScore * 0.4 + voiceScore * 0.35 + bodyLanguageScore * 0.25);
  
  return {
    facialScore,
    voiceScore,
    bodyLanguageScore,
    confidence,
  };
}