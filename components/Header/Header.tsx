import React from "react";
import styles from "~/components/Header/Header.module.css";
import { ScoreStorage } from "~/hooks/lib/scoreStorage";
import { GameModes } from "~/hooks/useGame";
import NormalMode from "../svg/gamemodes/NormalMode";
import SpecialMode from "../svg/gamemodes/SpecialMode";
import Scoreboard from "./Scoreboard/Scoreboard";

type HeaderProps = ScoreStorage;

const Header: React.FC<HeaderProps> = ({ gamemode, score }) => {
  const SVGTitle =
    gamemode === GameModes.NORMAL ? <NormalMode /> : <SpecialMode />;
  return (
    <header className={styles.container}>
      {SVGTitle}
      <Scoreboard score={score} />
    </header>
  );
};

export default Header;
