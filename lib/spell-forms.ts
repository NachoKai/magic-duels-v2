// Point interface for gesture recognition
export interface Point {
  x: number;
  y: number;
}

// Spell form template - normalized points representing the gesture
export interface SpellForm {
  spellId: string;
  points: Point[];
}

// Generate spell forms based on the images provided
// These are simplified representations of the wand movements
export const spellForms: SpellForm[] = [
  // Expelliarmus - downward arrow with slight curve at bottom (canonical)
  {
    spellId: "expelliarmus",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.5 },
      { x: 0.5, y: 0.7 },
      { x: 0.45, y: 0.75 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Alohomora - circle with vertical line through center (canonical)
  {
    spellId: "alohomora",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.5 },
      { x: 0.5, y: 0.7 },
    ],
  },
  // Wingardium Leviosa - wavy line: right, then down, then right (canonical)
  {
    spellId: "wingardium-leviosa",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.6, y: 0.7 },
      { x: 0.7, y: 0.6 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Lumos - simple upward arrow (canonical)
  {
    spellId: "lumos",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.2 },
    ],
  },
  // Nox - simple downward arrow (canonical)
  {
    spellId: "nox",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Ascendio - curved line starting down, looping up, then straight up (canonical)
  {
    spellId: "ascendio",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.4, y: 0.7 },
      { x: 0.3, y: 0.6 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.4 },
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.1 },
    ],
  },
  // Descendio - curved line starting up, looping down, then straight down (canonical)
  {
    spellId: "descendio",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.4 },
      { x: 0.6, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.9 },
    ],
  },
  // Silencio - diagonal line with small downward hook at end (canonical)
  {
    spellId: "silencio",
    points: [
      { x: 0.3, y: 0.7 },
      { x: 0.7, y: 0.3 },
      { x: 0.65, y: 0.4 },
      { x: 0.6, y: 0.45 },
    ],
  },
  // Reparo - clockwise spiral from center outward (canonical)
  {
    spellId: "reparo",
    points: [
      { x: 0.5, y: 0.5 },
      { x: 0.55, y: 0.45 },
      { x: 0.6, y: 0.4 },
      { x: 0.6, y: 0.5 },
      { x: 0.6, y: 0.6 },
      { x: 0.5, y: 0.6 },
      { x: 0.4, y: 0.6 },
      { x: 0.4, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.4 },
    ],
  },
  // Arresto Momentum - large M shape (canonical)
  {
    spellId: "arresto-momento",
    points: [
      { x: 0.2, y: 0.8 },
      { x: 0.3, y: 0.2 },
      { x: 0.5, y: 0.5 },
      { x: 0.7, y: 0.2 },
      { x: 0.8, y: 0.8 },
    ],
  },
  // Finite Incantatem - horizontal line with small downward hook at right end (canonical)
  {
    spellId: "finite-incantatem",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.75, y: 0.55 },
      { x: 0.7, y: 0.6 },
    ],
  },
  // Herbivicus - lowercase h shape (canonical)
  {
    spellId: "herbivicus",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.8 },
      { x: 0.3, y: 0.5 },
      { x: 0.7, y: 0.5 },
      { x: 0.7, y: 0.8 },
    ],
  },
  // Locomotor - number 4 shape (canonical)
  {
    spellId: "locomotor",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.3 },
    ],
  },
  // Oppugno - right-pointing triangle with line extending from right vertex (canonical)
  {
    spellId: "oppugno",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.6, y: 0.2 },
      { x: 0.6, y: 0.8 },
      { x: 0.2, y: 0.5 },
      { x: 0.7, y: 0.5 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Incendio - A shape without crossbar, with small hook at top (canonical)
  {
    spellId: "incendio",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.3, y: 0.2 },
      { x: 0.35, y: 0.15 },
      { x: 0.4, y: 0.2 },
      { x: 0.7, y: 0.2 },
      { x: 0.65, y: 0.15 },
      { x: 0.6, y: 0.2 },
    ],
  },
  // Revelio - R shape
  {
    spellId: "revelio",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.8 },
      { x: 0.3, y: 0.5 },
      { x: 0.6, y: 0.3 },
      { x: 0.6, y: 0.5 },
      { x: 0.6, y: 0.7 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Aquamenti - wavy horizontal line (canonical)
  {
    spellId: "aquamenti",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.3 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Stupefy - L shape rotated 90 degrees clockwise (canonical)
  {
    spellId: "stupefy",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.5 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Petrificus Totalus - horizontal line with downward curve at left, upward at right (canonical)
  {
    spellId: "petrificus-totalus",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.25, y: 0.55 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.5 },
      { x: 0.7, y: 0.5 },
      { x: 0.75, y: 0.45 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Protego - upward arrow with slight shield curve at top (canonical-inspired, unique from Lumos)
  {
    spellId: "protego",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.45, y: 0.25 },
      { x: 0.5, y: 0.2 },
      { x: 0.55, y: 0.25 },
    ],
  },
  // Reducto - diagonal line with small circle at bottom-right end (canonical)
  {
    spellId: "reducto",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.8 },
      { x: 0.75, y: 0.75 },
      { x: 0.8, y: 0.8 },
      { x: 0.85, y: 0.85 },
    ],
  },
  // Flipendo - horizontal line with arrow pointing right at end (canonical)
  {
    spellId: "flipendo",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.4 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.6 },
    ],
  },
  // Riddikulus - horizontal line with two small downward hooks (canonical)
  {
    spellId: "riddikulus",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.3, y: 0.6 },
      { x: 0.7, y: 0.6 },
    ],
  },
  // Levicorpus - stylized J shape: vertical line, loop at bottom, horizontal line right (canonical)
  {
    spellId: "levicorpus",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.7 },
      { x: 0.3, y: 0.8 },
      { x: 0.4, y: 0.85 },
      { x: 0.5, y: 0.8 },
      { x: 0.6, y: 0.8 },
    ],
  },
  // Episkey - simple circle (canonical)
  {
    spellId: "episkey",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.3 },
    ],
  },
  // Diffindo - N shape (canonical)
  {
    spellId: "diffindo",
    points: [
      { x: 0.2, y: 0.8 },
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.8 },
      { x: 0.8, y: 0.2 },
    ],
  },
  // Impedimenta - simple horizontal line (canonical)
  {
    spellId: "impedimenta",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Confringo - Z shape (canonical)
  {
    spellId: "confringo",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.2 },
      { x: 0.2, y: 0.8 },
      { x: 0.8, y: 0.8 },
    ],
  },
  // Bombarda - explosion pattern (star-like burst, no repeated center)
  {
    spellId: "bombarda",
    points: [
      { x: 0.5, y: 0.5 },
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.4 },
      { x: 0.8, y: 0.5 },
      { x: 0.6, y: 0.6 },
      { x: 0.5, y: 0.8 },
      { x: 0.4, y: 0.6 },
      { x: 0.2, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.2 },
    ],
  },
  // Depulso - banishing wave (powerful spell - more complex, no repeated center)
  {
    spellId: "depulso",
    points: [
      { x: 0.3, y: 0.4 },
      { x: 0.2, y: 0.3 },
      { x: 0.3, y: 0.2 },
      { x: 0.5, y: 0.3 },
      { x: 0.7, y: 0.2 },
      { x: 0.8, y: 0.3 },
      { x: 0.7, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.3, y: 0.6 },
      { x: 0.2, y: 0.7 },
      { x: 0.3, y: 0.8 },
    ],
  },
  // Immobulus - freezing cross pattern (immobilizing gesture)
  {
    spellId: "immobulus",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.5, y: 0.5 },
      { x: 0.8, y: 0.8 },
      { x: 0.5, y: 0.5 },
      { x: 0.2, y: 0.8 },
      { x: 0.5, y: 0.5 },
      { x: 0.8, y: 0.2 },
      { x: 0.5, y: 0.5 },
    ],
  },
  // Rictusempra - tickling spiral pattern (amusing spell)
  {
    spellId: "rictusempra",
    points: [
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.3 },
      { x: 0.4, y: 0.4 },
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.6 },
      { x: 0.5, y: 0.7 },
      { x: 0.6, y: 0.6 },
      { x: 0.7, y: 0.5 },
    ],
  },
  // Incarcerous - infinity symbol
  {
    spellId: "incarcerous",
    points: [
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.7, y: 0.5 },
      { x: 0.5, y: 0.7 },
      { x: 0.3, y: 0.5 },
    ],
  },
  // Meteolojinx - weather pattern (cloud with lightning strike)
  {
    spellId: "meteolojinx",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.3 },
      { x: 0.5, y: 0.35 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.4 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.6 },
      { x: 0.5, y: 0.7 },
      { x: 0.4, y: 0.8 },
      { x: 0.5, y: 0.85 },
    ],
  },
  // Mimblewimble - curved line starting left, going up, then curving down and right (canonical)
  {
    spellId: "mimblewimble",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.7, y: 0.3 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.7 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Vulnera Sanentur - powerful healing pattern (strong heal spell - unique)
  {
    spellId: "vulnera-sanentur",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.4, y: 0.3 },
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.4 },
      { x: 0.6, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.4 },
      { x: 0.5, y: 0.6 },
      { x: 0.5, y: 0.8 },
      { x: 0.3, y: 0.5 },
      { x: 0.7, y: 0.5 },
    ],
  },
  // Glacius - freezing pattern (powerful 13 damage spell)
  {
    spellId: "glacius",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.4, y: 0.3 },
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.4 },
      { x: 0.6, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Blue Fire Spell - blue flame pattern (powerful 10 damage spell)
  {
    spellId: "blue-fire-spell",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.4, y: 0.6 },
      { x: 0.35, y: 0.4 },
      { x: 0.4, y: 0.3 },
      { x: 0.5, y: 0.25 },
      { x: 0.6, y: 0.3 },
      { x: 0.65, y: 0.4 },
      { x: 0.6, y: 0.6 },
      { x: 0.5, y: 0.8 },
      { x: 0.45, y: 0.7 },
      { x: 0.55, y: 0.7 },
    ],
  },
  // Waddiwasi - projectile pattern (powerful 14 damage spell)
  {
    spellId: "waddiwasi",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.35 },
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.35 },
      { x: 0.7, y: 0.4 },
      { x: 0.8, y: 0.5 },
      { x: 0.75, y: 0.6 },
      { x: 0.7, y: 0.7 },
    ],
  },
  // Windy Spell - wind gust pattern (powerful 13 damage spell)
  {
    spellId: "windy-spell",
    points: [
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.35 },
      { x: 0.6, y: 0.4 },
      { x: 0.7, y: 0.5 },
      { x: 0.65, y: 0.6 },
      { x: 0.5, y: 0.65 },
      { x: 0.35, y: 0.6 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.7 },
    ],
  },
  // Pus Squirting Hex - disgusting pattern (powerful 14 damage spell)
  {
    spellId: "pus-squirting-hex",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.5 },
      { x: 0.3, y: 0.6 },
      { x: 0.5, y: 0.7 },
      { x: 0.7, y: 0.6 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Arrow Shooting - arrow pattern (powerful 13 damage spell)
  {
    spellId: "arrow-shooting",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.45 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.35 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.25 },
      { x: 0.8, y: 0.2 },
      { x: 0.75, y: 0.3 },
      { x: 0.7, y: 0.4 },
      { x: 0.65, y: 0.5 },
    ],
  },
  // Avifors - bird transformation pattern (powerful 15 damage spell)
  {
    spellId: "avifors",
    points: [
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.35 },
      { x: 0.6, y: 0.4 },
      { x: 0.7, y: 0.5 },
      { x: 0.65, y: 0.6 },
      { x: 0.5, y: 0.65 },
      { x: 0.35, y: 0.6 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.7 },
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Insect Hex - swarm pattern (powerful 12 damage spell)
  {
    spellId: "insect-hex",
    points: [
      { x: 0.5, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.6 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.4 },
      { x: 0.7, y: 0.5 },
      { x: 0.6, y: 0.6 },
      { x: 0.5, y: 0.5 },
      { x: 0.35, y: 0.35 },
      { x: 0.65, y: 0.65 },
      { x: 0.35, y: 0.65 },
      { x: 0.65, y: 0.35 },
    ],
  },
];

