import {
  type Spell,
  type Stance,
  type PlayerState,
  type StatusEffect,
  getSpellsByStance,
  getEffectDisplayName,
} from "./spells";

export interface DiceRoll {
  needed: number;
  rolled: number;
  success: boolean;
  effectName: string;
}

export interface GameState {
  player1: PlayerState;
  player2: PlayerState;
  turn: number;
  phase: "menu" | "stance" | "spell" | "result" | "gameover";
  currentPlayer: 1 | 2;
  stanceWinner: 1 | 2 | null;
  player1Stance: Stance | null;
  player2Stance: Stance | null;
  lastAction: string[];
  gameMode: "cpu" | "local";
  waitingForPlayer2Stance: boolean;
}

export const createInitialState = (gameMode: "cpu" | "local"): GameState => ({
  player1: {
    health: 100,
    maxHealth: 100,
    statusEffects: [],
    isStunned: 0,
    name: "Player 1",
  },
  player2: {
    health: 100,
    maxHealth: 100,
    statusEffects: [],
    isStunned: 0,
    name: gameMode === "cpu" ? "CPU" : "Player 2",
  },
  turn: 1,
  phase: "stance",
  currentPlayer: 1,
  stanceWinner: null,
  player1Stance: null,
  player2Stance: null,
  lastAction: [],
  gameMode,
  waitingForPlayer2Stance: false,
});

export const processStatusEffects = (
  player: PlayerState
): { player: PlayerState; messages: string[] } => {
  const messages: string[] = [];
  let totalDamage = 0;
  let totalHeal = 0;

  const newEffects: StatusEffect[] = [];

  for (const effect of player.statusEffects) {
    if (effect.type === "bleed") {
      totalDamage += effect.value;
      messages.push(`Bleeding for ${effect.value} damage`);
    } else if (effect.type === "burn") {
      totalDamage += effect.value;
      messages.push(`Burning for ${effect.value} damage`);
    } else if (effect.type === "heal") {
      totalHeal += effect.value;
      messages.push(`Healing for ${effect.value}`);
    } else if (effect.type === "drain") {
      totalDamage += effect.value;
      messages.push(`Drained for ${effect.value}`);
    }

    if (effect.turnsRemaining > 1) {
      newEffects.push({ ...effect, turnsRemaining: effect.turnsRemaining - 1 });
    }
  }

  const newHealth = Math.min(
    player.maxHealth,
    Math.max(0, player.health - totalDamage + totalHeal)
  );

  return {
    player: {
      ...player,
      health: newHealth,
      statusEffects: newEffects,
      isStunned: Math.max(0, player.isStunned - 1),
    },
    messages,
  };
};

const rollDice = (
  chance: number,
  effectName: string
): { success: boolean; roll: DiceRoll } => {
  const rolled = Math.floor(Math.random() * 100) + 1;
  const success = rolled <= chance;
  return {
    success,
    roll: {
      needed: chance,
      rolled,
      success,
      effectName,
    },
  };
};

const formatDiceRoll = (roll: DiceRoll): string => {
  const icon = roll.success ? "✓" : "✗";
  return `[DICE:${roll.rolled}/${roll.needed}:${icon}:${roll.effectName}]`;
};

