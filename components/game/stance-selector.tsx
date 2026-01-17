"use client"

import type { Stance } from "@/lib/spells"
import { cn } from "@/lib/utils"
import { Shield, Eye, Sword } from "lucide-react"

interface StanceSelectorProps {
  onSelect: (stance: Stance) => void
  disabled?: boolean
  playerName: string
}

const stances: { stance: Stance; icon: typeof Shield; color: string; description: string }[] = [
  {
    stance: "Defensive",
    icon: Shield,
    color: "defensive",
    description: "Beats Aggressive",
  },
  {
    stance: "Sneaky",
    icon: Eye,
    color: "sneaky",
    description: "Beats Defensive",
  },
  {
    stance: "Aggressive",
    icon: Sword,
    color: "aggressive",
    description: "Beats Sneaky",
  },
]

export function StanceSelector({ onSelect, disabled, playerName }: StanceSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center text-foreground">{playerName}, choose your stance</h2>
      <div className="grid grid-cols-3 gap-3">
        {stances.map(({ stance, icon: Icon, color, description }) => (
          <button
            key={stance}
            onClick={() => onSelect(stance)}
            disabled={disabled}
            className={cn(
              "group relative flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-300",
              "hover:scale-105 hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              color === "defensive" && "border-defensive hover:bg-defensive/10 hover:border-defensive",
              color === "sneaky" && "border-sneaky hover:bg-sneaky/10 hover:border-sneaky",
              color === "aggressive" && "border-aggressive hover:bg-aggressive/10 hover:border-aggressive",
              "bg-card",
            )}
          >
            <Icon
              className={cn(
                "w-10 h-10 transition-all group-hover:scale-110",
                color === "defensive" && "text-defensive",
                color === "sneaky" && "text-sneaky",
                color === "aggressive" && "text-aggressive",
              )}
            />
            <span className="font-medium text-foreground">{stance}</span>
            <span className="text-[10px] text-muted-foreground">{description}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
