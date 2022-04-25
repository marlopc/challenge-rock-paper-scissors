import React from "react";
import styles from "~/components/Header/Scoreboard/Scoreboard.module.css";

const Scoreboard: React.FC<{ score: number }> = ({ score }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Score</h2>
      <p className={styles.value}>{score}</p>
    </div>
  );
};

export default Scoreboard;
