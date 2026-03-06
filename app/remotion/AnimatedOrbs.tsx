import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export const AnimatedOrbs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // 10 second loop
  const durationFrames = fps * 10;
  const progress = (frame % durationFrames) / durationFrames;
  
  // Sine wave for smooth back-and-forth movement
  const wave1 = Math.sin(progress * Math.PI * 2);
  const wave2 = Math.cos(progress * Math.PI * 2);

  return (
    <AbsoluteFill style={{ background: 'transparent', overflow: 'hidden' }}>
      {/* Orb 1 */}
      <div style={{
        position: 'absolute',
        top: `${40 + wave1 * 5}%`,
        left: `${30 + wave2 * 5}%`,
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, rgba(249, 115, 22, 0) 70%)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
      }} />
      
      {/* Orb 2 */}
      <div style={{
        position: 'absolute',
        bottom: `${20 + wave2 * 8}%`,
        right: `${20 + wave1 * 8}%`,
        width: '1000px',
        height: '1000px',
        background: 'radial-gradient(circle, rgba(234, 88, 12, 0.03) 0%, rgba(234, 88, 12, 0) 70%)',
        borderRadius: '50%',
        transform: 'translate(50%, 50%)',
      }} />
    </AbsoluteFill>
  );
};
