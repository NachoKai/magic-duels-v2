"use client";

import { getAllSpellForms, SpellForm } from "@/lib/spell-forms";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LibraryViewProps {
  onBack: () => void;
}

export function LibraryView({ onBack }: LibraryViewProps) {
  const spells = getAllSpellForms();

  const formatSpellName = (id: string) => {
    return id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col gap-6">
        <div className="flex items-center gap-4 border-b pb-4">
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
            <h1 className="text-3xl font-bold tracking-tight">Spell Library</h1>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
            {spells.map((spell) => (
              <SpellCard
                key={spell.spellId}
                spell={spell}
                name={formatSpellName(spell.spellId)}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

function SpellCard({ spell, name }: { spell: SpellForm; name: string }) {
  // Convert normalized points (0-1) to SVG coordinates (0-100)
  const pointsString = spell.points
    .map((p) => `${p.x * 100},${p.y * 100}`)
    .join(" ");

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center p-6 pt-0">
        <div className="w-32 h-32 bg-secondary/20 rounded-lg flex items-center justify-center relative border border-border/50">
          {/* Grid lines for reference */}
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
            className="overflow-visible"
          >
            {/* Start point marker */}
            <circle
              cx={spell.points[0].x * 100}
              cy={spell.points[0].y * 100}
              r="3"
              className="fill-green-500"
            />
            {/* End point marker */}
            <circle
              cx={spell.points[spell.points.length - 1].x * 100}
              cy={spell.points[spell.points.length - 1].y * 100}
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
      </CardContent>
    </Card>
  );
}
