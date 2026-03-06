import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

export const AnimatedPattern = () => {
  const frame = useCurrentFrame();
  
  // Slow rotation and scale pulsing for a subtle, high-end feel
  const rotation = interpolate(frame, [0, 300], [0, 360]);
  const scale = interpolate(
    frame,
    [0, 150, 300],
    [1, 1.1, 1],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: '#1c1917', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: 'radial-gradient(circle, #ea580c 2px, transparent 3px)',
          backgroundSize: '50px 50px',
          transform: `rotate(${rotation}deg) scale(${scale})`,
          opacity: 0.15,
        }}
      />
      {/* Vignette overlay to blend edges */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, #1c1917 80%)'
        }}
      />
    </AbsoluteFill>
  );
};
