import React from "react";
import styles from "~/components/svg/gamemodes/SpecialMode.module.css";
import { GameModeSVGProps } from ".";

const SpecialMode: React.FC<GameModeSVGProps> = ({ customColor, title }) => {
  return <div className={styles.svg} />;
};

export default SpecialMode;
