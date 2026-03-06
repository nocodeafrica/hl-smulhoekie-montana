import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export const HeroBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = (frame % durationInFrames) / durationInFrames;
  
  const moveX1 = Math.sin(progress * Math.PI * 2) * 30;
  const moveY1 = Math.cos(progress * Math.PI * 2) * 30;
  
  const moveX2 = Math.sin((progress + 0.5) * Math.PI * 2) * 40;
  const moveY2 = Math.cos((progress + 0.5) * Math.PI * 2) * 40;

  return (
    <AbsoluteFill style={{ backgroundColor: '#1f2937', overflow: 'hidden' }}>
      <AbsoluteFill style={{ background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' }} />
      
      {/* Ambient glowing orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 60%)',
        borderRadius: '50%',
        transform: `translate(${moveX1}px, ${moveY1}px)`,
        filter: 'blur(60px)',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)',
        borderRadius: '50%',
        transform: `translate(${moveX2}px, ${moveY2}px)`,
        filter: 'blur(60px)',
      }} />

      {/* Grid pattern overlay */}
      <AbsoluteFill style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5
      }} />
      
      {/* Bottom fade */}
      <AbsoluteFill style={{
        background: 'linear-gradient(to bottom, transparent 80%, rgba(31,41,55,1) 100%)'
      }} />
    </AbsoluteFill>
  );
};
