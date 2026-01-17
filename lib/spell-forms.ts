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
  // Expelliarmus - disarming gesture (downward with outward flick)
  {
    spellId: "expelliarmus",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.5 },
      { x: 0.45, y: 0.7 },
      { x: 0.4, y: 0.75 },
      { x: 0.5, y: 0.8 },
      { x: 0.6, y: 0.75 },
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
  // Wingardium Leviosa - levitation arc (rising gesture)
  {
    spellId: "wingardium-leviosa",
    points: [
      { x: 0.3, y: 0.8 },
      { x: 0.4, y: 0.6 },
      { x: 0.5, y: 0.4 },
      { x: 0.6, y: 0.2 },
      { x: 0.7, y: 0.3 },
      { x: 0.6, y: 0.4 },
    ],
  },
  // Lumos - upward arrow with small flick at top (light creation)
  {
    spellId: "lumos",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.2 },
      { x: 0.45, y: 0.15 },
      { x: 0.5, y: 0.2 },
      { x: 0.55, y: 0.15 },
    ],
  },
  // Nox - downward arrow with extinguishing flick
  {
    spellId: "nox",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.8 },
      { x: 0.45, y: 0.75 },
      { x: 0.5, y: 0.8 },
      { x: 0.55, y: 0.75 },
    ],
  },
  // Ascendio - upward spiral (rising motion)
  {
    spellId: "ascendio",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.4, y: 0.7 },
      { x: 0.3, y: 0.6 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.4 },
      { x: 0.6, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.1 },
    ],
  },
  // Descendio - downward spiral (falling motion)
  {
    spellId: "descendio",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.4 },
      { x: 0.6, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.4, y: 0.7 },
      { x: 0.5, y: 0.8 },
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
  // Finite Incantatem - horizontal line with downward slash (ending gesture)
  {
    spellId: "finite-incantatem",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.6 },
      { x: 0.6, y: 0.7 },
      { x: 0.5, y: 0.8 },
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
  // Incendio - flame pattern (A shape with flickering top)
  {
    spellId: "incendio",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.3, y: 0.2 },
      { x: 0.35, y: 0.15 },
      { x: 0.4, y: 0.2 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.2 },
      { x: 0.65, y: 0.15 },
      { x: 0.7, y: 0.2 },
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
  // Aquamenti - water flow pattern (streaming gesture)
  {
    spellId: "aquamenti",
    points: [
      { x: 0.2, y: 0.3 },
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.3 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.4 },
      { x: 0.8, y: 0.3 },
      { x: 0.8, y: 0.7 },
    ],
  },
  // Stupefy - lightning bolt shape (stunning effect)
  {
    spellId: "stupefy",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.4, y: 0.35 },
      { x: 0.35, y: 0.4 },
      { x: 0.5, y: 0.55 },
      { x: 0.45, y: 0.6 },
      { x: 0.7, y: 0.8 },
    ],
  },
  // Petrificus Totalus - freezing wave pattern (paralyzing spell)
  {
    spellId: "petrificus-totalus",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.35, y: 0.35 },
      { x: 0.5, y: 0.4 },
      { x: 0.65, y: 0.35 },
      { x: 0.8, y: 0.5 },
      { x: 0.65, y: 0.65 },
      { x: 0.5, y: 0.6 },
      { x: 0.35, y: 0.65 },
      { x: 0.2, y: 0.5 },
    ],
  },
  // Protego - shield shape (upward arc with horizontal line at top)
  {
    spellId: "protego",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.4, y: 0.6 },
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.4 },
      { x: 0.6, y: 0.6 },
      { x: 0.5, y: 0.8 },
    ],
  },
  // Reducto - destruction pattern (diagonal with expanding circles)
  {
    spellId: "reducto",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.8 },
      { x: 0.7, y: 0.7 },
      { x: 0.75, y: 0.65 },
      { x: 0.8, y: 0.7 },
      { x: 0.75, y: 0.75 },
      { x: 0.7, y: 0.8 },
      { x: 0.75, y: 0.85 },
    ],
  },
  // Flipendo - curved push pattern (powerful knockback)
  {
    spellId: "flipendo",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.6 },
      { x: 0.7, y: 0.7 },
      { x: 0.8, y: 0.6 },
      { x: 0.85, y: 0.5 },
    ],
  },
  // Riddikulus - wavy smile pattern with loops (ridiculous/amusing)
  {
    spellId: "riddikulus",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.4 },
      { x: 0.35, y: 0.35 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.35 },
      { x: 0.6, y: 0.4 },
      { x: 0.65, y: 0.35 },
      { x: 0.7, y: 0.4 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.6 },
      { x: 0.5, y: 0.65 },
      { x: 0.3, y: 0.6 },
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
  // Episkey - healing cross pattern (circle with cross inside)
  {
    spellId: "episkey",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.5 },
      { x: 0.5, y: 0.7 },
      { x: 0.3, y: 0.5 },
      { x: 0.7, y: 0.5 },
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
  // Impedimenta - zigzag barrier pattern
  {
    spellId: "impedimenta",
    points: [
      { x: 0.2, y: 0.4 },
      { x: 0.35, y: 0.6 },
      { x: 0.5, y: 0.4 },
      { x: 0.65, y: 0.6 },
      { x: 0.8, y: 0.4 },
    ],
  },
  // Confringo - explosive zigzag (blasting curse)
  {
    spellId: "confringo",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.2 },
      { x: 0.3, y: 0.5 },
      { x: 0.7, y: 0.5 },
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
