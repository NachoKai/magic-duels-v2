export interface Point {
  x: number;
  y: number;
}

export interface SpellForm {
  spellId: string;
  points: Point[];
}

export const spellForms: SpellForm[] = [
  {
    spellId: "expelliarmus",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.8 },
    ],
  },
  {
    spellId: "alohomora",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.35 },
      { x: 0.65, y: 0.45 },
      { x: 0.6, y: 0.55 },
      { x: 0.5, y: 0.6 },
      { x: 0.4, y: 0.55 },
      { x: 0.35, y: 0.45 },
      { x: 0.4, y: 0.35 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.8 },
    ],
  },
  {
    spellId: "wingardium-leviosa",
    points: [
      { x: 0.2, y: 0.7 },
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.5 },
      { x: 0.8, y: 0.7 },
    ],
  },
  {
    spellId: "lumos",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "nox",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.8 },
    ],
  },
  {
    spellId: "ascendio",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.45, y: 0.6 },
      { x: 0.5, y: 0.4 },
      { x: 0.55, y: 0.3 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "descendio",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.55, y: 0.4 },
      { x: 0.5, y: 0.6 },
      { x: 0.45, y: 0.7 },
      { x: 0.5, y: 0.8 },
    ],
  },
  {
    spellId: "silencio",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.8 },
      { x: 0.2, y: 0.8 },
      { x: 0.8, y: 0.2 },
    ],
  },
  {
    spellId: "reparo",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.7, y: 0.3 },
      { x: 0.7, y: 0.7 },
      { x: 0.3, y: 0.7 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.5 },
    ],
  },
  {
    spellId: "arresto-momento",
    points: [
      { x: 0.2, y: 0.7 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.6 },
      { x: 0.7, y: 0.3 },
      { x: 0.8, y: 0.7 },
    ],
  },
  {
    spellId: "finite-incantatem",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.4 },
      { x: 0.8, y: 0.3 },
    ],
  },
  {
    spellId: "herbivicus",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.6 },
      { x: 0.3, y: 0.4 },
      { x: 0.5, y: 0.3 },
      { x: 0.7, y: 0.2 },
    ],
  },
  {
    spellId: "locomotor",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.3, y: 0.7 },
      { x: 0.7, y: 0.7 },
    ],
  },
  {
    spellId: "oppugno",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.3 },
      { x: 0.8, y: 0.5 },
    ],
  },
  {
    spellId: "incendio",
    points: [
      { x: 0.5, y: 0.7 },
      { x: 0.3, y: 0.4 },
      { x: 0.5, y: 0.2 },
      { x: 0.7, y: 0.4 },
    ],
  },
  {
    spellId: "revelio",
    points: [
      { x: 0.3, y: 0.5 },
      { x: 0.35, y: 0.3 },
      { x: 0.5, y: 0.25 },
      { x: 0.65, y: 0.3 },
      { x: 0.7, y: 0.5 },
      { x: 0.65, y: 0.7 },
      { x: 0.5, y: 0.75 },
      { x: 0.35, y: 0.7 },
      { x: 0.3, y: 0.5 },
    ],
  },
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
  {
    spellId: "stupefy",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.4, y: 0.45 },
      { x: 0.6, y: 0.5 },
      { x: 0.3, y: 0.65 },
      { x: 0.5, y: 0.7 },
      { x: 0.35, y: 0.8 },
    ],
  },
  {
    spellId: "petrificus-totalus",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
    ],
  },
  {
    spellId: "protego",
    points: [
      { x: 0.3, y: 0.7 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.7, y: 0.3 },
      { x: 0.7, y: 0.7 },
    ],
  },
  {
    spellId: "reducto",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.7, y: 0.3 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.7 },
      { x: 0.5, y: 0.8 },
      { x: 0.3, y: 0.7 },
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "flipendo",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.6, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.5 },
      { x: 0.5, y: 0.7 },
      { x: 0.8, y: 0.5 },
    ],
  },
  {
    spellId: "riddikulus",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.35, y: 0.3 },
      { x: 0.5, y: 0.6 },
      { x: 0.65, y: 0.4 },
      { x: 0.8, y: 0.7 },
    ],
  },
  {
    spellId: "levicorpus",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.4 },
      { x: 0.4, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.3 },
    ],
  },
  {
    spellId: "episkey",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.65, y: 0.35 },
      { x: 0.5, y: 0.5 },
      { x: 0.35, y: 0.35 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "diffindo",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.7, y: 0.8 },
    ],
  },
  {
    spellId: "impedimenta",
    points: [
      { x: 0.3, y: 0.5 },
      { x: 0.7, y: 0.5 },
    ],
  },
  {
    spellId: "confringo",
    points: [
      { x: 0.2, y: 0.2 },
      { x: 0.8, y: 0.2 },
      { x: 0.8, y: 0.8 },
      { x: 0.2, y: 0.8 },
      { x: 0.2, y: 0.2 },
    ],
  },
  {
    spellId: "bombarda",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.65, y: 0.3 },
      { x: 0.7, y: 0.5 },
      { x: 0.65, y: 0.7 },
      { x: 0.5, y: 0.8 },
      { x: 0.35, y: 0.7 },
      { x: 0.3, y: 0.5 },
      { x: 0.35, y: 0.3 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "depulso",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.7 },
      { x: 0.7, y: 0.5 },
      { x: 0.8, y: 0.3 },
    ],
  },
  {
    spellId: "immobulus",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.65, y: 0.25 },
      { x: 0.7, y: 0.35 },
      { x: 0.75, y: 0.5 },
      { x: 0.7, y: 0.65 },
      { x: 0.6, y: 0.75 },
      { x: 0.45, y: 0.8 },
      { x: 0.3, y: 0.75 },
      { x: 0.2, y: 0.6 },
      { x: 0.2, y: 0.4 },
      { x: 0.3, y: 0.25 },
      { x: 0.45, y: 0.2 },
    ],
  },
  {
    spellId: "rictusempra",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.4 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.4 },
      { x: 0.8, y: 0.5 },
    ],
  },
  {
    spellId: "incarcerous",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.65, y: 0.3 },
      { x: 0.7, y: 0.5 },
      { x: 0.65, y: 0.7 },
      { x: 0.5, y: 0.8 },
      { x: 0.35, y: 0.7 },
      { x: 0.3, y: 0.5 },
      { x: 0.35, y: 0.3 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "meteolojinx",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.25 },
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.25 },
      { x: 0.7, y: 0.3 },
      { x: 0.6, y: 0.5 },
      { x: 0.5, y: 0.7 },
      { x: 0.4, y: 0.5 },
    ],
  },
  {
    spellId: "mimblewimble",
    points: [
      { x: 0.2, y: 0.4 },
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.4 },
      { x: 0.7, y: 0.5 },
      { x: 0.8, y: 0.4 },
    ],
  },
  {
    spellId: "vulnera-sanentur",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.8 },
      { x: 0.3, y: 0.6 },
      { x: 0.7, y: 0.6 },
      { x: 0.3, y: 0.4 },
      { x: 0.7, y: 0.4 },
    ],
  },
  {
    spellId: "glacius",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.35 },
      { x: 0.7, y: 0.5 },
      { x: 0.6, y: 0.65 },
      { x: 0.5, y: 0.8 },
      { x: 0.4, y: 0.65 },
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.35 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "blue-fire-spell",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.4, y: 0.6 },
      { x: 0.5, y: 0.4 },
      { x: 0.6, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "waddiwasi",
    points: [
      { x: 0.2, y: 0.6 },
      { x: 0.4, y: 0.4 },
      { x: 0.6, y: 0.3 },
      { x: 0.8, y: 0.2 },
    ],
  },
  {
    spellId: "windy-spell",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.4 },
      { x: 0.8, y: 0.5 },
    ],
  },
  {
    spellId: "pus-squirting-hex",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.5 },
      { x: 0.4, y: 0.6 },
      { x: 0.5, y: 0.7 },
      { x: 0.6, y: 0.8 },
    ],
  },
  {
    spellId: "arrow-shooting",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.7, y: 0.5 },
      { x: 0.6, y: 0.4 },
      { x: 0.7, y: 0.5 },
      { x: 0.6, y: 0.6 },
    ],
  },
  {
    spellId: "avifors",
    points: [
      { x: 0.3, y: 0.7 },
      { x: 0.5, y: 0.3 },
      { x: 0.7, y: 0.7 },
    ],
  },
  {
    spellId: "insect-hex",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.7, y: 0.3 },
      { x: 0.7, y: 0.7 },
      { x: 0.3, y: 0.7 },
      { x: 0.3, y: 0.3 },
      { x: 0.7, y: 0.7 },
    ],
  },
  {
    spellId: "blood-replenishing",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.4, y: 0.4 },
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.6 },
      { x: 0.5, y: 0.65 },
      { x: 0.6, y: 0.6 },
      { x: 0.7, y: 0.5 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.3 },
      { x: 0.5, y: 0.8 },
    ],
  },
  {
    spellId: "wiggenweld",
    points: [
      { x: 0.2, y: 0.3 },
      { x: 0.35, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.65, y: 0.5 },
      { x: 0.8, y: 0.3 },
    ],
  },
  {
    spellId: "hot-air-charm",
    points: [
      { x: 0.3, y: 0.8 },
      { x: 0.35, y: 0.5 },
      { x: 0.4, y: 0.2 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.2 },
      { x: 0.65, y: 0.5 },
      { x: 0.7, y: 0.8 },
    ],
  },
  {
    spellId: "leek-jinx",
    points: [
      { x: 0.5, y: 0.8 },
      { x: 0.5, y: 0.4 },
      { x: 0.3, y: 0.2 },
      { x: 0.5, y: 0.4 },
      { x: 0.7, y: 0.2 },
    ],
  },
  {
    spellId: "tarantallegra",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.3 },
      { x: 0.6, y: 0.6 },
      { x: 0.5, y: 0.8 },
    ],
  },
  {
    spellId: "diminuendo",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.7, y: 0.3 },
      { x: 0.7, y: 0.7 },
      { x: 0.3, y: 0.7 },
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.4 },
      { x: 0.6, y: 0.4 },
      { x: 0.6, y: 0.6 },
      { x: 0.4, y: 0.6 },
      { x: 0.4, y: 0.4 },
    ],
  },
  {
    spellId: "brachiabindo",
    points: [
      { x: 0.2, y: 0.3 },
      { x: 0.8, y: 0.3 },
      { x: 0.2, y: 0.5 },
      { x: 0.8, y: 0.5 },
      { x: 0.2, y: 0.7 },
      { x: 0.8, y: 0.7 },
    ],
  },
  {
    spellId: "fulgari",
    points: [
      { x: 0.4, y: 0.2 },
      { x: 0.5, y: 0.4 },
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.4, y: 0.8 },
    ],
  },
  {
    spellId: "slugulus-eructo",
    points: [
      { x: 0.3, y: 0.4 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.4 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.6 },
      { x: 0.6, y: 0.7 },
      { x: 0.5, y: 0.8 },
    ],
  },
  {
    spellId: "giant-dungbomb",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.7, y: 0.35 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.65 },
      { x: 0.5, y: 0.8 },
      { x: 0.3, y: 0.65 },
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.35 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "nebulus",
    points: [
      { x: 0.2, y: 0.6 },
      { x: 0.35, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.65, y: 0.4 },
      { x: 0.8, y: 0.6 },
    ],
  },
  {
    spellId: "bewitched-sleep",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.3 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.7 },
      { x: 0.5, y: 0.8 },
    ],
  },
  {
    spellId: "obscuro",
    points: [
      { x: 0.2, y: 0.4 },
      { x: 0.8, y: 0.4 },
      { x: 0.8, y: 0.6 },
      { x: 0.2, y: 0.6 },
      { x: 0.2, y: 0.4 },
    ],
  },
  {
    spellId: "pimple-jinx",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.35, y: 0.32 },
      { x: 0.4, y: 0.3 },
      { x: 0.5, y: 0.35 },
      { x: 0.6, y: 0.3 },
      { x: 0.65, y: 0.32 },
      { x: 0.7, y: 0.3 },
      { x: 0.65, y: 0.5 },
      { x: 0.6, y: 0.7 },
      { x: 0.5, y: 0.75 },
      { x: 0.4, y: 0.7 },
      { x: 0.35, y: 0.5 },
    ],
  },
  {
    spellId: "hair-thickening-charm",
    points: [
      { x: 0.3, y: 0.2 },
      { x: 0.3, y: 0.8 },
      { x: 0.4, y: 0.2 },
      { x: 0.4, y: 0.8 },
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.8 },
      { x: 0.6, y: 0.2 },
      { x: 0.6, y: 0.8 },
      { x: 0.7, y: 0.2 },
    ],
  },
  {
    spellId: "flagrante",
    points: [
      { x: 0.3, y: 0.7 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.6 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.7 },
    ],
  },
  {
    spellId: "tickling-hex",
    points: [
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.6 },
      { x: 0.7, y: 0.5 },
    ],
  },
  {
    spellId: "jelly-legs-jinx",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.35, y: 0.5 },
      { x: 0.3, y: 0.7 },
      { x: 0.5, y: 0.5 },
      { x: 0.7, y: 0.3 },
      { x: 0.65, y: 0.5 },
      { x: 0.7, y: 0.7 },
    ],
  },
  {
    spellId: "babbling-curse",
    points: [
      { x: 0.4, y: 0.4 },
      { x: 0.6, y: 0.4 },
      { x: 0.6, y: 0.6 },
      { x: 0.4, y: 0.6 },
      { x: 0.4, y: 0.4 },
      { x: 0.3, y: 0.7 },
      { x: 0.5, y: 0.8 },
    ],
  },
  {
    spellId: "cantis",
    points: [
      { x: 0.3, y: 0.6 },
      { x: 0.4, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.6 },
      { x: 0.6, y: 0.4 },
      { x: 0.5, y: 0.3 },
    ],
  },
  {
    spellId: "ebublio-jinx",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.3 },
      { x: 0.4, y: 0.4 },
      { x: 0.3, y: 0.4 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.5 },
      { x: 0.6, y: 0.6 },
      { x: 0.7, y: 0.6 },
      { x: 0.7, y: 0.7 },
      { x: 0.6, y: 0.7 },
      { x: 0.6, y: 0.6 },
    ],
  },
  {
    spellId: "melofors-jinx",
    points: [
      { x: 0.5, y: 0.2 },
      { x: 0.65, y: 0.35 },
      { x: 0.7, y: 0.5 },
      { x: 0.65, y: 0.65 },
      { x: 0.5, y: 0.8 },
      { x: 0.35, y: 0.65 },
      { x: 0.3, y: 0.5 },
      { x: 0.35, y: 0.35 },
      { x: 0.5, y: 0.2 },
    ],
  },
  {
    spellId: "bat-bogey-hex",
    points: [
      { x: 0.2, y: 0.5 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.4 },
      { x: 0.7, y: 0.3 },
      { x: 0.8, y: 0.5 },
      { x: 0.7, y: 0.7 },
      { x: 0.5, y: 0.6 },
      { x: 0.3, y: 0.7 },
    ],
  },
  {
    spellId: "fanged-frisbee",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.65, y: 0.35 },
      { x: 0.7, y: 0.5 },
      { x: 0.65, y: 0.65 },
      { x: 0.5, y: 0.7 },
      { x: 0.35, y: 0.65 },
      { x: 0.3, y: 0.5 },
      { x: 0.35, y: 0.35 },
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.5 },
    ],
  },
  {
    spellId: "stick-fast-hex",
    points: [
      { x: 0.3, y: 0.6 },
      { x: 0.7, y: 0.6 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.4 },
    ],
  },
  {
    spellId: "throw-vial",
    points: [
      { x: 0.2, y: 0.7 },
      { x: 0.35, y: 0.5 },
      { x: 0.5, y: 0.3 },
      { x: 0.65, y: 0.4 },
      { x: 0.8, y: 0.6 },
    ],
  },
  {
    spellId: "cornflake-skin-jinx",
    points: [
      { x: 0.3, y: 0.3 },
      { x: 0.4, y: 0.35 },
      { x: 0.5, y: 0.3 },
      { x: 0.6, y: 0.35 },
      { x: 0.7, y: 0.3 },
      { x: 0.65, y: 0.5 },
      { x: 0.7, y: 0.7 },
      { x: 0.6, y: 0.65 },
      { x: 0.5, y: 0.7 },
      { x: 0.4, y: 0.65 },
      { x: 0.3, y: 0.7 },
    ],
  },
  {
    spellId: "bee-sting-jinx",
    points: [
      { x: 0.3, y: 0.7 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.6 },
      { x: 0.6, y: 0.3 },
      { x: 0.7, y: 0.6 },
      { x: 0.8, y: 0.4 },
    ],
  },
  {
    spellId: "relashio",
    points: [
      { x: 0.5, y: 0.3 },
      { x: 0.35, y: 0.4 },
      { x: 0.5, y: 0.5 },
      { x: 0.65, y: 0.6 },
      { x: 0.5, y: 0.7 },
      { x: 0.35, y: 0.6 },
    ],
  },
  {
    spellId: "throw-teacup",
    points: [
      { x: 0.3, y: 0.5 },
      { x: 0.3, y: 0.7 },
      { x: 0.6, y: 0.7 },
      { x: 0.6, y: 0.5 },
      { x: 0.7, y: 0.5 },
      { x: 0.8, y: 0.3 },
    ],
  },
  {
    spellId: "anteoculatia",
    points: [
      { x: 0.3, y: 0.5 },
      { x: 0.2, y: 0.3 },
      { x: 0.3, y: 0.2 },
      { x: 0.45, y: 0.3 },
      { x: 0.55, y: 0.3 },
      { x: 0.7, y: 0.2 },
      { x: 0.8, y: 0.3 },
      { x: 0.7, y: 0.5 },
    ],
  },
  {
    spellId: "pepper-breath",
    points: [
      { x: 0.5, y: 0.7 },
      { x: 0.4, y: 0.5 },
      { x: 0.3, y: 0.3 },
      { x: 0.5, y: 0.2 },
      { x: 0.7, y: 0.3 },
      { x: 0.6, y: 0.5 },
    ],
  },
  {
    spellId: "vaulting-charm",
    points: [
      { x: 0.2, y: 0.8 },
      { x: 0.3, y: 0.6 },
      { x: 0.4, y: 0.4 },
      { x: 0.5, y: 0.2 },
      { x: 0.6, y: 0.4 },
      { x: 0.7, y: 0.6 },
      { x: 0.8, y: 0.8 },
    ],
  },
  {
    spellId: "mobilicorpus",
    points: [
      { x: 0.2, y: 0.3 },
      { x: 0.2, y: 0.6 },
      { x: 0.4, y: 0.3 },
      { x: 0.4, y: 0.6 },
      { x: 0.6, y: 0.3 },
      { x: 0.6, y: 0.6 },
      { x: 0.8, y: 0.3 },
      { x: 0.8, y: 0.6 },
    ],
  },
];

const defaultForms: Record<string, Point[]> = {
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

export function getSpellForm(spellId: string): Point[] {
  const form = spellForms.find((f) => f.spellId === spellId);
  if (form) return form.points;

  const hash = spellId
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const patterns = Object.values(defaultForms);
  return patterns[hash % patterns.length];
}

export function getAllSpellForms(): SpellForm[] {
  return spellForms;
}