export const applySpell = (
  caster: PlayerState,
  target: PlayerState,
  spell: Spell
): { caster: PlayerState; target: PlayerState; messages: string[] } => {
  const messages: string[] = [];
  let newTargetHealth = target.health;
  let newCasterHealth = caster.health;
  const newTargetEffects = [...target.statusEffects];
  const newCasterEffects = [...caster.statusEffects];
  let newTargetStun = target.isStunned;

  // Apply base damage
  if (spell.baseDamage > 0) {
    newTargetHealth -= spell.baseDamage;
    messages.push(`${spell.name} deals ${spell.baseDamage} damage!`);
  }

  // Apply base heal
  if (spell.baseHeal > 0) {
    newCasterHealth = Math.min(
      caster.maxHealth,
      newCasterHealth + spell.baseHeal
    );
    messages.push(`${spell.name} heals for ${spell.baseHeal}!`);
  }

  // Process effects with dice rolls
  for (const effect of spell.effects) {
    const effectName = getEffectDisplayName(effect.type);

    if (effect.chance < 100) {
      const { success, roll } = rollDice(effect.chance, effectName);
      const diceInfo = formatDiceRoll(roll);

      if (!success) {
        messages.push(`${diceInfo} ${effectName} failed!`);
        continue;
      }

      // Add dice info to success messages
      switch (effect.type) {
        case "damage":
          newTargetHealth -= effect.value;
          messages.push(`${diceInfo} Extra ${effect.value} damage!`);
          break;
        case "heal":
          if (effect.duration && effect.duration > 0) {
            newCasterEffects.push({
              type: "heal",
              value: effect.value,
              turnsRemaining: effect.duration,
            });
            messages.push(
              `${diceInfo} Heal over time: +${effect.value}/turn for ${effect.duration} turns`
            );
          } else {
            newCasterHealth = Math.min(
              caster.maxHealth,
              newCasterHealth + effect.value
            );
            messages.push(`${diceInfo} Heals for ${effect.value}!`);
          }
          break;
        case "stun":
          newTargetStun = Math.max(newTargetStun, effect.value);
          messages.push(
            `${diceInfo} Target stunned for ${effect.value} turn(s)!`
          );
          break;
        case "bleed":
          newTargetEffects.push({
            type: "bleed",
            value: effect.value,
            turnsRemaining: effect.duration || 1,
          });
          messages.push(
            `${diceInfo} Bleeding: ${effect.value}/turn for ${effect.duration} turns`
          );
          break;
        case "burn":
          newTargetEffects.push({
            type: "burn",
            value: effect.value,
            turnsRemaining: effect.duration || 1,
          });
          messages.push(
            `${diceInfo} Burning: ${effect.value}/turn for ${effect.duration} turns`
          );
          break;
        case "drain":
          newTargetEffects.push({
            type: "drain",
            value: effect.value,
            turnsRemaining: effect.duration || 1,
          });
          messages.push(
            `${diceInfo} Draining: ${effect.value}/turn for ${effect.duration} turns`
          );
          break;
        case "stopBleed":
          const bleedCount = newCasterEffects.filter(
            (e) => e.type === "bleed"
          ).length;
          if (bleedCount > 0) {
            messages.push(`${diceInfo} Bleeding stopped!`);
          }
          newCasterEffects.splice(
            0,
            newCasterEffects.length,
            ...newCasterEffects.filter((e) => e.type !== "bleed")
          );
          break;
        case "stopBurn":
          const burnCount = newCasterEffects.filter(
            (e) => e.type === "burn"
          ).length;
          if (burnCount > 0) {
            messages.push(`${diceInfo} Burning stopped!`);
          }
          newCasterEffects.splice(
            0,
            newCasterEffects.length,
            ...newCasterEffects.filter((e) => e.type !== "burn")
          );
          break;
        case "stopAll":
          newCasterEffects.splice(0, newCasterEffects.length);
          messages.push(`${diceInfo} All status effects cleared!`);
          break;
      }
    } else {
      // 100% chance - no dice roll needed
      switch (effect.type) {
        case "damage":
          newTargetHealth -= effect.value;
          messages.push(`Extra ${effect.value} damage!`);
          break;
        case "heal":
          if (effect.duration && effect.duration > 0) {
            newCasterEffects.push({
              type: "heal",
              value: effect.value,
              turnsRemaining: effect.duration,
            });
            messages.push(
              `Heal over time: +${effect.value}/turn for ${effect.duration} turns`
            );
          } else {
            newCasterHealth = Math.min(
              caster.maxHealth,
              newCasterHealth + effect.value
            );
            messages.push(`Heals for ${effect.value}!`);
          }
          break;
        case "stun":
          newTargetStun = Math.max(newTargetStun, effect.value);
          messages.push(`Target stunned for ${effect.value} turn(s)!`);
          break;
        case "bleed":
          newTargetEffects.push({
            type: "bleed",
            value: effect.value,
            turnsRemaining: effect.duration || 1,
          });
          messages.push(
            `Bleeding: ${effect.value}/turn for ${effect.duration} turns`
          );
          break;
        case "burn":
          newTargetEffects.push({
            type: "burn",
            value: effect.value,
            turnsRemaining: effect.duration || 1,
          });
          messages.push(
            `Burning: ${effect.value}/turn for ${effect.duration} turns`
          );
          break;
        case "drain":
          newTargetEffects.push({
            type: "drain",
            value: effect.value,
            turnsRemaining: effect.duration || 1,
          });
          messages.push(
            `Draining: ${effect.value}/turn for ${effect.duration} turns`
          );
          break;
        case "stopBleed":
          const bleedCount = newCasterEffects.filter(
            (e) => e.type === "bleed"
          ).length;
          if (bleedCount > 0) {
            messages.push("Bleeding stopped!");
          }
          newCasterEffects.splice(
            0,
            newCasterEffects.length,
            ...newCasterEffects.filter((e) => e.type !== "bleed")
          );
          break;
        case "stopBurn":
          const burnCount = newCasterEffects.filter(
            (e) => e.type === "burn"
          ).length;
          if (burnCount > 0) {
            messages.push("Burning stopped!");
          }
          newCasterEffects.splice(
            0,
            newCasterEffects.length,
            ...newCasterEffects.filter((e) => e.type !== "burn")
          );
          break;
        case "stopAll":
          newCasterEffects.splice(0, newCasterEffects.length);
          messages.push("All status effects cleared!");
          break;
      }
    }
  }

  return {
    caster: {
      ...caster,
      health: Math.max(0, newCasterHealth),
      statusEffects: newCasterEffects,
    },
    target: {
      ...target,
      health: Math.max(0, newTargetHealth),
      statusEffects: newTargetEffects,
      isStunned: newTargetStun,
    },
    messages,
  };
};

export const getCPUStance = (): Stance => {
  const stances: Stance[] = ["Defensive", "Sneaky", "Aggressive"];
  return stances[Math.floor(Math.random() * stances.length)];
};

export const getCPUSpell = (stance: Stance): Spell => {
  const availableSpells = getSpellsByStance(stance);
  return availableSpells[Math.floor(Math.random() * availableSpells.length)];
};
