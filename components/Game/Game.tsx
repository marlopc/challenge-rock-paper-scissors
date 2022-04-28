import clsx from "clsx";
import React from "react";
import styles from "~/components/Game/Game.module.css";
import Header from "~/components/Header/Header";
import useGame, { GameModes } from "~/hooks/useGame";
import Button from "../Button/Button";
import Gameplay from "./Gameplay/Gameplay";

type GameProps = {
  gamemode: GameModes;
};

const Game: React.FC<GameProps> = ({ gamemode }) => {
  const game = useGame(gamemode);

  const headerClassNames = clsx(styles.floating, styles.header);
  const rulesClassNames = clsx(styles.floating, styles.rules);

  return (
    <div className={styles.container}>
      <div className={headerClassNames}>
        <Header gamemode={game.gamemode} score={game.score} />
      </div>
      <Gameplay {...game} />
      <div className={rulesClassNames}>
        <Button label="Rules" onClick={() => alert("rules?")} />
      </div>
    </div>
  );
};

export default Game;
