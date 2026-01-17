"use client";

import { type Stance } from "@/lib/spells";

interface TurnWinIndicatorProps {
  winner: 1 | 2;
  stance: Stance;
  onAnimationEnd: () => void;
}

export function TurnWinIndicator({
  stance,
  onAnimationEnd,
}: TurnWinIndicatorProps) {
  const variableName = `--${stance.toLowerCase()}`;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center animate-flash-overlay"
      style={{
        color: `var(${variableName})`,
        background: `radial-gradient(circle at center, var(${variableName}) 0%, transparent 60%)`,
        mixBlendMode: "hard-light",
      }}
      onAnimationEnd={onAnimationEnd}
    >
      <div
        className="text-9xl font-black uppercase tracking-widest opacity-20 select-none"
        style={{ color: `var(${variableName})` }}
      >
        {stance}
      </div>
    </div>
  );
}
