import * as Tone from "tone";

let isInitialized = false;

export const initAudio = async () => {
  if (!isInitialized) {
    await Tone.start();
    isInitialized = true;
  }
};

export const playMissSound = async () => {
  await initAudio();

  const noise = new Tone.NoiseSynth({
    noise: { type: "brown" },
    envelope: { attack: 0.05, decay: 0.2, sustain: 0 },
  }).toDestination();

  const filter = new Tone.Filter(800, "lowpass").toDestination();
  noise.connect(filter);

  noise.triggerAttackRelease("8n");

  const osc = new Tone.Oscillator(200, "sawtooth").toDestination();
  const env = new Tone.AmplitudeEnvelope({
    attack: 0.01,
    decay: 0.3,
    sustain: 0,
    release: 0.1,
  }).toDestination();

  osc.connect(env);
  osc.start();
  env.triggerAttackRelease("8n");
  osc.frequency.rampTo(50, 0.3);

  setTimeout(() => {
    osc.stop();
    noise.dispose();
    filter.dispose();
    osc.dispose();
    env.dispose();
  }, 500);
};

const playDefensiveSound = (
  baseFreq: number,
  harmonicity: number,
  type: "sine" | "triangle" | "fatsine" | "square" = "sine",
  delayTime: number = 0.1
) => {
  const synth = new Tone.PolySynth(Tone.FMSynth, {
    harmonicity: harmonicity,
    modulationIndex: 10,
    oscillator: { type: type },
    envelope: { attack: 0.05, decay: 0.5, sustain: 0.2, release: 2 },
    modulation: { type: "square" },
    modulationEnvelope: { attack: 0.5, decay: 0, sustain: 1, release: 0.5 },
  }).toDestination();

  const pingPong = new Tone.PingPongDelay(delayTime, 0.4).toDestination();
  const reverb = new Tone.Reverb({ decay: 2, preDelay: 0.1 }).toDestination();

  synth.connect(pingPong);
  synth.connect(reverb);

  const now = Tone.now();
  synth.triggerAttackRelease(
    [baseFreq, baseFreq * 1.5, baseFreq * 2],
    "8n",
    now
  );

  setTimeout(() => {
    synth.dispose();
    pingPong.dispose();
    reverb.dispose();
  }, 2000);
};

const playSneakySound = (
  filterFreqStart: number,
  filterFreqEnd: number,
  noiseType: "pink" | "white" | "brown" = "pink",
  wobble: boolean = false
) => {
  const noise = new Tone.Noise(noiseType).start();
  const filter = new Tone.AutoFilter({
    frequency: wobble ? 5 : 0.5,
    depth: 0.8,
    baseFrequency: 200,
  })
    .toDestination()
    .start();

  const lowPass = new Tone.Filter(filterFreqStart, "lowpass").toDestination();

  noise.connect(filter);
  filter.connect(lowPass);

  const env = new Tone.AmplitudeEnvelope({
    attack: 0.1,
    decay: 0.5,
    sustain: 0.2,
    release: 1,
  }).toDestination();

  noise.connect(env);

  const now = Tone.now();
  env.triggerAttackRelease(1.5, now);
  lowPass.frequency.rampTo(filterFreqEnd, 1.5);

  setTimeout(() => {
    noise.stop();
    noise.dispose();
    filter.dispose();
    lowPass.dispose();
    env.dispose();
  }, 2000);
};

const playAggressiveSound = (
  freqStart: number,
  freqEnd: number,
  distortionAmt: number = 0.4,
  explosion: boolean = false
) => {
  const synth = new Tone.MembraneSynth({
    pitchDecay: 0.05,
    octaves: 4,
    oscillator: { type: "sine" },
    envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4 },
  }).toDestination();

  const dist = new Tone.Distortion(distortionAmt).toDestination();
  synth.connect(dist);

  if (explosion) {
    const noise = new Tone.NoiseSynth({
      noise: { type: "white" },
      envelope: { attack: 0.005, decay: 0.5, sustain: 0 },
    }).toDestination();
    noise.triggerAttackRelease("8n");
  }

  const now = Tone.now();
  synth.triggerAttackRelease(freqStart, "8n", now);

  setTimeout(() => {
    synth.dispose();
    dist.dispose();
  }, 2000);
};

