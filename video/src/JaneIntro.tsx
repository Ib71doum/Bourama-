import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const WORDS = ['Hi,', 'this', 'is', 'Jane', 'using', 'Remotion'];

export const JaneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const fadeOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
  });
  const bgShift = interpolate(frame, [0, durationInFrames], [0, 60]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${135 + bgShift}deg, #1e1b4b, #4f46e5 55%, #ec4899)`,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeOut,
      }}
    >
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 36px', maxWidth: 1600}}>
        {WORDS.map((word, i) => {
          const s = spring({frame: frame - i * 8, fps, config: {damping: 14}});
          const highlight = word === 'Jane' || word === 'Remotion';
          return (
            <span
              key={i}
              style={{
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 800,
                fontSize: 140,
                color: highlight ? '#fde047' : 'white',
                opacity: s,
                transform: `translateY(${(1 - s) * 80}px)`,
                display: 'inline-block',
                textShadow: '0 8px 30px rgba(0,0,0,0.35)',
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
