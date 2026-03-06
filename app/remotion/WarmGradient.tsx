import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const WarmGradientAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Animate two radial gradients moving slowly across the background
  const x1 = interpolate(frame, [0, durationInFrames / 2, durationInFrames], [20, 80, 20]);
  const y1 = interpolate(frame, [0, durationInFrames / 2, durationInFrames], [20, 80, 20]);
  
  const x2 = interpolate(frame, [0, durationInFrames / 2, durationInFrames], [80, 20, 80]);
  const y2 = interpolate(frame, [0, durationInFrames / 2, durationInFrames], [80, 20, 80]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#FAF8F5' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${x1}% ${y1}%, rgba(200, 90, 50, 0.06) 0%, transparent 60%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${x2}% ${y2}%, rgba(226, 160, 84, 0.06) 0%, transparent 60%)`,
        }}
      />
    </AbsoluteFill>
  );
};
