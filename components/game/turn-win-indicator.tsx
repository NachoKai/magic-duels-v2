"use client";

import { type Stance } from "@/lib/spells";

interface TurnWinIndicatorProps {
  winner: 1 | 2;
  stance: Stance;
  spellId?: string;
  onAnimationEnd: () => void;
}

import { playCPUWinSound, playSpellSound } from "@/lib/spell-sounds";
import { useEffect } from "react";

export function TurnWinIndicator({
  winner,
  stance,
  spellId,
  onAnimationEnd,
}: TurnWinIndicatorProps) {
  const variableName = `--${stance.toLowerCase()}`;

  useEffect(() => {
    if (winner === 2) {
      playCPUWinSound();
    }
    if (spellId) {
      // Delay slightly to match the "impact"
      setTimeout(() => {
        playSpellSound(spellId);
      }, 300);
    }
  }, [winner, spellId]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center animate-flash-overlay"
      style={{
        color: `var(${variableName})`,
        background: `radial-gradient(circle at center, var(${variableName}) 0%, transparent 50%)`,
        mixBlendMode: "hard-light",
      }}
      onAnimationEnd={onAnimationEnd}
    >
      <div
        className="text-9xl font-black uppercase tracking-widest opacity-20 select-none"
        style={{ color: `var(${variableName})` }}
      ></div>
    </div>
  );
}