// Default forms for spells not explicitly defined (simple patterns)
const defaultForms: Record<string, Point[]> = {
  // Simple patterns for remaining spells
  vertical: [
    { x: 0.5, y: 0.2 },
    { x: 0.5, y: 0.8 },
  ],
  horizontal: [
    { x: 0.2, y: 0.5 },
    { x: 0.8, y: 0.5 },
  ],
  diagonal: [
    { x: 0.2, y: 0.2 },
    { x: 0.8, y: 0.8 },
  ],
  circle: [
    { x: 0.5, y: 0.3 },
    { x: 0.6, y: 0.4 },
    { x: 0.5, y: 0.5 },
    { x: 0.4, y: 0.4 },
    { x: 0.5, y: 0.3 },
  ],
  wave: [
    { x: 0.2, y: 0.5 },
    { x: 0.4, y: 0.3 },
    { x: 0.6, y: 0.5 },
    { x: 0.8, y: 0.3 },
  ],
};

// Get spell form by spell ID
export function getSpellForm(spellId: string): Point[] {
  const form = spellForms.find((f) => f.spellId === spellId);
  if (form) return form.points;

  // Generate a default form based on spell name hash for consistency
  const hash = spellId
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const patterns = Object.values(defaultForms);
  return patterns[hash % patterns.length];
}

// Get all spell forms for reference
export function getAllSpellForms(): SpellForm[] {
  return spellForms;
}
