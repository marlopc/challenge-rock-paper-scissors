import React from "react";
import scoreStorage from "~/hooks/lib/scoreStorage";
import { getCpuPick, getResult, Results } from "./lib/game";

export enum GameModes {
  "NORMAL" = "normal",
  "SPECIAL" = "special",
}

export enum GameStep {
  "PICKING" = "picking",
  "WAITING" = "waiting",
  "RESOLVING" = "resolving",
}

export type NormalMode = {
  options: "rock" | "paper" | "scissors";
};

export type SpecialMode = {
  options: NormalMode["options"] | "lizard" | "spock";
};

enum GameActionKind {
  "SET_RESULT_AND_SCORE" = "SET_RESULT_AND_SCORE",
  "SET_PICKS" = "SET_PICKS",
  "RESET" = "RESET",
}

export interface Game extends GameState {
  pickAndResolveAfter: (option: SpecialMode["options"], time: number) => void;
  reset: () => void;
}

type GameState = {
  result: Results | null;
  userPick: SpecialMode["options"] | null;
  cpuPick: SpecialMode["options"] | null;
  gamemode: GameModes;
  score: number;
  step: GameStep;
};

type GameAction = {
  type: GameActionKind;
  payload?: any;
};

const getInitialState = (gamemode: GameModes): GameState => ({
  step: GameStep.PICKING,
  result: null,
  userPick: null,
  cpuPick: null,
  ...scoreStorage.getScore(gamemode),
});

function gameReducer(state: GameState, action: GameAction) {
  switch (action.type) {
    case GameActionKind.SET_RESULT_AND_SCORE:
      return {
        ...state,
        ...action.payload,
        step: GameStep.WAITING,
      };
    case GameActionKind.SET_PICKS:
      return {
        ...state,
        ...action.payload,
        step: GameStep.RESOLVING,
      };
    case GameActionKind.RESET:
      return {
        ...state,
        step: GameStep.PICKING,
        result: null,
        userPick: null,
        cpuPick: null,
      };
    default:
      return { ...state };
  }
}

const useGame = (gamemode: GameModes): Game => {
  const [state, dispatch] = React.useReducer(
    gameReducer,
    getInitialState(gamemode)
  );

  const pickAndResolveAfter = (
    option: SpecialMode["options"],
    time: number
  ) => {
    const cpuPick = getCpuPick(state.gamemode);
    const result = getResult(option, cpuPick);

    const picks = {
      cpuPick,
      userPick: option,
    };

    dispatch({ type: GameActionKind.SET_PICKS, payload: picks });

    const { score } = scoreStorage.alter(
      state.gamemode,
      result === "win" ? 1 : result === "lose" ? -1 : 0
    );

    setTimeout(() => {
      const resultAndScore = { score, result };

      dispatch({
        type: GameActionKind.SET_RESULT_AND_SCORE,
        payload: resultAndScore,
      });
    }, time);
  };

  const reset = () => {
    dispatch({ type: GameActionKind.RESET });
  };

  return {
    ...state,
    pickAndResolveAfter,
    reset,
  };
};

export default useGame;
