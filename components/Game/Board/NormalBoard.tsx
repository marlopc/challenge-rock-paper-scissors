import clsx from "clsx";
import React from "react";
import styles from "~/components/Game/Board/NormalBoard.module.css";
import OptionButton from "../Option/OptionButton";
import { BoardProps } from "./Board";

type NormalBoardProps = Omit<BoardProps, "gamemode">;

const NormalBoard: React.FC<NormalBoardProps> = ({ disabled, handlePick }) => {
  const classNames = clsx(styles.container);

  return (
    <div className={classNames}>
      <ul className={styles.path}>
        <li>
          <OptionButton
            option="paper"
            size="medium"
            onClick={handlePick}
            disabled={disabled}
          />
        </li>
        <li>
          <OptionButton
            option="scissors"
            size="medium"
            onClick={handlePick}
            disabled={disabled}
          />
        </li>
        <li>
          <OptionButton
            option="rock"
            size="medium"
            onClick={handlePick}
            disabled={disabled}
          />
        </li>
      </ul>
    </div>
  );
};

export default NormalBoard;
