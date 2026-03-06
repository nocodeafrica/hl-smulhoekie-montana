import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import React from 'react';

export const BackgroundGlow: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Create a slow, pulsing opacity effect
  const opacity1 = interpolate(frame, [0, 150, 300], [0.3, 0.6, 0.3], { extrapolateRight: 'clamp' });
  const opacity2 = interpolate(frame, [0, 150, 300], [0.2, 0.5, 0.2], { extrapolateRight: 'clamp' });
  
  // Slow vertical drifting
  const y1 = interpolate(frame, [0, 300], [0, -80]);
  const y2 = interpolate(frame, [0, 300], [0, 60]);

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      {/* Top Left Glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(251,146,60,0.15) 0%, rgba(0,0,0,0) 60%)',
          borderRadius: '50%',
          transform: `translateY(${y1}px)`,
          opacity: opacity1,
          filter: 'blur(40px)',
        }}
      />
      
      {/* Bottom Right Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '-10%',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(circle, rgba(234,88,12,0.12) 0%, rgba(0,0,0,0) 60%)',
          borderRadius: '50%',
          transform: `translateY(${y2}px)`,
          opacity: opacity2,
          filter: 'blur(60px)',
        }}
      />
    </AbsoluteFill>
  );
};
