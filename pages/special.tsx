import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { GameModes } from "~/hooks/useGame";

const DynamicGame = dynamic(() => import("~/components/Game/Game"), {
  ssr: false,
});

const Special: NextPage = () => {
  return <DynamicGame gamemode={GameModes.SPECIAL} />;
};

export default Special;
