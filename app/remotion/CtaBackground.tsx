import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const CTABackground: React.FC = () => {
  const frame = useCurrentFrame();
  
  const move1 = interpolate(frame, [0, 150, 300], [0, 60, 0]);
  const move2 = interpolate(frame, [0, 150, 300], [0, -60, 0]);
  const scale = interpolate(frame, [0, 150, 300], [1, 1.2, 1]);
  
  return (
    <AbsoluteFill style={{ backgroundColor: '#FAFAF9', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '800px',
          height: '800px',
          backgroundColor: '#ffedd5',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.8,
          mixBlendMode: 'multiply',
          transform: `translate(${move1}px, ${move2}px) scale(${scale})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '800px',
          height: '800px',
          backgroundColor: '#fef08a',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.8,
          mixBlendMode: 'multiply',
          transform: `translate(${move2}px, ${move1}px) scale(${scale})`,
        }}
      />
    </AbsoluteFill>
  );
};
