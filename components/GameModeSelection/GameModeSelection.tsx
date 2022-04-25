import Router from "next/router";
import React from "react";
import Button from "~/components/Button/Button";
import styles from "~/components/GameModeSelection/GameModeSelection.module.css";
import NormalMode from "~/components/svg/gamemodes/NormalMode";
import SpecialMode from "~/components/svg/gamemodes/SpecialMode";
import { GameModes } from "~/hooks/useGame";

type GameModeCardProps = {
  children?: React.ReactNode;
  isSelected: boolean;
  label?: string;
  onSelection: () => void;
};

const GameModeCard: React.FC<GameModeCardProps> = ({
  children,
  onSelection,
  isSelected,
  label,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Space") {
      onSelection();
    }
  };

  const aria = label ? { "aria-label": label } : {};

  return (
    <div
      role="radio"
      aria-checked={isSelected}
      onClick={onSelection}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      {...aria}
    >
      {children}
    </div>
  );
};

const GameModeSelection: React.FC = () => {
  const [gameMode, setGameMode] = React.useState<GameModes | null>(null);

  const handlePlayGame = () => {
    if (!gameMode) return;

    Router.push(`/${gameMode.toLowerCase()}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Select game mode</h1>
      <div className={styles.selection}>
        <GameModeCard
          onSelection={() => setGameMode(GameModes.NORMAL)}
          isSelected={gameMode === GameModes.NORMAL}
          label="Rock, Paper, Scissors"
        >
          <NormalMode />
        </GameModeCard>
        <GameModeCard
          onSelection={() => setGameMode(GameModes.SPECIAL)}
          isSelected={gameMode === GameModes.SPECIAL}
          label="Rock, Paper, Scissors, Lizard, Spock"
        >
          <SpecialMode />
        </GameModeCard>
      </div>
      <Button
        disabled={!gameMode}
        onClick={handlePlayGame}
        label="Play game"
        solid
      />
    </div>
  );
};

export default GameModeSelection;
