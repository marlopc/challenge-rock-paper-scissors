import { GameModes } from "../useGame";

export type ScoreStorage = {
  gamemode: GameModes;
  score: number;
};

const scoreStorage = {
  getScore(gamemode: GameModes): ScoreStorage {
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
  },
  setScore(gamemode: GameModes, amount: number): ScoreStorage {
    const score: ScoreStorage = {
      gamemode,
      score: amount,
    };

    window.localStorage.setItem(`SCORE_${gamemode}`, String(amount));

    return score;
  },
  alter(gamemode: GameModes, amount: number): ScoreStorage {
    const { score } = this.getScore(gamemode);

    return this.setScore(gamemode, score + amount);
  },
};

export default scoreStorage;
