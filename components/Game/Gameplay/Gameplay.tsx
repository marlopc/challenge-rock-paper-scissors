import clsx from "clsx";
import React from "react";
import styles from "~/components/Game/Gameplay/Gameplay.module.css";
import { Game, GameStep, SpecialMode } from "~/hooks/useGame";
import Board from "../Board/Board";
import Result from "../Result/Result";

type GameplayProps = Game;

const Gameplay: React.FC<GameplayProps> = (game) => {
  const handlePick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (game.step !== GameStep.PICKING) return;

    const option = e.currentTarget.value as SpecialMode["options"];

    game.pickAndResolveAfter(option, 2000);
  };

  const containerClasses = clsx(styles.safeArea, styles[game.gamemode], {
    [styles.hide]: game.step !== GameStep.PICKING,
  });
  const boardClasses = clsx(styles.screen, styles.board, {});
  const resultClasses = clsx(styles.screen, styles.result, {
    [styles.post]: game.step !== GameStep.PICKING,
  });

  return (
    <div className={containerClasses}>
      <div className={boardClasses}>
        <Board
          gamemode={game.gamemode}
          handlePick={handlePick}
          disabled={game.step !== GameStep.PICKING}
        />
      </div>
      <div className={resultClasses}>
        <Result
          result={game.result}
          reset={game.reset}
          cpuPick={game.cpuPick}
          userPick={game.userPick}
          step={game.step}
          disabled={game.step !== GameStep.WAITING}
        />
      </div>
    </div>
  );
};

export default Gameplay;
