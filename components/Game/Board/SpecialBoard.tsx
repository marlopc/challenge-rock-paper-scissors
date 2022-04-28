import clsx from "clsx";
import React from "react";
import styles from "~/components/Game/Board/SpecialBoard.module.css";
import OptionButton from "../Option/OptionButton";
import { BoardProps } from "./Board";

type SpecialBoardProps = Omit<BoardProps, "gamemode">;

const SpecialBoard: React.FC<SpecialBoardProps> = ({
  disabled,
  handlePick,
}) => {
  const classNames = clsx(styles.container);

  return (
    <div className={classNames}>
      <ul className={styles.path}>
        <li>
          <OptionButton
            option="scissors"
            size="small"
            onClick={handlePick}
            disabled={disabled}
          />
        </li>
        <li>
          <OptionButton
            option="spock"
            size="small"
            onClick={handlePick}
            disabled={disabled}
          />
        </li>
        <li>
          <OptionButton
            option="paper"
            size="small"
            onClick={handlePick}
            disabled={disabled}
          />
        </li>
        <li>
          <OptionButton
            option="lizard"
            size="small"
            onClick={handlePick}
            disabled={disabled}
          />
        </li>
        <li>
          <OptionButton
            option="rock"
            size="small"
            onClick={handlePick}
            disabled={disabled}
          />
        </li>
      </ul>
    </div>
  );
};

export default SpecialBoard;
