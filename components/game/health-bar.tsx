"use client"

import { cn } from "@/lib/utils"
import type { StatusEffect } from "@/lib/spells"

interface HealthBarProps {
  current: number
  max: number
  name: string
  statusEffects: StatusEffect[]
  isStunned: number
  isPlayer1?: boolean
}

export function HealthBar({ current, max, name, statusEffects, isStunned, isPlayer1 = true }: HealthBarProps) {
  const percentage = (current / max) * 100

  const getHealthColor = () => {
    if (percentage > 60) return "bg-heal"
    if (percentage > 30) return "bg-defensive"
    return "bg-destructive"
  }

  return (
    <div className={cn("w-full max-w-xs", !isPlayer1 && "text-right")}>
      <div className={cn("flex items-center gap-2 mb-1", !isPlayer1 && "flex-row-reverse")}>
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-[14px] text-muted-foreground">
          {current}/{max}
        </span>
      </div>

      <div className="h-4 bg-secondary rounded-full overflow-hidden border border-border">
        <div
          className={cn("h-full transition-all duration-500 rounded-full", getHealthColor())}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className={cn("flex gap-1 mt-1 flex-wrap", !isPlayer1 && "justify-end")}>
        {isStunned > 0 && (
          <span className="text-[12px] px-1.5 py-0.5 rounded bg-stun text-background font-medium">
            STUNNED ({isStunned})
          </span>
        )}
        {statusEffects.map((effect, i) => (
          <span
            key={i}
            className={cn(
              "text-[12px] px-1.5 py-0.5 rounded font-medium",
              effect.type === "bleed" && "bg-bleed text-background",
              effect.type === "burn" && "bg-burn text-background",
              effect.type === "heal" && "bg-heal text-background",
              effect.type === "drain" && "bg-drain text-background",
            )}
          >
            {effect.type.toUpperCase()} -{effect.value} ({effect.turnsRemaining}t)
          </span>
        ))}
      </div>
    </div>
  )
}
