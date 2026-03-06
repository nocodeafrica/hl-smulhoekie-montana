'use client';

import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Subtle pulsing and floating effect
  const opacity1 = interpolate(frame, [0, 150, 300], [0.4, 0.8, 0.4]);
  const yOffset1 = interpolate(frame, [0, 150, 300], [0, -40, 0]);
  
  const opacity2 = interpolate(frame, [0, 150, 300], [0.2, 0.6, 0.2]);
  const xOffset2 = interpolate(frame, [0, 150, 300], [0, 50, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#1c1917', overflow: 'hidden' }}>
      {/* Animated Blob 1 */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '70%',
        height: '70%',
        background: 'radial-gradient(circle, rgba(234, 88, 12, 0.2) 0%, transparent 70%)',
        opacity: opacity1,
        transform: `translateY(${yOffset1}px)`,
        filter: 'blur(50px)',
      }} />
      
      {/* Animated Blob 2 */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)',
        opacity: opacity2,
        transform: `translateX(${xOffset2}px)`,
        filter: 'blur(60px)',
      }} />
    </AbsoluteFill>
  );
};
