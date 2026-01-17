"use client"

import { useState, useCallback } from "react"
import {
  type GameState,
  createInitialState,
  processStatusEffects,
  applySpell,
  getCPUStance,
  getCPUSpell,
} from "@/lib/game-logic"
import { type Spell, type Stance, getStanceAdvantage } from "@/lib/spells"
import { HealthBar } from "./health-bar"
import { StanceSelector } from "./stance-selector"
import { SpellSelector } from "./spell-selector"
import { ActionLog } from "./action-log"
import { RotateCcw, Swords, Trophy } from "lucide-react"

interface GameBoardProps {
  gameMode: "cpu" | "local"
  onBackToMenu: () => void
}

const TIE_DAMAGE = 5

export function GameBoard({ gameMode, onBackToMenu }: GameBoardProps) {
  const [gameState, setGameState] = useState<GameState>(() => createInitialState(gameMode))

  const addMessages = useCallback((newMessages: string[]) => {
    setGameState((prev) => ({
      ...prev,
      lastAction: [...prev.lastAction, ...newMessages],
    }))
  }, [])

  const handleStanceSelect = useCallback(
    (stance: Stance) => {
      if (gameMode === "cpu") {
        const cpuStance = getCPUStance()
        const result = getStanceAdvantage(stance, cpuStance)

        const messages = [
          `--- Turn ${gameState.turn} ---`,
          `[${stance}] Player chose ${stance}`,
          `[${cpuStance}] CPU chose ${cpuStance}`,
        ]

        if (result === "win") {
          messages.push("Player wins the stance!")
          setGameState((prev) => ({
            ...prev,
            player1Stance: stance,
            player2Stance: cpuStance,
            phase: "spell",
            stanceWinner: 1,
            lastAction: [...prev.lastAction, ...messages],
          }))
        } else if (result === "lose") {
          messages.push("CPU wins the stance!")

          const cpuSpell = getCPUSpell(cpuStance)
          const { caster, target, messages: spellMessages } = applySpell(gameState.player2, gameState.player1, cpuSpell)

          messages.push(`[${cpuStance}] CPU casts ${cpuSpell.name}!`)
          messages.push(...spellMessages.map((m) => `CPU: ${m}`))

          const p1Result = processStatusEffects(target)
          const p2Result = processStatusEffects(caster)

          if (p1Result.messages.length > 0) {
            messages.push("Player 1 status effects:")
            messages.push(...p1Result.messages.map((m) => `Player 1: ${m}`))
          }
          if (p2Result.messages.length > 0) {
            messages.push("CPU status effects:")
            messages.push(...p2Result.messages.map((m) => `CPU: ${m}`))
          }

          const newP1 = p1Result.player
          const newP2 = p2Result.player

          setGameState((prev) => ({
            ...prev,
            player1: newP1,
            player2: newP2,
            player1Stance: stance,
            player2Stance: cpuStance,
            phase: newP1.health <= 0 || newP2.health <= 0 ? "gameover" : "stance",
            stanceWinner: null,
            turn: prev.turn + 1,
            lastAction: [...prev.lastAction, ...messages],
          }))
        } else {
          messages.push(`It's a tie! Both take ${TIE_DAMAGE} damage.`)

          const p1WithDamage = {
            ...gameState.player1,
            health: Math.max(0, gameState.player1.health - TIE_DAMAGE),
          }
          const p2WithDamage = {
            ...gameState.player2,
            health: Math.max(0, gameState.player2.health - TIE_DAMAGE),
          }

          const p1Result = processStatusEffects(p1WithDamage)
          const p2Result = processStatusEffects(p2WithDamage)

          if (p1Result.messages.length > 0) {
            messages.push("Player 1 status effects:")
            messages.push(...p1Result.messages.map((m) => `Player 1: ${m}`))
          }
          if (p2Result.messages.length > 0) {
            messages.push("CPU status effects:")
            messages.push(...p2Result.messages.map((m) => `CPU: ${m}`))
          }

          setGameState((prev) => ({
            ...prev,
            player1: p1Result.player,
            player2: p2Result.player,
            player1Stance: stance,
            player2Stance: cpuStance,
            phase: p1Result.player.health <= 0 || p2Result.player.health <= 0 ? "gameover" : "stance",
            turn: prev.turn + 1,
            lastAction: [...prev.lastAction, ...messages],
          }))
        }
      } else {
        if (!gameState.waitingForPlayer2Stance) {
          setGameState((prev) => ({
            ...prev,
            player1Stance: stance,
            waitingForPlayer2Stance: true,
            lastAction: [...prev.lastAction, `--- Turn ${prev.turn} ---`, `[${stance}] Player 1 chose ${stance}`],
          }))
        } else {
          const p1Stance = gameState.player1Stance!
          const result = getStanceAdvantage(p1Stance, stance)

          const messages = [`[${stance}] Player 2 chose ${stance}`, `${p1Stance} vs ${stance}`]

          if (result === "win") {
            messages.push("Player 1 wins the stance!")
            setGameState((prev) => ({
              ...prev,
              player2Stance: stance,
              phase: "spell",
              stanceWinner: 1,
              waitingForPlayer2Stance: false,
              lastAction: [...prev.lastAction, ...messages],
            }))
          } else if (result === "lose") {
            messages.push("Player 2 wins the stance!")
            setGameState((prev) => ({
              ...prev,
              player2Stance: stance,
              phase: "spell",
              stanceWinner: 2,
              waitingForPlayer2Stance: false,
              lastAction: [...prev.lastAction, ...messages],
            }))
          } else {
            messages.push(`It's a tie! Both take ${TIE_DAMAGE} damage.`)

            const p1WithDamage = {
              ...gameState.player1,
              health: Math.max(0, gameState.player1.health - TIE_DAMAGE),
            }
            const p2WithDamage = {
              ...gameState.player2,
              health: Math.max(0, gameState.player2.health - TIE_DAMAGE),
            }

            const p1Result = processStatusEffects(p1WithDamage)
            const p2Result = processStatusEffects(p2WithDamage)

            if (p1Result.messages.length > 0) {
              messages.push(...p1Result.messages.map((m) => `Player 1: ${m}`))
            }
            if (p2Result.messages.length > 0) {
              messages.push(...p2Result.messages.map((m) => `Player 2: ${m}`))
            }

            setGameState((prev) => ({
              ...prev,
              player1: p1Result.player,
              player2: p2Result.player,
              player1Stance: null,
              player2Stance: null,
              phase: p1Result.player.health <= 0 || p2Result.player.health <= 0 ? "gameover" : "stance",
              turn: prev.turn + 1,
              waitingForPlayer2Stance: false,
              lastAction: [...prev.lastAction, ...messages],
            }))
          }
        }
      }
    },
    [gameMode, gameState],
  )

  const handleSpellSelect = useCallback(
    (spell: Spell) => {
      const winner = gameState.stanceWinner
      if (!winner) return

      const casterState = winner === 1 ? gameState.player1 : gameState.player2
      const targetState = winner === 1 ? gameState.player2 : gameState.player1
      const winnerName = winner === 1 ? "Player 1" : gameMode === "cpu" ? "CPU" : "Player 2"
      const loserName = winner === 1 ? (gameMode === "cpu" ? "CPU" : "Player 2") : "Player 1"
      const winnerStance = winner === 1 ? gameState.player1Stance : gameState.player2Stance

      const messages = [`[${winnerStance}] ${winnerName} casts ${spell.name}!`]

      const { caster, target, messages: spellMessages } = applySpell(casterState, targetState, spell)
      messages.push(...spellMessages.map((m) => `${winnerName}: ${m}`))

      const p1Result = processStatusEffects(winner === 1 ? caster : target)
      const p2Result = processStatusEffects(winner === 1 ? target : caster)

      if (p1Result.messages.length > 0) {
        messages.push(...p1Result.messages.map((m) => `Player 1: ${m}`))
      }
      if (p2Result.messages.length > 0) {
        messages.push(...p2Result.messages.map((m) => `${gameMode === "cpu" ? "CPU" : "Player 2"}: ${m}`))
      }

      const newP1 = winner === 1 ? { ...caster, ...p1Result.player } : p1Result.player
      const newP2 = winner === 1 ? p2Result.player : { ...caster, ...p2Result.player }

      setGameState((prev) => ({
        ...prev,
        player1: newP1,
        player2: newP2,
        phase: newP1.health <= 0 || newP2.health <= 0 ? "gameover" : "stance",
        stanceWinner: null,
        player1Stance: null,
        player2Stance: null,
        turn: prev.turn + 1,
        lastAction: [...prev.lastAction, ...messages],
      }))
    },
    [gameState, gameMode],
  )

  const handleReset = useCallback(() => {
    setGameState(createInitialState(gameMode))
  }, [gameMode])

  const winner =
    gameState.player1.health <= 0
      ? gameMode === "cpu"
        ? "CPU"
        : "Player 2"
      : gameState.player2.health <= 0
        ? "Player 1"
        : null

  return (
    <div className="min-h-screen bg-background p-4 overflow-y-auto no-scrollbar">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToMenu}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Menu
          </button>
          <div className="flex items-center gap-2">
            <Swords className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Turn {gameState.turn}</span>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* Health Bars */}
        <div className="flex justify-between items-start gap-4">
          <HealthBar
            current={gameState.player1.health}
            max={gameState.player1.maxHealth}
            name={gameState.player1.name}
            statusEffects={gameState.player1.statusEffects}
            isStunned={gameState.player1.isStunned}
            isPlayer1={true}
          />
          <div className="text-2xl font-bold text-primary">VS</div>
          <HealthBar
            current={gameState.player2.health}
            max={gameState.player2.maxHealth}
            name={gameState.player2.name}
            statusEffects={gameState.player2.statusEffects}
            isStunned={gameState.player2.isStunned}
            isPlayer1={false}
          />
        </div>

        {/* Game Area */}
        <div className="bg-card rounded-xl border border-border p-6">
          {gameState.phase === "gameover" ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 py-12">
              <Trophy
                className="w-20 h-20 text-primary animate-pulse"
                style={{
                  filter:
                    "drop-shadow(0 0 8px hsl(45 100% 50%)) drop-shadow(0 0 16px hsl(45 100% 50% / 0.7)) drop-shadow(0 0 24px hsl(45 100% 50% / 0.5))",
                }}
              />
              <h2 className="text-3xl font-bold text-foreground">{winner} Wins!</h2>
              <p className="text-muted-foreground">The duel has ended</p>
              <div className="flex gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Play Again
                </button>
                <button
                  onClick={onBackToMenu}
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Main Menu
                </button>
              </div>
            </div>
          ) : gameState.phase === "stance" ? (
            <StanceSelector
              onSelect={handleStanceSelect}
              playerName={gameMode === "local" && gameState.waitingForPlayer2Stance ? "Player 2" : "Player 1"}
            />
          ) : gameState.phase === "spell" && gameState.stanceWinner ? (
            <SpellSelector
              stance={gameState.stanceWinner === 1 ? gameState.player1Stance! : gameState.player2Stance!}
              onSelect={handleSpellSelect}
            />
          ) : null}
        </div>

        {/* Action Log */}
        <ActionLog
          messages={gameState.lastAction}
          player1Name={gameState.player1.name}
          player2Name={gameState.player2.name}
        />
      </div>
    </div>
  )
}
