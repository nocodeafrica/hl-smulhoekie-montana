import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const AnimatedGradient: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Create smooth oscillating movements
  const shiftX = interpolate(frame, [0, 150, 300], [-50, 50, -50]);
  const shiftY = interpolate(frame, [0, 150, 300], [-20, 20, -20]);
  
  // Slow rotation for the conic gradient
  const rotate = interpolate(frame, [0, 300], [0, 360]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#0f172a', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `conic-gradient(from ${rotate}deg at 50% 50%, #ea580c, #431407, #0f172a, #9a3412, #ea580c)`,
          opacity: 0.4,
          filter: 'blur(100px)',
          transform: `translate(${shiftX}px, ${shiftY}px)`,
        }}
      />
    </AbsoluteFill>
  );
};
