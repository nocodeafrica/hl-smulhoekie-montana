import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export const SubtleGlow: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  
  const progress = frame / durationInFrames;
  
  // Smooth pulse using sine wave
  const opacity = 0.2 + Math.sin(progress * Math.PI * 2) * 0.15;
  const scale = 1 + Math.sin(progress * Math.PI * 2) * 0.05;

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(200, 76, 33, 0.35) 0%, transparent 70%)',
          opacity,
          transform: `scale(${scale})`,
        }}
      />
    </AbsoluteFill>
  );
};
