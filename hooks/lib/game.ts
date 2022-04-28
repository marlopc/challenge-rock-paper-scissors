import { GameModes, NormalMode, SpecialMode } from "../useGame";

const NormalOptions: NormalMode["options"][] = ["rock", "paper", "scissors"];
const SpecialOptions: SpecialMode["options"][] = [
  ...NormalOptions,
  "lizard",
  "spock",
];

export type Results = "win" | "lose" | "tie";

const getCpuPick = (gamemode: GameModes): SpecialMode["options"] => {
  const modeOptions = gamemode === "normal" ? NormalOptions : SpecialOptions;
  const randomIndex = Math.floor(Math.random() * modeOptions.length);

  return modeOptions[randomIndex];
};

const getResult = (
  a: SpecialMode["options"],
  b: SpecialMode["options"]
): Results => {
  if (a === b) return "tie";

  const winsTo: { [x: string]: SpecialMode["options"][] } = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
  };

  return winsTo[a].includes(b) ? "win" : "lose";
};

export { getCpuPick, getResult };
