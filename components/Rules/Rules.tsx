import React from "react";
import NormalRules from "~/components/svg/rules/NormalRules";
import SpecialRules from "~/components/svg/rules/SpecialRules";
import { GameModes } from "~/hooks/useGame";

const Rules: React.FC<{ gamemode: GameModes }> = ({ gamemode }) => {
  switch (gamemode) {
    case GameModes.NORMAL:
      return <NormalRules />;
    case GameModes.SPECIAL:
      return <SpecialRules />;
  }
};

export default Rules;
