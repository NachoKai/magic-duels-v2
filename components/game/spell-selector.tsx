"use client";

import {
  type Spell,
  type Stance,
  getSpellsByStance,
  getEffectDisplayName,
} from "@/lib/spells";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { EffectIcon } from "@/components/game/effect-icon";
import { SpellDrawingCanvas } from "./spell-drawing-canvas";
import { DRAWING_TIME_LIMIT } from "@/lib/game-config";

interface SpellSelectorProps {
  stance: Stance;
  onSelect: (spell: Spell) => void;
  onCastFailed: () => void;
  disabled?: boolean;
  drawingTimeLimit?: number;
}

export function SpellSelector({
  stance,
  onSelect,
  onCastFailed,
  disabled,
  drawingTimeLimit = DRAWING_TIME_LIMIT,
}: SpellSelectorProps) {
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [showDrawingCanvas, setShowDrawingCanvas] = useState(false);
  const spells = getSpellsByStance(stance);

  const getStanceColor = () => {
    switch (stance) {
      case "Defensive":
        return "defensive";
      case "Sneaky":
        return "sneaky";
      case "Aggressive":
        return "aggressive";
    }
  };

  const handleSelect = (spell: Spell) => {
    setSelectedSpell(spell);
    setShowDrawingCanvas(true);
  };

  const handleDrawingSuccess = () => {
    if (selectedSpell) {
      onSelect(selectedSpell);
      setSelectedSpell(null);
      setShowDrawingCanvas(false);
    }
  };

  const handleDrawingFailure = () => {
    setSelectedSpell(null);
    setShowDrawingCanvas(false);
    onCastFailed();
  };

  const handleCloseDrawing = () => {
    setSelectedSpell(null);
    setShowDrawingCanvas(false);
  };

  return (
    <div className="space-y-4">
      <h2
        className={cn(
          "text-xl font-semibold text-center",
          `text-${getStanceColor()}`
        )}
      >
        Choose your {stance} spell
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[400px] overflow-y-auto p-2 no-scrollbar">
        {spells.map((spell) => (
          <button
            key={spell.id}
            onClick={() => handleSelect(spell)}
            disabled={disabled}
            className={cn(
              "relative flex flex-col items-start p-3 rounded-lg border transition-all duration-200 text-left",
              "hover:scale-[1.02] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              selectedSpell?.id === spell.id
                ? `border-${getStanceColor()} bg-${getStanceColor()}/20 ring-2 ring-${getStanceColor()}`
                : "border-border bg-card hover:bg-secondary/50"
            )}
          >
            <div className="w-full flex items-center justify-center mb-2">
              <div className="relative w-16 h-16">
                <Image
                  src={spell.image}
                  alt={spell.name}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-1 w-full">
              <Sparkles className={cn("w-4 h-4", `text-${getStanceColor()}`)} />
              <span className="font-medium text-sm text-foreground truncate">
                {spell.name}
              </span>
            </div>

            <div className="flex flex-wrap gap-1 text-[12px]">
              {spell.baseDamage > 0 && (
                <span className="flex items-center gap-0.5 text-destructive">
                  <EffectIcon type="damage" className="w-3 h-3" />
                  {spell.baseDamage}
                </span>
              )}
              {spell.baseHeal > 0 && (
                <span className="flex items-center gap-0.5 text-heal">
                  <EffectIcon type="heal" className="w-3 h-3" />
                  {spell.baseHeal}
                </span>
              )}
              {spell.effects.map((e, i) => (
                <span
                  key={i}
                  className={cn(
                    "flex items-center gap-0.5 capitalize",
                    e.type === "bleed" && "text-bleed",
                    e.type === "burn" && "text-burn",
                    e.type === "stun" && "text-stun",
                    !["bleed", "burn", "stun"].includes(e.type) &&
                      "text-muted-foreground"
                  )}
                >
                  <EffectIcon type={e.type} className="w-3 h-3" />
                  {e.type}
                </span>
              ))}
            </div>

            <p className="text-[12px] text-muted-foreground mt-1 line-clamp-2">
              {spell.description}
            </p>
          </button>
        ))}
      </div>

      {selectedSpell && (
        <div className="flex flex-col items-center gap-3 p-4 bg-secondary/50 rounded-lg border border-border">
          <div className="relative w-24 h-24 mb-2">
            <Image
              src={selectedSpell.image}
              alt={selectedSpell.name}
              fill
              className="object-contain"
              sizes="96px"
            />
          </div>
          <div className="text-center">
            <h3 className={cn("font-semibold", `text-${getStanceColor()}`)}>
              {selectedSpell.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {selectedSpell.description}
            </p>
            <div className="flex justify-center gap-3 mt-2 text-[14px]">
              {selectedSpell.baseDamage > 0 && (
                <span className="text-destructive">
                  Damage: {selectedSpell.baseDamage}
                </span>
              )}
              {selectedSpell.baseHeal > 0 && (
                <span className="text-heal">
                  Heal: {selectedSpell.baseHeal}
                </span>
              )}
            </div>
            {selectedSpell.effects.length > 0 && (
              <div className="mt-2 text-[12px] text-muted-foreground">
                <p className="font-medium mb-1">Effects:</p>
                {selectedSpell.effects.map((effect, i) => (
                  <p
                    key={i}
                    className="flex items-center justify-center gap-1.5"
                  >
                    <span className="flex items-center gap-1">
                      <EffectIcon type={effect.type} className="w-3 h-3" />
                      {getEffectDisplayName(effect.type)}:
                    </span>
                    <span>
                      {effect.value}
                      {effect.duration ? ` for ${effect.duration}t` : ""} (
                      {effect.chance}% chance)
                    </span>
                  </p>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setShowDrawingCanvas(true);
            }}
            className={cn(
              "px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer",
              "bg-primary text-primary-foreground hover:opacity-90"
            )}
          >
            Draw Spell Form
          </button>
        </div>
      )}

      {/* Drawing Canvas Overlay */}
      {showDrawingCanvas && selectedSpell && (
        <SpellDrawingCanvas
          spell={selectedSpell}
          onSuccess={handleDrawingSuccess}
          onFailure={handleDrawingFailure}
          onClose={handleCloseDrawing}
          timeLimit={drawingTimeLimit}
        />
      )}
    </div>
  );
}
