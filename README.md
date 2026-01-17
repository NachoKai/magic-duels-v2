# Magic Duels v2

A turn-based magical dueling game built with Next.js, React, and TypeScript. Engage in strategic spell battles with three distinct stances, each offering unique spells and tactical advantages.

## 🎮 Features

- **Three Combat Stances**: Choose between Defensive, Sneaky, and Aggressive stances, each with a rock-paper-scissors advantage system
- **Diverse Spell Arsenal**: Over 60 unique spells with various effects including damage, healing, stun, bleed, burn, and drain
- **Drawing Spell System**: Cast spells by drawing gesture patterns on a canvas - each spell has a unique form you must replicate
- **Gesture Recognition**: Advanced $1 Unistroke Recognizer algorithm matches your drawn gestures to spell templates with 75% similarity threshold
- **Time-Limited Casting**: Draw spells within a time limit - adds pressure and skill to spell casting
- **Status Effects System**: Manage bleeding, burning, healing over time, and stun effects
- **Dice Roll Mechanics**: Spell effects have chance-based success rates, adding strategic depth and unpredictability
- **Game Modes**: Play against CPU or challenge a friend in local multiplayer
- **Action Log**: Track all game events and spell effects in real-time
- **Touch & Mouse Support**: Draw spells with your finger on touch devices or mouse on desktop
- **Visual Feedback**: Reference guides show expected spell forms, with success/failure indicators
- **Modern UI**: Beautiful, responsive interface built with Radix UI and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **Theme**: next-themes (dark/light mode support)

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd magic-duels-v2
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 How to Play

### Game Flow

1. **Select Game Mode**: Choose between CPU or Local multiplayer
2. **Choose Stance**: Each turn, select one of three stances:
   - **Defensive**: Beats Aggressive, loses to Sneaky
   - **Sneaky**: Beats Defensive, loses to Aggressive
   - **Aggressive**: Beats Sneaky, loses to Defensive
3. **Select Spell**: After stance selection, choose a spell from your stance's available spells
4. **Draw the Spell**: Draw the spell's gesture pattern on the canvas within the time limit to cast it
5. **Resolve Effects**: Watch as spells are cast, dice rolls determine effect success, and status effects are applied
6. **Status Effects**: Bleed, burn, heal, and drain effects persist across turns
7. **Victory**: Reduce your opponent's health to 0 to win!

### Spell Effects

- **Damage**: Direct health reduction
- **Heal**: Instant or over-time health restoration
- **Stun**: Prevents opponent from acting for specified turns
- **Bleed**: Damage over time
- **Burn**: Fire damage over time
- **Drain**: Continuous health drain
- **Status Removal**: Some spells can remove bleed, burn, or all status effects

### Drawing Spell System

When you select a spell, you must draw its unique gesture pattern to cast it successfully:

1. **Drawing Canvas**: A full-screen canvas appears with a reference guide showing the expected spell form
2. **Time Limit**: You have 5 seconds to complete your drawing (timer shows warning when 2 seconds remain)
3. **Gesture Matching**: Draw the pattern with your mouse or finger - the system uses advanced gesture recognition to match your drawing
4. **Success/Failure**:
   - **Success**: If your gesture matches ≥75% similarity, the spell is cast successfully
   - **Failure**: If the gesture doesn't match or time runs out, your turn is lost
5. **Visual Feedback**:
   - Reference guide shows the expected pattern in a semi-transparent overlay
   - Your drawing appears in blue
   - Success shows green feedback, failure shows red
6. **Touch Support**: Works seamlessly on both desktop (mouse) and mobile/tablet (touch) devices

Each spell has a unique form - from simple lines and circles to complex patterns like spirals, letters, and symbols. Practice makes perfect!

### Stance Advantages

Winning the stance phase grants you the first move in spell selection. The advantage system works as follows:

- **Aggressive** beats **Sneaky**
- **Sneaky** beats **Defensive**
- **Defensive** beats **Aggressive**

## 🚀 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## 🎨 Game Mechanics

### Turn Structure

1. **Stance Phase**: Both players select their stance
2. **Spell Phase**: Winner of stance phase selects spell first
3. **Drawing Phase**: Player draws the spell gesture pattern on canvas (5 second time limit)
4. **Resolution Phase**: If drawing succeeds, spell is cast and effects are applied
5. **Status Phase**: Status effects are processed
6. **Turn End**: Next turn begins

### Dice Roll System

Many spell effects have a chance-based success rate. The game uses a d100 (1-100) system where:

- If the rolled number ≤ chance percentage, the effect succeeds
- Dice rolls are displayed in the action log with format: `[DICE:rolled/needed:✓/✗:effect]`

### Status Effects

Status effects persist across turns and are processed at the start of each turn:

- **Bleed**: Deals damage each turn
- **Burn**: Deals fire damage each turn
- **Heal**: Restores health each turn
- **Drain**: Continuously drains health
- **Stun**: Prevents actions (reduces by 1 each turn)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

See the [LICENSE](LICENSE) file for details.

## 🎮 Enjoy the Game!

May the best wizard win! ⚡🧙‍♂️
