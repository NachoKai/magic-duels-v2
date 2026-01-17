"use client";

import { EffectType } from "@/lib/spells";
import {
  Flame,
  Droplet,
  Heart,
  Zap,
  Skull,
  Ban,
  Sword,
  Sparkles,
  Activity,
} from "lucide-react";

interface EffectIconProps {
  type: EffectType | string;
  className?: string;
}

export function EffectIcon({ type, className }: EffectIconProps) {
  const normalizedType = type.toLowerCase();

  switch (normalizedType) {
    case "damage":
      return <Sword className={className} />;
    case "heal":
      return <Heart className={className} />;
    case "stun":
      return <Zap className={className} />;
    case "bleed":
      return <Droplet className={className} />;
    case "burn":
      return <Flame className={className} />;
    case "drain":
      return <Skull className={className} />;
    case "stopbleed":
      return <Activity className={className} />;
    case "stopburn":
      return <Sparkles className={className} />;
    case "stopall":
      return <Ban className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export function getEffectIcon(type: string) {
  return EffectIcon({ type });
}
