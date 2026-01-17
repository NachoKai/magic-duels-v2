"use client";

import { getAllSpellForms, SpellForm } from "@/lib/spell-forms";
import { ArrowLeft, BookOpen } from "lucide-react";
import { EffectIcon } from "@/components/game/effect-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SpellDrawingCanvas } from "@/components/game/spell-drawing-canvas";
import { DRAWING_TIME_LIMIT } from "@/lib/game-config";
import { useState } from "react";
import { spells as allSpellsData, Spell, Stance } from "@/lib/spells";

interface LibraryViewProps {
  onBack: () => void;
}

export function LibraryView({ onBack }: LibraryViewProps) {
  const spells = getAllSpellForms();
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [filterStance, setFilterStance] = useState<Stance | "All">("All");

  const formatSpellName = (id: string) => {
    return id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleSpellClick = (spellForm: SpellForm) => {
    const spellData = allSpellsData.find((s) => s.id === spellForm.spellId);
    if (spellData) {
      setSelectedSpell(spellData);
    } else {
      console.warn(`Spell data not found for id: ${spellForm.spellId}`);
      const dummySpell: Spell = {
        id: spellForm.spellId,
        name: formatSpellName(spellForm.spellId),
        stance: "Defensive",
        baseDamage: 0,
        baseHeal: 0,
        effects: [],
        description: "Practice Spell",
        image: "",
      };
      setSelectedSpell(dummySpell);
    }
  };

  const handleClosePractice = () => {
    setSelectedSpell(null);
  };

  const filteredSpells = spells.filter((spellForm) => {
    if (filterStance === "All") return true;
    const spellData = allSpellsData.find((s) => s.id === spellForm.spellId);
    return spellData?.stance === filterStance;
  });

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4 gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="shrink-0"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold tracking-tight">
                Spell Library
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-center bg-muted/50 p-1 rounded-lg gap-1 w-full md:w-auto">
            <Button
              variant={filterStance === "All" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilterStance("All")}
              className="px-4"
            >
              All
            </Button>
            {(["Aggressive", "Defensive", "Sneaky"] as const).map((stance) => {
              const isActive = filterStance === stance;
              let colorClass = "";
              if (isActive) {
                if (stance === "Aggressive")
                  colorClass =
                    "bg-aggressive hover:bg-aggressive/90 text-primary-foreground";
                if (stance === "Defensive")
                  colorClass =
                    "bg-defensive hover:bg-defensive/90 text-primary-foreground";
                if (stance === "Sneaky")
                  colorClass =
                    "bg-sneaky hover:bg-sneaky/90 text-primary-foreground";
              } else {
                if (stance === "Aggressive")
                  colorClass =
                    "text-aggressive hover:text-aggressive hover:bg-aggressive/10";
                if (stance === "Defensive")
                  colorClass =
                    "text-defensive hover:text-defensive hover:bg-defensive/10";
                if (stance === "Sneaky")
                  colorClass =
                    "text-sneaky hover:text-sneaky hover:bg-sneaky/10";
              }

              return (
                <Button
                  key={stance}
                  variant="ghost"
                  size="sm"
                  onClick={() => setFilterStance(stance)}
                  className={`px-4 ${colorClass}`}
                >
                  {stance}
                </Button>
              );
            })}
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
            {filteredSpells.map((spellForm) => {
              const spellData = allSpellsData.find(
                (s) => s.id === spellForm.spellId
              );
              if (!spellData) return null;

              return (
                <SpellCard
                  key={spellForm.spellId}
                  spellForm={spellForm}
                  spellData={spellData}
                  onClick={() => handleSpellClick(spellForm)}
                />
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {selectedSpell && (
        <SpellDrawingCanvas
          spell={selectedSpell}
          onSuccess={handleClosePractice}
          onFailure={handleClosePractice}
          onClose={handleClosePractice}
          timeLimit={DRAWING_TIME_LIMIT}
        />
      )}
    </div>
  );
}

function SpellCard({
  spellForm,
  spellData,
  onClick,
}: {
  spellForm: SpellForm;
  spellData: Spell;
  onClick: () => void;
}) {
  const pointsString = spellForm.points
    .map((p) => `${p.x * 100},${p.y * 100}`)
    .join(" ");

  const stanceColor =
    spellData.stance === "Aggressive"
      ? "text-aggressive"
      : spellData.stance === "Defensive"
        ? "text-defensive"
        : "text-sneaky";

  return (
    <Card
      className="hover:border-primary/50 transition-all cursor-pointer hover:scale-[1.02] flex flex-col h-full overflow-hidden"
      onClick={onClick}
    >
      <CardHeader className="pb-2 bg-secondary/10">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg leading-tight">
            {spellData.name}
          </CardTitle>
          <span
            className={`text-xs font-bold uppercase ${stanceColor} border border-current px-1.5 py-0.5 rounded`}
          >
            {spellData.stance}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-4 flex-1">
        <div className="w-full aspect-square bg-secondary/20 rounded-lg flex items-center justify-center relative border border-border/50 self-center max-w-[140px] group overflow-hidden">
          {spellData.image && (
            <img
              src={spellData.image}
              alt={spellData.name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-0"
            />
          )}

          <div
            className={`absolute inset-0 transition-opacity duration-200 ${spellData.image ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
          >
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-border/10"></div>
              <div className="border-b border-border/10"></div>
              <div className="border-r border-border/10"></div>
              <div></div>
            </div>

            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              className="overflow-visible p-4"
            >
              {/* Start point marker */}
              <circle
                cx={spellForm.points[0].x * 100}
                cy={spellForm.points[0].y * 100}
                r="3"
                className="fill-green-500"
              />
              {/* End point marker */}
              <circle
                cx={spellForm.points[spellForm.points.length - 1].x * 100}
                cy={spellForm.points[spellForm.points.length - 1].y * 100}
                r="3"
                className="fill-red-500"
              />

              <polyline
                points={pointsString}
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="text-muted-foreground italic text-xs min-h-[2.5em]">
            {spellData.description}
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {spellData.baseDamage > 0 && (
              <div className="flex items-center gap-1 font-medium">
                <span className="text-red-500">⚔️</span> {spellData.baseDamage}{" "}
                Dmg
              </div>
            )}
            {spellData.baseHeal > 0 && (
              <div className="flex items-center gap-1 font-medium">
                <span className="text-green-500">❤️</span> {spellData.baseHeal}{" "}
                Heal
              </div>
            )}
          </div>

          {spellData.effects.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-semibold text-muted-foreground">
                Effects:
              </p>
              <ul className="text-xs space-y-0.5">
                {spellData.effects.map((effect, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <EffectIcon type={effect.type} className="w-3 h-3" />
                      <span className="capitalize">{effect.type}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {effect.chance}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
