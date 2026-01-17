# Magic Duels v2

A turn-based magical dueling game built with Next.js, React, and TypeScript. Engage in strategic spell battles with three distinct stances, each offering unique spells and tactical advantages.

## 🎮 Features

- **Three Combat Stances**: Choose between Defensive, Sneaky, and Aggressive stances, each with a rock-paper-scissors advantage system
- **Diverse Spell Arsenal**: Over 60 unique spells with various effects including damage, healing, stun, bleed, burn, and drain
- **Status Effects System**: Manage bleeding, burning, healing over time, and stun effects
- **Dice Roll Mechanics**: Spell effects have chance-based success rates, adding strategic depth and unpredictability
- **Game Modes**: Play against CPU or challenge a friend in local multiplayer
- **Action Log**: Track all game events and spell effects in real-time
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
4. **Resolve Effects**: Watch as spells are cast, dice rolls determine effect success, and status effects are applied
5. **Status Effects**: Bleed, burn, heal, and drain effects persist across turns
6. **Victory**: Reduce your opponent's health to 0 to win!

### Spell Effects

- **Damage**: Direct health reduction
- **Heal**: Instant or over-time health restoration
- **Stun**: Prevents opponent from acting for specified turns
- **Bleed**: Damage over time
- **Burn**: Fire damage over time
- **Drain**: Continuous health drain
- **Status Removal**: Some spells can remove bleed, burn, or all status effects

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
3. **Resolution Phase**: Spells are cast, effects are applied
4. **Status Phase**: Status effects are processed
5. **Turn End**: Next turn begins

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
