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
  // Expelliarmus - downward arrow with slight curve
  {
    spellId: "expelliarmus",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.5 },
      { x: 0.45, y: 0.7 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Alohomora - circle with vertical line
  {
    spellId: "alohomora",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.7 },
    ],
  },
  // Wingardium Leviosa - wavy line
  {
    spellId: "wingardium-leviosa",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.4, y: 0.3 },
      { x: 0.6, y: 0.5 },
      { x: 0.8, y: 0.3 },
    ],
  },
  // Lumos - upward arrow
  {
    spellId: "lumos",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.2 },
    ],
  },
  // Nox - downward arrow
  {
    spellId: "nox",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Ascendio - curved line looping up
  {
    spellId: "ascendio",
    points: [
      { x: 0.5, y: 0.7 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.1 },
    ],
  },
  // Descendio - curved line looping down
  {
    spellId: "descendio",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.7, y: 0.5 },
      { x: 0.5, y: 0.7 },
      { x: 0.5, y: 0.9 },
    ],
  },
  // Silencio - diagonal with hook
  {
    spellId: "silencio",
    points: [
      { x: 0.3, y: 0.7 },
      { x: 0.7, y: 0.3 },
      { x: 0.6, y: 0.4 },
    ],
  },
  // Reparo - spiral
  {
    spellId: "reparo",
    points: [
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.3 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.6 },
      { x: 0.5, y: 0.7 },
      { x: 0.4, y: 0.6 },
    ],
  },
  // Arresto Momentum - M shape
  {
    spellId: "arresto-momento",
    points: [
      { x: 0.2, y: 0.7 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.5 },
      { x: 0.7, y: 0.3 },
      { x: 0.8, y: 0.7 },
    ],
  },
  // Finite Incantatem - horizontal line with hook
  {
    spellId: "finite-incantatem",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.6 },
    ],
  },
  // Herbivicus - h shape
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
  // Locomotor - 4 shape
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
  // Oppugno - triangle pointing right
  {
    spellId: "oppugno",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.6, y: 0.2 },
      { x: 0.6, y: 0.8 },
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Incendio - A shape
  {
    spellId: "incendio",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.3, y: 0.2 },
      { x: 0.7, y: 0.2 },
      { x: 0.5, y: 0.5 },
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
  // Aquamenti - wavy horizontal
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
  // Stupefy - L shape
  {
    spellId: "stupefy",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.5 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Petrificus Totalus - horizontal curve
  {
    spellId: "petrificus-totalus",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.6, y: 0.4 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Protego - upward arrow
  {
    spellId: "protego",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.2 },
    ],
  },
  // Reducto - diagonal with circle
  {
    spellId: "reducto",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.8 },
      { x: 0.75, y: 0.75 },
      { x: 0.8, y: 0.8 },
      { x: 0.75, y: 0.85 },
    ],
  },
  // Flipendo - horizontal with arrow
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
  // Riddikulus - horizontal with hooks
  {
    spellId: "riddikulus",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.3, y: 0.6 },
      { x: 0.7, y: 0.6 },
    ],
  },
  // Levicorpus - J shape
  {
    spellId: "levicorpus",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.7 },
      { x: 0.3, y: 0.8 },
      { x: 0.6, y: 0.8 },
    ],
  },
  // Episkey - circle
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
  // Diffindo - N shape
  {
    spellId: "diffindo",
    points: [
      { x: 0.2, y: 0.8 },
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.8 },
      { x: 0.8, y: 0.2 },
    ],
  },
  // Impedimenta - horizontal line
  {
    spellId: "impedimenta",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
    ],
  },
  // Confringo - Z shape
  {
    spellId: "confringo",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.2 },
      { x: 0.2, y: 0.8 },
      { x: 0.8, y: 0.8 },
    ],
  },
  // Bombarda - L shape
  {
    spellId: "bombarda",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.8 },
      { x: 0.8, y: 0.8 },
    ],
  },
  // Depulso - U shape
  {
    spellId: "depulso",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.8 },
      { x: 0.7, y: 0.8 },
      { x: 0.7, y: 0.2 },
    ],
  },
  // Immobulus - X shape
  {
    spellId: "immobulus",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.8 },
      { x: 0.2, y: 0.8 },
      { x: 0.8, y: 0.2 },
    ],
  },
  // Rictusempra - curved line with loop
  {
    spellId: "rictusempra",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.6 },
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
  // Meteolojinx - curved with dots
  {
    spellId: "meteolojinx",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.4, y: 0.3 },
      { x: 0.5, y: 0.4 },
      { x: 0.6, y: 0.2 },
      { x: 0.8, y: 0.4 },
    ],
  },
  // Mimblewimble - S shape
  {
    spellId: "mimblewimble",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.5, y: 0.3 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.7 },
      { x: 0.7, y: 0.8 },
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
