import React from "react";
import styles from "~/components/Game/Game.module.css";
import Header from "~/components/Header/Header";
import useGame, { GameModes } from "~/hooks/useGame";
import Button from "../Button/Button";

type GameProps = {
  gamemode: GameModes;
};

const Game: React.FC<GameProps> = ({ gamemode }) => {
  const game = useGame(gamemode);

  return (
    <div className={styles.container}>
      <Header gamemode={game.gamemode} score={game.score} />
      <div style={{ display: "flex", gap: "25px" }}></div>
      <Button label="Rules" />
    </div>
  );
};

export default Game;