export const playSpellSound = async (spellId: string) => {
  try {
    await initAudio();

    switch (spellId) {
      // === DEFENSIVE SPELLS ===
      case "blood-replenishing":
        playDefensiveSound(440, 3, "sine", 0.2);
        break;
      case "wiggenweld":
        playDefensiveSound(523.25, 2, "sine", 0.15);
        break;
      case "vulnera-sanentur":
        playDefensiveSound(392, 4, "triangle", 0.25);
        break;
      case "episkey":
        playDefensiveSound(659.25, 1, "sine", 0.1);
        break;
      case "glacius":
        {
          const synth = new Tone.MetalSynth({
            envelope: { attack: 0.001, decay: 0.1, release: 0.01 },
            harmonicity: 5.1,
            modulationIndex: 32,
            resonance: 4000,
            octaves: 1.5,
          }).toDestination();
          synth.frequency.value = 200;
          synth.triggerAttackRelease(100, "8n");
          setTimeout(() => synth.dispose(), 1000);
        }
        break;
      case "blue-fire-spell":
        playSneakySound(200, 1500, "pink", true);
        playDefensiveSound(300, 2, "fatsine", 0);
        break;
      case "hot-air-charm":
        playSneakySound(100, 800, "white", false);
        break;
      case "leek-jinx":
        playDefensiveSound(330, 8, "triangle", 0.05);
        break;
      case "tarantallegra":
        {
          const synth = new Tone.Synth({
            oscillator: { type: "triangle" },
            envelope: { attack: 0.05, decay: 0.1, sustain: 0.1, release: 0.5 },
          }).toDestination();
          const now = Tone.now();
          synth.triggerAttackRelease("C4", "16n", now);
          synth.triggerAttackRelease("E4", "16n", now + 0.1);
          synth.triggerAttackRelease("G4", "16n", now + 0.2);
          synth.triggerAttackRelease("C5", "16n", now + 0.3);
          setTimeout(() => synth.dispose(), 1000);
        }
        break;
      case "diminuendo":
        {
          const osc = new Tone.Oscillator(800, "sine").toDestination().start();
          osc.frequency.rampTo(100, 1);
          osc.stop("+1");
          setTimeout(() => osc.dispose(), 1100);
        }
        break;
      case "levicorpus":
        {
          const osc = new Tone.Oscillator(200, "sine").toDestination().start();
          osc.frequency.rampTo(800, 1);
          osc.stop("+1");
          setTimeout(() => osc.dispose(), 1100);
        }
        break;
      case "petrificus-totalus":
        {
          const synth = new Tone.Synth({
            oscillator: { type: "square" },
            envelope: { attack: 0.01, decay: 0.1, sustain: 0, release: 0.1 },
          }).toDestination();
          synth.triggerAttackRelease("C2", "8n");
          setTimeout(() => synth.dispose(), 500);
        }
        break;
      case "brachiabindo":
        playSneakySound(300, 100, "brown", true);
        break;
      case "fulgari":
        playAggressiveSound(800, 400, 0.8, false);
        break;
      case "waddiwasi":
        playAggressiveSound(600, 200, 0, false);
        break;
      case "slugulus-eructo":
        playSneakySound(400, 200, "brown", true);
        break;

      // === SNEAKY SPELLS ===
      case "incarcerous":
        playSneakySound(300, 100, "brown", false);
        break;
      case "rictusempra":
        playDefensiveSound(880, 5, "triangle", 0.05);
        break;
      case "flipendo":
        playSneakySound(200, 1000, "white", false);
        break;
      case "impedimenta":
        playDefensiveSound(200, 4, "sine", 0.5);
        break;
      case "diffindo":
        playSneakySound(1000, 2000, "white", false);
        break;
      case "giant-dungbomb":
        playAggressiveSound(100, 50, 0.2, true);
        break;
      case "immobulus":
        playDefensiveSound(400, 1, "sine", 1);
        break;
      case "windy-spell":
        playSneakySound(100, 1200, "white", false);
        break;
      case "nebulus":
        playSneakySound(500, 100, "pink", false);
        break;
      case "bewitched-sleep":
        playDefensiveSound(300, 1, "sine", 0.8);
        break;
      case "obscuro":
        playSneakySound(300, 50, "brown", false);
        break;
      case "pimple-jinx":
        playAggressiveSound(400, 200, 0.1, false);
        break;
      case "hair-thickening-charm":
        playSneakySound(200, 600, "brown", true);
        break;
      case "pus-squirting-hex":
        playSneakySound(400, 800, "brown", true);
        break;
      case "flagrante":
        playSneakySound(200, 1000, "pink", true);
        break;
      case "tickling-hex":
        playDefensiveSound(1000, 10, "triangle", 0.1);
        break;
      case "jelly-legs-jinx":
        playSneakySound(300, 300, "pink", true);
        break;
      case "babbling-curse":
        playDefensiveSound(500, 7, "square", 0.05);
        break;
      case "cantis":
        playDefensiveSound(600, 2, "sine", 0.2);
        break;
      case "ebublio-jinx":
        playDefensiveSound(800, 1, "sine", 0);
        break;
      case "stupefy":
        playAggressiveSound(300, 100, 0.3, false);
        break;

      // === AGGRESSIVE SPELLS ===
      case "expelliarmus":
        playAggressiveSound(500, 100, 0.5, false);
        break;
      case "melofors-jinx":
        playAggressiveSound(100, 50, 0.2, false);
        break;
      case "bombarda":
        playAggressiveSound(100, 50, 0.8, true);
        break;
      case "incendio":
        playSneakySound(200, 1500, "pink", false);
        playAggressiveSound(200, 100, 0.3, false);
        break;
      case "confringo":
        playAggressiveSound(400, 50, 0.6, true);
        break;
      case "bat-bogey-hex":
        playSneakySound(100, 400, "brown", true);
        break;
      case "fanged-frisbee":
        playSneakySound(500, 2000, "white", true);
        break;
      case "stick-fast-hex":
        playSneakySound(300, 100, "brown", false);
        break;
      case "throw-vial":
        playAggressiveSound(800, 100, 0.1, false);
        {
          const synth = new Tone.MetalSynth().toDestination();
          synth.triggerAttackRelease(800, "32n");
          setTimeout(() => synth.dispose(), 500);
        }
        break;
      case "depulso":
        playAggressiveSound(200, 50, 0.5, false);
        break;
      case "arrow-shooting":
        playSneakySound(1500, 500, "white", false);
        break;
      case "avifors":
        playDefensiveSound(1200, 3, "triangle", 0.05);
        break;
      case "meteolojinx":
        playAggressiveSound(80, 40, 0.6, true);
        break;
      case "cornflake-skin-jinx":
        playSneakySound(1000, 500, "pink", true);
        break;
      case "bee-sting-jinx":
        {
          const osc = new Tone.Oscillator(400, "sawtooth")
            .toDestination()
            .start();
          const lfo = new Tone.LFO(10, 390, 410).start();
          lfo.connect(osc.frequency);
          osc.stop("+1");
          setTimeout(() => {
            osc.dispose();
            lfo.dispose();
          }, 1200);
        }
        break;
      case "relashio":
        playDefensiveSound(900, 8, "square", 0.05);
        break;
      case "throw-teacup":
        {
          const synth = new Tone.MetalSynth({
            harmonicity: 3,
            resonance: 800,
          }).toDestination();
          synth.triggerAttackRelease(600, "32n");
          setTimeout(() => synth.dispose(), 500);
        }
        break;
      case "anteoculatia":
        playSneakySound(100, 300, "brown", true);
        break;
      case "pepper-breath":
        playAggressiveSound(300, 100, 0.4, true);
        break;
      case "insect-hex":
        {
          const osc = new Tone.Oscillator(600, "sawtooth")
            .toDestination()
            .start();
          const lfo = new Tone.LFO(20, 580, 620).start();
          lfo.connect(osc.frequency);
          osc.stop("+1");
          setTimeout(() => {
            osc.dispose();
            lfo.dispose();
          }, 1200);
        }
        break;
      case "vaulting-charm":
        playDefensiveSound(300, 2, "triangle", 0.2);
        {
          const osc = new Tone.Oscillator(200, "triangle")
            .toDestination()
            .start();
          osc.frequency.rampTo(600, 0.5);
          osc.stop("+0.5");
          setTimeout(() => osc.dispose(), 600);
        }
        break;
      case "mobilicorpus":
        playDefensiveSound(200, 1, "sine", 1.0);
        break;

      default:
        playDefensiveSound(500, 2, "sine", 0.1);
        break;
    }
  } catch (error) {
    console.error("Error playing spell sound:", error);
  }
};
