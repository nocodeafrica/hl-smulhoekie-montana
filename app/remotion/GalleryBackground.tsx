import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const GalleryBackground: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity1 = interpolate(frame, [0, 150, 300], [0.4, 0.7, 0.4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const opacity2 = interpolate(frame, [0, 150, 300], [0.6, 0.3, 0.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#fffbeb' }}>
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 15% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 60%)',
          opacity: opacity1,
        }}
      />
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 85% 70%, rgba(245, 158, 11, 0.15) 0%, transparent 60%)',
          opacity: opacity2,
        }}
      />
    </AbsoluteFill>
  );
};
