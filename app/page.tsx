"use client";

import { useState } from "react";
import { MainMenu } from "@/components/game/main-menu";
import { GameBoard } from "@/components/game/game-board";

import { LibraryView } from "@/components/game/library-view";

type GameMode = "cpu" | "local" | "library" | null;

export default function Home() {
  const [gameMode, setGameMode] = useState<GameMode>(null);

  const handleStartGame = (mode: "cpu" | "local") => {
    setGameMode(mode);
  };

  const handleOpenLibrary = () => {
    setGameMode("library");
  };

  const handleBackToMenu = () => {
    setGameMode(null);
  };

  if (gameMode === "library") {
    return <LibraryView onBack={handleBackToMenu} />;
  }

  if (gameMode) {
    return <GameBoard gameMode={gameMode} onBackToMenu={handleBackToMenu} />;
  }

  return (
    <MainMenu onStartGame={handleStartGame} onOpenLibrary={handleOpenLibrary} />
  );
}
