import dynamic from "next/dynamic";
import React from "react";
import { GameModes } from "~/hooks/useGame";

const DynamicGame = dynamic(() => import("~/components/Game/Game"), {
  ssr: false,
});

const Normal = () => {
  return <DynamicGame gamemode={GameModes.NORMAL} />;
};

export default Normal;
