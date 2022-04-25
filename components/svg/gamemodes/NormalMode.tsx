import React from "react";
import styles from "~/components/svg/gamemodes/NormalMode.module.css";
import { GameModeSVGProps } from ".";

const NormalMode: React.FC<GameModeSVGProps> = ({ customColor, title }) => {
  return <div className={styles.svg} />;
};

export default NormalMode;
