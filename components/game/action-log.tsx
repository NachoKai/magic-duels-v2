"use client";

import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import { Shield, Eye, Swords, Dices } from "lucide-react";
import { EffectIcon } from "@/components/game/effect-icon";

interface ActionLogProps {
  messages: string[];
  player1Name?: string;
  player2Name?: string;
}

const getStanceIcon = (msg: string) => {
  if (msg.includes("[Defensive]") || msg.includes("chose Defensive"))
    return <Shield className="w-3 h-3 text-defensive" />;
  if (msg.includes("[Sneaky]") || msg.includes("chose Sneaky"))
    return <Eye className="w-3 h-3 text-sneaky" />;
  if (msg.includes("[Aggressive]") || msg.includes("chose Aggressive"))
    return <Swords className="w-3 h-3 text-aggressive" />;
  return null;
};

interface ParsedDice {
  rolled: number;
  needed: number;
  success: boolean;
  effectName: string;
}

const parseDiceRoll = (
  msg: string
): { dice: ParsedDice | null; cleanMsg: string } => {
  const diceMatch = msg.match(/\[DICE:(\d+)\/(\d+):(✓|✗):([^\]]+)\]/);
  if (diceMatch) {
    return {
      dice: {
        rolled: Number.parseInt(diceMatch[1]),
        needed: Number.parseInt(diceMatch[2]),
        success: diceMatch[3] === "✓",
        effectName: diceMatch[4],
      },
      cleanMsg: msg.replace(/\[DICE:[^\]]+\]\s*/, ""),
    };
  }
  return { dice: null, cleanMsg: msg };
};

const cleanMessage = (msg: string) => {
  return msg
    .replace(/\[(Defensive|Sneaky|Aggressive)\]\s*/g, "")
    .replace(/\[DICE:[^\]]+\]\s*/g, "");
};

type MessageType = "player1" | "player2" | "system";

const getMessageType = (
  msg: string,
  player1Name: string,
  player2Name: string
): MessageType => {
  if (msg.startsWith("--- Turn") || msg.startsWith("Round")) return "system";
  const isNeutral =
    msg.includes("wins the duel") ||
    msg.includes("Both players chose") ||
    msg.includes("It's a tie") ||
    msg.includes("wins the stance");
  if (isNeutral) return "system";
  if (msg.includes(player1Name)) return "player1";
  if (msg.includes(player2Name)) return "player2";
  return "system";
};

const isTurnDivider = (msg: string) => msg.startsWith("--- Turn");

const getTurnNumber = (msg: string) => {
  const match = msg.match(/Turn (\d+)/);
  return match ? match[1] : "";
};

function DiceRollDisplay({ dice }: { dice: ParsedDice }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[12px] font-mono mr-1.5",
        dice.success
          ? "bg-heal/20 text-heal"
          : "bg-destructive/20 text-destructive"
      )}
    >
      <Dices className="w-3 h-3" />
      <span className="font-bold">{dice.rolled}</span>
      <span className="text-muted-foreground">/</span>
      <span>{dice.needed}</span>
      <span
        className={cn(
          "font-bold",
          dice.success ? "text-heal" : "text-destructive"
        )}
      >
        {dice.success ? "✓" : "✗"}
      </span>
    </div>
  );
}

const formatMessageWithIcons = (text: string) => {
  const parts = text.split(
    /(Bleeding|Burning|Heals|Heal|Healing|Drained|Draining|Stunned|Stun|damage)/gi
  );

  return parts.map((part, i) => {
    const lower = part.toLowerCase();
    let type = "";
    if (lower.includes("bleed")) type = "bleed";
    else if (lower.includes("burn")) type = "burn";
    else if (lower.includes("heal")) type = "heal";
    else if (lower.includes("drain")) type = "drain";
    else if (lower.includes("stun")) type = "stun";
    else if (lower === "damage") type = "damage";

    if (type) {
      return (
        <span key={i} className="inline-flex items-center gap-1">
          <EffectIcon type={type} className="w-3 h-3" />
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export function ActionLog({
  messages,
  player1Name = "Player 1",
  player2Name = "Player 2",
}: ActionLogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <h3 className="text-[14px] font-semibold px-3 py-2 bg-card border-b border-border">
        Battle Log
      </h3>
      <div
        ref={scrollRef}
        className="h-80 overflow-y-auto p-3 space-y-2 no-scrollbar"
      >
        {messages.map((msg, index) => {
          const type = getMessageType(msg, player1Name, player2Name);
          const stanceIcon = getStanceIcon(msg);
          const { dice, cleanMsg } = parseDiceRoll(msg);
          const displayMsg = cleanMessage(cleanMsg);

          if (isTurnDivider(msg)) {
            const turnNum = getTurnNumber(msg);
            return (
              <div
                key={index}
                className="flex items-center gap-3 py-2 animate-in fade-in duration-300"
              >
                <div className="flex-1 h-px bg-border" />
                <span className="text-[14px] text-muted-foreground font-medium">
                  Turn {turnNum}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
            );
          }

          if (type === "system") {
            return (
              <div key={index} className="flex justify-center">
                <div
                  className={cn(
                    "text-[14px] px-3 py-1 rounded-full bg-muted/50 text-muted-foreground",
                    "animate-in fade-in slide-in-from-bottom-1 duration-300",
                    msg.includes("wins") &&
                      "bg-primary/20 text-primary font-semibold"
                  )}
                >
                  {displayMsg}
                </div>
              </div>
            );
          }

          const isPlayer1 = type === "player1";

          return (
            <div
              key={index}
              className={cn(
                "flex",
                isPlayer1 ? "justify-start" : "justify-end",
                "animate-in fade-in duration-300",
                isPlayer1 ? "slide-in-from-left-2" : "slide-in-from-right-2"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] px-3 py-1.5 rounded-2xl text-[14px]",
                  isPlayer1
                    ? "bg-primary/20 rounded-bl-sm"
                    : "bg-destructive/20 rounded-br-sm",
                  msg.includes("damage") && "border border-destructive/50",
                  msg.includes("heal") && "border border-heal/50",
                  msg.includes("stun") && "border border-stun/50",
                  msg.includes("Bleed") && "border border-bleed/50",
                  msg.includes("Burn") && "border border-burn/50"
                )}
              >
                <div className="flex items-center gap-1.5 flex-wrap">
                  {stanceIcon}
                  {dice && <DiceRollDisplay dice={dice} />}
                  <span
                    className={cn(
                      "text-foreground",
                      msg.includes("damage") && "text-destructive",
                      msg.includes("heals") && "text-heal",
                      msg.includes("stunned") && "text-stun",
                      msg.includes("Bleed") && "text-bleed",
                      msg.includes("Burn") && "text-burn",
                      msg.includes("failed") && "text-muted-foreground"
                    )}
                  >
                    {formatMessageWithIcons(displayMsg)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
