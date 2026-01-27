"use client";

import { cn } from "@/lib/utils";
import {
  Wand2,
  Users,
  Monitor,
  BookOpen,
  Shield,
  Eye,
  Sword,
} from "lucide-react";

interface MainMenuProps {
  onStartGame: (mode: "cpu" | "local") => void;
  onOpenLibrary: () => void;
}

export function MainMenu({ onStartGame, onOpenLibrary }: MainMenuProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Title */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Wand2 className="w-16 h-16 text-primary animate-pulse-glow" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-wider">
            Magic Duels
          </h1>
          <p className="text-muted-foreground">
            A wizarding battle of wits and spells
          </p>
        </div>

        {/* Game Mode Selection */}
        <div className="space-y-4">
          <button
            onClick={() => onStartGame("cpu")}
            className={cn(
              "w-full flex items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all duration-300",
              "border-primary bg-primary/10 hover:bg-primary/20",
              "group cursor-pointer"
            )}
          >
            <Monitor className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-foreground">
              Play vs CPU
            </span>
          </button>

          <button
            onClick={() => onStartGame("local")}
            className={cn(
              "w-full flex items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all duration-300",
              "border-sneaky bg-sneaky/10 hover:bg-sneaky/20",
              "group cursor-pointer"
            )}
          >
            <Users className="w-6 h-6 text-sneaky group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-foreground">
              2 Player Local
            </span>
          </button>

          <button
            onClick={onOpenLibrary}
            className={cn(
              "w-full flex items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all duration-300",
              "border-muted-foreground/30 bg-muted/10 hover:bg-muted/20",
              "group cursor-pointer"
            )}
          >
            <BookOpen className="w-6 h-6 text-muted-foreground group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-foreground">
              Spell Library
            </span>
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">How to Play</h2>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p>1. Choose a stance each turn:</p>
            <div className="grid grid-cols-3 gap-2 pl-4">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-defensive" />
                <span>Defensive</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-sneaky" />
                <span>Sneaky</span>
              </div>
              <div className="flex items-center gap-1">
                <Sword className="w-4 h-4 text-aggressive" />
                <span>Aggressive</span>
              </div>
            </div>

            <p>2. Stance advantages:</p>
            <ul className="pl-4 space-y-1 text-center">
              <li>
                <span className="text-aggressive">Aggressive</span> beats{" "}
                <span className="text-sneaky">Sneaky</span>
              </li>
              <li>
                <span className="text-sneaky">Sneaky</span> beats{" "}
                <span className="text-defensive">Defensive</span>
              </li>
              <li>
                <span className="text-defensive">Defensive</span> beats{" "}
                <span className="text-aggressive">Aggressive</span>
              </li>
            </ul>

            <p>3. The winner casts a spell from their stance&apos; category</p>
            <p>4. Reduce your opponent&apos;s health to 0 to win!</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[14px] text-muted-foreground">
          55+ unique spells with damage, healing, and status effects
        </p>
      </div>
    </div>
  );
}
