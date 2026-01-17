"use client"

import { useState } from "react"
import { MainMenu } from "@/components/game/main-menu"
import { GameBoard } from "@/components/game/game-board"

type GameMode = "cpu" | "local" | null

export default function Home() {
  const [gameMode, setGameMode] = useState<GameMode>(null)

  const handleStartGame = (mode: "cpu" | "local") => {
    setGameMode(mode)
  }

  const handleBackToMenu = () => {
    setGameMode(null)
  }

  if (gameMode) {
    return <GameBoard gameMode={gameMode} onBackToMenu={handleBackToMenu} />
  }

  return <MainMenu onStartGame={handleStartGame} />
}
