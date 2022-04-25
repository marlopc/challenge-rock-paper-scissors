import React from "react";
import { getScore, incrementScore } from "./lib/useScoreStorage";

export enum GameModes {
  "NORMAL" = "normal",
  "SPECIAL" = "special",
}

export type NormalOptions = "rock" | "paper" | "scissors";
export type SpecialOptions = NormalOptions | "lizard" | "spock";

enum GameActionKind {
  "SET_SCORE" = "SET_SCORE",
}

interface Game extends GameState {
  addPoint: () => void;
}

type GameState = {
  gamemode: GameModes;
  loading: boolean;
  score: number;
};

type GameAction = {
  type: GameActionKind;
  payload: number;
};

const getInitialState = (gamemode: GameModes): GameState => ({
  loading: false,
  ...getScore(gamemode),
});

function gameReducer(state: GameState, action: GameAction) {
  switch (action.type) {
    case GameActionKind.SET_SCORE:
      return {
        ...state,
        loading: false,
        score: action.payload,
      };
  }
}

const useGame = (gamemode: GameModes): Game => {
  const [state, dispatch] = React.useReducer(
    gameReducer,
    getInitialState(gamemode)
  );

  const addPoint = () => {
    const { score } = incrementScore(state.gamemode, 1);

    dispatch({ type: GameActionKind.SET_SCORE, payload: score });
  };

  return {
    ...state,
    addPoint,
  };
};

export default useGame;
