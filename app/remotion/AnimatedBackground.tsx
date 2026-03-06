'use client';

import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const AnimatedBackground = () => {
  const frame = useCurrentFrame();
  
  // Smoothly interpolate opacities and positions over 300 frames
  const opacity1 = interpolate(frame, [0, 150, 300], [0.5, 0.8, 0.5], { extrapolateRight: 'clamp' });
  const opacity2 = interpolate(frame, [0, 150, 300], [0.4, 0.7, 0.4], { extrapolateRight: 'clamp' });
  
  const y1 = interpolate(frame, [0, 150, 300], [0, -50, 0], { extrapolateRight: 'clamp' });
  const x2 = interpolate(frame, [0, 150, 300], [0, 50, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
      {/* Top Left Gradient Blob */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(255,255,255,0) 70%)',
          opacity: opacity1,
          transform: `translateY(${y1}px)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Bottom Right Gradient Blob */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(255,255,255,0) 70%)',
          opacity: opacity2,
          transform: `translateX(${x2}px)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
    </AbsoluteFill>
  );
};
