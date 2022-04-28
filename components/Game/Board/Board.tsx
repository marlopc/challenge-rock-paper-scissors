import React from "react";
import { GameModes } from "~/hooks/useGame";
import NormalBoard from "./NormalBoard";
import SpecialBoard from "./SpecialBoard";

export type BoardProps = {
  handlePick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  gamemode: GameModes;
  disabled: boolean;
};

const Board: React.FC<BoardProps> = ({ gamemode, ...boardProps }) => {
  switch (gamemode) {
    case GameModes.NORMAL:
      return <NormalBoard {...boardProps} />;
    case GameModes.SPECIAL:
      return <SpecialBoard {...boardProps} />;
  }
};

export default Board;
