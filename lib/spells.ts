export type Stance = "Defensive" | "Sneaky" | "Aggressive";
export type EffectType =
  | "damage"
  | "heal"
  | "stun"
  | "bleed"
  | "burn"
  | "drain"
  | "stopBleed"
  | "stopBurn"
  | "stopAll";

export interface SpellEffect {
  type: EffectType;
  value: number;
  duration?: number;
  chance: number;
}

export interface Spell {
  id: string;
  name: string;
  stance: Stance;
  baseDamage: number;
  baseHeal: number;
  effects: SpellEffect[];
  description: string;
  image: string;
}

export interface StatusEffect {
  type: "bleed" | "burn" | "heal" | "drain";
  value: number;
  turnsRemaining: number;
}

export interface PlayerState {
  health: number;
  maxHealth: number;
  statusEffects: StatusEffect[];
  isStunned: number;
  name: string;
}

export const spells: Spell[] = [
  // DEFENSIVE SPELLS
  {
    id: "blood-replenishing",
    name: "Blood Replenishing",
    stance: "Defensive",
    baseDamage: 0,
    baseHeal: 0,
    effects: [
      { type: "stopBleed", value: 0, chance: 100 },
      { type: "heal", value: 5, duration: 2, chance: 100 },
      { type: "heal", value: 5, duration: 3, chance: 40 },
    ],
    description: "Stops bleed, heals over time",
    image: "/assets/brp-2_orig.png",
  },
  {
    id: "wiggenweld",
    name: "Wiggenweld",
    stance: "Defensive",
    baseDamage: 0,
    baseHeal: 3,
    effects: [
      { type: "heal", value: 6, duration: 2, chance: 50 },
      { type: "heal", value: 6, duration: 2, chance: 25 },
    ],
    description: "Instant heal with chance for more",
    image: "/assets/wiggenweld.png",
  },
  {
    id: "vulnera-sanentur",
    name: "Vulnera Sanentur",
    stance: "Defensive",
    baseDamage: 0,
    baseHeal: 10,
    effects: [
      { type: "stopBleed", value: 0, chance: 100 },
      { type: "stopBurn", value: 0, chance: 100 },
      { type: "heal", value: 5, duration: 2, chance: 30 },
    ],
    description: "Strong heal, stops bleed and burn",
    image: "/assets/vulnera_orig.png",
  },
  {
    id: "episkey",
    name: "Episkey",
    stance: "Defensive",
    baseDamage: 0,
    baseHeal: 10,
    effects: [{ type: "heal", value: 5, duration: 2, chance: 100 }],
    description: "Reliable healing spell",
    image: "/assets/episkey.png",
  },
  {
    id: "glacius",
    name: "Glacius",
    stance: "Defensive",
    baseDamage: 13,
    baseHeal: 0,
    effects: [
      { type: "stopBleed", value: 0, chance: 100 },
      { type: "stopBurn", value: 0, chance: 100 },
      { type: "bleed", value: 3, duration: 1, chance: 65 },
      { type: "bleed", value: 3, duration: 3, chance: 20 },
    ],
    description: "Freezing attack, stops status effects",
    image: "/assets/glacius.png",
  },
  {
    id: "blue-fire-spell",
    name: "Blue Fire Spell",
    stance: "Defensive",
    baseDamage: 10,
    baseHeal: 0,
    effects: [
      { type: "burn", value: 10, duration: 1, chance: 90 },
      { type: "burn", value: 10, duration: 3, chance: 65 },
    ],
    description: "Magical blue flames",
    image: "/assets/blue-fire_orig.png",
  },
  {
    id: "hot-air-charm",
    name: "Hot Air Charm",
    stance: "Defensive",
    baseDamage: 6,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 50 },
      { type: "stun", value: 2, chance: 30 },
    ],
    description: "Warm air blast",
    image: "/assets/hotair_orig.png",
  },
  {
    id: "leek-jinx",
    name: "Leek Jinx",
    stance: "Defensive",
    baseDamage: 3,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 90 },
      { type: "stun", value: 3, chance: 30 },
    ],
    description: "Sprouts leeks from ears",
    image: "/assets/leek-jinx_orig.png",
  },
  {
    id: "tarantallegra",
    name: "Tarantallegra",
    stance: "Defensive",
    baseDamage: 4,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 70 },
      { type: "stun", value: 2, chance: 30 },
    ],
    description: "Forces uncontrollable dancing",
    image: "/assets/tarantallegra_orig.png",
  },
  {
    id: "diminuendo",
    name: "Diminuendo",
    stance: "Defensive",
    baseDamage: 3,
    baseHeal: 0,
    effects: [{ type: "drain", value: 5, duration: 2, chance: 33 }],
    description: "Shrinking hex",
    image: "/assets/diminuendo_orig.png",
  },
  {
    id: "levicorpus",
    name: "Levicorpus",
    stance: "Defensive",
    baseDamage: 4,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 70 },
      { type: "stun", value: 2, chance: 30 },
    ],
    description: "Hangs target upside down",
    image: "/assets/levicorpus_orig.png",
  },
  {
    id: "petrificus-totalus",
    name: "Petrificus Totalus",
    stance: "Defensive",
    baseDamage: 5,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 40 },
      { type: "stun", value: 2, chance: 20 },
    ],
    description: "Full body-bind curse",
    image: "/assets/petri_orig.png",
  },
  {
    id: "brachiabindo",
    name: "Brachiabindo",
    stance: "Defensive",
    baseDamage: 0,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 5, duration: 1, chance: 100 },
      { type: "bleed", value: 5, duration: 2, chance: 40 },
      { type: "stun", value: 2, chance: 50 },
      { type: "stun", value: 4, chance: 10 },
    ],
    description: "Binds arms with ropes",
    image: "/assets/brachia_orig.png",
  },
  {
    id: "fulgari",
    name: "Fulgari",
    stance: "Defensive",
    baseDamage: 9,
    baseHeal: 0,
    effects: [{ type: "stun", value: 2, chance: 55 }],
    description: "Binding spell with light",
    image: "/assets/fulgari_orig.png",
  },
  {
    id: "waddiwasi",
    name: "Waddiwasi",
    stance: "Defensive",
    baseDamage: 14,
    baseHeal: 0,
    effects: [],
    description: "Shoots objects at target",
    image: "/assets/waddiwasi_orig.png",
  },
  {
    id: "slugulus-eructo",
    name: "Slugulus Eructo",
    stance: "Defensive",
    baseDamage: 7,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 3, duration: 4, chance: 90 },
      { type: "bleed", value: 5, duration: 1, chance: 50 },
    ],
    description: "Causes slug vomiting",
    image: "/assets/slugus_orig.png",
  },

  // SNEAKY SPELLS
  {
    id: "incarcerous",
    name: "Incarcerous",
    stance: "Sneaky",
    baseDamage: 5,
    baseHeal: 0,
    effects: [{ type: "stun", value: 1, chance: 20 }],
    description: "Binds target with ropes",
    image: "/assets/incarcerous_orig.png",
  },
  {
    id: "rictusempra",
    name: "Rictusempra",
    stance: "Sneaky",
    baseDamage: 0,
    baseHeal: 0,
    effects: [{ type: "stun", value: 1, chance: 40 }],
    description: "Tickling charm",
    image: "/assets/rictusempra_orig.png",
  },
  {
    id: "flipendo",
    name: "Flipendo",
    stance: "Sneaky",
    baseDamage: 15,
    baseHeal: 0,
    effects: [],
    description: "Knockback jinx",
    image: "/assets/flipendo_orig.png",
  },
  {
    id: "impedimenta",
    name: "Impedimenta",
    stance: "Sneaky",
    baseDamage: 3,
    baseHeal: 0,
    effects: [{ type: "stun", value: 2, chance: 40 }],
    description: "Impediment jinx",
    image: "/assets/impedi_orig.png",
  },
  {
    id: "diffindo",
    name: "Diffindo",
    stance: "Sneaky",
    baseDamage: 6,
    baseHeal: 0,
    effects: [{ type: "bleed", value: 3, duration: 8, chance: 75 }],
    description: "Severing charm",
    image: "/assets/diffindo_orig.png",
  },
  {
    id: "giant-dungbomb",
    name: "Giant Dungbomb",
    stance: "Sneaky",
    baseDamage: 5,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 5, duration: 3, chance: 85 },
      { type: "stun", value: 1, chance: 30 },
    ],
    description: "Explosive stink bomb",
    image: "/assets/dungbomb_orig.png",
  },
  {
    id: "immobulus",
    name: "Immobulus",
    stance: "Sneaky",
    baseDamage: 10,
    baseHeal: 0,
    effects: [{ type: "stun", value: 1, chance: 25 }],
    description: "Freezing charm",
    image: "/assets/immobulus_orig.png",
  },
  {
    id: "windy-spell",
    name: "Windy Spell",
    stance: "Sneaky",
    baseDamage: 13,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 40 },
      { type: "stun", value: 2, chance: 15 },
    ],
    description: "Powerful gust of wind",
    image: "/assets/windyspell_orig.png",
  },
  {
    id: "nebulus",
    name: "Nebulus",
    stance: "Sneaky",
    baseDamage: 10,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 55 },
      { type: "stun", value: 4, chance: 20 },
    ],
    description: "Creates fog",
    image: "/assets/nebulus_orig.png",
  },
  {
    id: "bewitched-sleep",
    name: "Bewitched Sleep",
    stance: "Sneaky",
    baseDamage: 2,
    baseHeal: 0,
    effects: [{ type: "burn", value: 10, duration: 2, chance: 100 }],
    description: "Magical sleep curse",
    image: "/assets/bewithed_orig.png",
  },
  {
    id: "obscuro",
    name: "Obscuro",
    stance: "Sneaky",
    baseDamage: 9,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 20 },
      { type: "stun", value: 2, chance: 15 },
    ],
    description: "Blindfolds target",
    image: "/assets/obscuro_orig.png",
  },
  {
    id: "pimple-jinx",
    name: "Pimple Jinx",
    stance: "Sneaky",
    baseDamage: 8,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 3, duration: 2, chance: 90 },
      { type: "bleed", value: 3, duration: 5, chance: 20 },
    ],
    description: "Causes painful pimples",
    image: "/assets/pimple_orig.png",
  },
  {
    id: "hair-thickening-charm",
    name: "Hair Thickening Charm",
    stance: "Sneaky",
    baseDamage: 0,
    baseHeal: 0,
    effects: [
      { type: "drain", value: 5, duration: 4, chance: 25 },
      { type: "stun", value: 1, chance: 75 },
      { type: "stun", value: 2, chance: 45 },
    ],
    description: "Overgrows hair dramatically",
    image: "/assets/hair-thickening_orig.png",
  },
  {
    id: "pus-squirting-hex",
    name: "Pus Squirting Hex",
    stance: "Sneaky",
    baseDamage: 14,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 5, duration: 1, chance: 60 },
      { type: "bleed", value: 5, duration: 3, chance: 20 },
    ],
    description: "Disgusting pus attack",
    image: "/assets/pus-squirting2_orig.png",
  },
  {
    id: "flagrante",
    name: "Flagrante",
    stance: "Sneaky",
    baseDamage: 3,
    baseHeal: 0,
    effects: [
      { type: "burn", value: 10, duration: 1, chance: 100 },
      { type: "burn", value: 10, duration: 2, chance: 85 },
    ],
    description: "Burning curse on objects",
    image: "/assets/flagrante_orig.png",
  },
  {
    id: "tickling-hex",
    name: "Tickling Hex",
    stance: "Sneaky",
    baseDamage: 5,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 5, duration: 3, chance: 75 },
      { type: "stun", value: 2, chance: 65 },
    ],
    description: "Intense tickling curse",
    image: "/assets/tickling_orig.png",
  },
  {
    id: "jelly-legs-jinx",
    name: "Jelly Legs Jinx",
    stance: "Sneaky",
    baseDamage: 3,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 5, duration: 2, chance: 25 },
      { type: "drain", value: 5, duration: 5, chance: 50 },
    ],
    description: "Makes legs wobbly",
    image: "/assets/jelly-legs-jinx_orig.png",
  },
  {
    id: "babbling-curse",
    name: "Babbling Curse",
    stance: "Sneaky",
    baseDamage: 6,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 65 },
      { type: "stun", value: 2, chance: 30 },
    ],
    description: "Causes uncontrollable babbling",
    image: "/assets/babbling_orig.png",
  },
  {
    id: "cantis",
    name: "Cantis",
    stance: "Sneaky",
    baseDamage: 5,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 40 },
      { type: "stun", value: 2, chance: 20 },
    ],
    description: "Forces singing",
    image: "/assets/cantis_orig.png",
  },
  {
    id: "ebublio-jinx",
    name: "Ebublio Jinx",
    stance: "Sneaky",
    baseDamage: 6,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 50 },
      { type: "stun", value: 2, chance: 30 },
    ],
    description: "Traps in bubble",
    image: "/assets/ebublio_orig.png",
  },
  {
    id: "stupefy",
    name: "Stupefy",
    stance: "Sneaky",
    baseDamage: 3,
    baseHeal: 0,
    effects: [{ type: "stun", value: 2, chance: 55 }],
    description: "Stunning spell",
    image: "/assets/stupefy_orig.png",
  },

  // AGGRESSIVE SPELLS
  {
    id: "expelliarmus",
    name: "Expelliarmus",
    stance: "Aggressive",
    baseDamage: 10,
    baseHeal: 0,
    effects: [{ type: "stun", value: 1, chance: 25 }],
    description: "Disarming charm",
    image: "/assets/expell_orig.png",
  },
  {
    id: "melofors-jinx",
    name: "Melofors Jinx",
    stance: "Aggressive",
    baseDamage: 9,
    baseHeal: 0,
    effects: [{ type: "stun", value: 1, chance: 30 }],
    description: "Encases head in pumpkin",
    image: "/assets/melofors_orig.png",
  },
  {
    id: "bombarda",
    name: "Bombarda",
    stance: "Aggressive",
    baseDamage: 7,
    baseHeal: 0,
    effects: [
      { type: "burn", value: 10, duration: 1, chance: 50 },
      { type: "stun", value: 1, chance: 25 },
    ],
    description: "Explosive spell",
    image: "/assets/bombarda.png",
  },
  {
    id: "incendio",
    name: "Incendio",
    stance: "Aggressive",
    baseDamage: 5,
    baseHeal: 0,
    effects: [
      { type: "burn", value: 10, duration: 2, chance: 70 },
      { type: "stun", value: 2, chance: 10 },
    ],
    description: "Fire-making spell",
    image: "/assets/incendio_orig.png",
  },
  {
    id: "confringo",
    name: "Confringo",
    stance: "Aggressive",
    baseDamage: 5,
    baseHeal: 0,
    effects: [{ type: "stun", value: 2, chance: 20 }],
    description: "Blasting curse",
    image: "/assets/confrigo_orig.png",
  },
  {
    id: "bat-bogey-hex",
    name: "Bat-Bogey Hex",
    stance: "Aggressive",
    baseDamage: 9,
    baseHeal: 0,
    effects: [{ type: "bleed", value: 3, duration: 4, chance: 30 }],
    description: "Transforms bogeys into bats",
    image: "/assets/batbogey_orig.png",
  },
  {
    id: "fanged-frisbee",
    name: "Fanged Frisbee",
    stance: "Aggressive",
    baseDamage: 10,
    baseHeal: 0,
    effects: [{ type: "bleed", value: 3, duration: 4, chance: 65 }],
    description: "Flying biting disc",
    image: "/assets/fanged_orig.png",
  },
  {
    id: "stick-fast-hex",
    name: "Stick Fast Hex",
    stance: "Aggressive",
    baseDamage: 3,
    baseHeal: 0,
    effects: [{ type: "stun", value: 3, chance: 65 }],
    description: "Sticks target in place",
    image: "/assets/stickfast_orig.png",
  },
  {
    id: "throw-vial",
    name: "Throw Vial",
    stance: "Aggressive",
    baseDamage: 10,
    baseHeal: 0,
    effects: [],
    description: "Throws explosive potion",
    image: "/assets/throwvial.png",
  },
  {
    id: "depulso",
    name: "Depulso",
    stance: "Aggressive",
    baseDamage: 15,
    baseHeal: 0,
    effects: [],
    description: "Banishing charm",
    image: "/assets/depulso_orig.png",
  },
  {
    id: "arrow-shooting",
    name: "Arrow Shooting",
    stance: "Aggressive",
    baseDamage: 13,
    baseHeal: 0,
    effects: [{ type: "stun", value: 3, chance: 15 }],
    description: "Conjures and shoots arrows",
    image: "/assets/arrowshooting_orig.png",
  },
  {
    id: "avifors",
    name: "Avifors",
    stance: "Aggressive",
    baseDamage: 15,
    baseHeal: 0,
    effects: [],
    description: "Transforms into birds",
    image: "/assets/avifors_orig.png",
  },
  {
    id: "meteolojinx",
    name: "Meteolojinx",
    stance: "Aggressive",
    baseDamage: 11,
    baseHeal: 0,
    effects: [{ type: "stun", value: 1, chance: 30 }],
    description: "Weather-affecting jinx",
    image: "/assets/meteo.png",
  },
  {
    id: "cornflake-skin-jinx",
    name: "Cornflake Skin Jinx",
    stance: "Aggressive",
    baseDamage: 0,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 3, duration: 5, chance: 100 },
      { type: "stun", value: 2, chance: 33 },
    ],
    description: "Turns skin flaky",
    image: "/assets/cornflake_orig.png",
  },
  {
    id: "bee-sting-jinx",
    name: "Bee-Sting Jinx",
    stance: "Aggressive",
    baseDamage: 10,
    baseHeal: 0,
    effects: [{ type: "stun", value: 3, chance: 33 }],
    description: "Swarm of stinging bees",
    image: "/assets/bee-sting_orig.png",
  },
  {
    id: "relashio",
    name: "Relashio",
    stance: "Aggressive",
    baseDamage: 2,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 65 },
      { type: "stun", value: 2, chance: 40 },
    ],
    description: "Releasing sparks",
    image: "/assets/relashio_orig.png",
  },
  {
    id: "throw-teacup",
    name: "Throw Teacup",
    stance: "Aggressive",
    baseDamage: 3,
    baseHeal: 0,
    effects: [
      { type: "bleed", value: 3, duration: 4, chance: 65 },
      { type: "stun", value: 2, chance: 25 },
    ],
    description: "Hurls enchanted teacup",
    image: "/assets/throw-teacu_orig.png",
  },
  {
    id: "anteoculatia",
    name: "Anteoculatia",
    stance: "Aggressive",
    baseDamage: 8,
    baseHeal: 0,
    effects: [{ type: "bleed", value: 3, duration: 4, chance: 100 }],
    description: "Grows antlers on head",
    image: "/assets/anteo_orig.png",
  },
  {
    id: "pepper-breath",
    name: "Pepper Breath",
    stance: "Aggressive",
    baseDamage: 10,
    baseHeal: 0,
    effects: [{ type: "stun", value: 1, chance: 20 }],
    description: "Fiery breath attack",
    image: "/assets/pepper_orig.png",
  },
  {
    id: "insect-hex",
    name: "Insect Hex",
    stance: "Aggressive",
    baseDamage: 12,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 1, chance: 65 },
      { type: "bleed", value: 5, duration: 4, chance: 75 },
    ],
    description: "Summons biting insects",
    image: "/assets/insect-hex_orig.png",
  },
  {
    id: "vaulting-charm",
    name: "Vaulting Charm",
    stance: "Aggressive",
    baseDamage: 0,
    baseHeal: 0,
    effects: [{ type: "stun", value: 1, chance: 65 }],
    description: "Launches target into air",
    image: "/assets/vauktingcharm.png",
  },
  {
    id: "mobilicorpus",
    name: "Mobilicorpus",
    stance: "Aggressive",
    baseDamage: 5,
    baseHeal: 0,
    effects: [
      { type: "stun", value: 2, chance: 50 },
      { type: "bleed", value: 5, duration: 3, chance: 40 },
      { type: "stun", value: 2, chance: 10 },
    ],
    description: "Levitates and moves bodies",
    image: "/assets/mobili_orig.png",
  },
];

export const getSpellsByStance = (stance: Stance): Spell[] => {
  return spells.filter((spell) => spell.stance === stance);
};

export const getStanceAdvantage = (
  stance1: Stance,
  stance2: Stance
): "win" | "lose" | "tie" => {
  if (stance1 === stance2) return "tie";
  if (
    (stance1 === "Aggressive" && stance2 === "Sneaky") ||
    (stance1 === "Sneaky" && stance2 === "Defensive") ||
    (stance1 === "Defensive" && stance2 === "Aggressive")
  ) {
    return "win";
  }
  return "lose";
};

export const effectDisplayNames: Record<EffectType, string> = {
  damage: "Damage",
  heal: "Heal",
  stun: "Stun",
  bleed: "Bleed",
  burn: "Burn",
  drain: "Drain",
  stopBleed: "Stop Bleed",
  stopBurn: "Stop Burn",
  stopAll: "Stop All Effects",
};

export const getEffectDisplayName = (type: EffectType): string => {
  return effectDisplayNames[type] || type;
};

export const rollEffect = (chance: number): boolean => {
  return Math.random() * 100 < chance;
};
