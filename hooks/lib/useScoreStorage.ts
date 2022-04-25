import { GameModes } from "../useGame";

export type ScoreStorage = {
  gamemode: GameModes;
  score: number;
};

const getScore = (gamemode: GameModes): ScoreStorage => {
  const score: ScoreStorage = {
    gamemode,
    score: 0,
  };

  const storagedScore = window.localStorage.getItem(`SCORE_${gamemode}`);

  if (storagedScore === null) {
    return score;
  }

  try {
    return {
      ...score,
      score: Number(storagedScore),
    };
  } catch {
    return score;
  }
};

const setScore = (gamemode: GameModes, amount: number): ScoreStorage => {
  const score: ScoreStorage = {
    gamemode,
    score: amount,
  };

  window.localStorage.setItem(`SCORE_${gamemode}`, String(amount));

  return score;
};

const incrementScore = (gamemode: GameModes, amount: number): ScoreStorage => {
  const { score } = getScore(gamemode);

  return setScore(gamemode, score + amount);
};

export { getScore, setScore, incrementScore };
