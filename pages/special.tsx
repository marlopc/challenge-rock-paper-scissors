import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { GameModes } from "~/hooks/useGame";

const DynamicGame = dynamic(() => import("~/components/Game/Game"), {
  ssr: false,
});

const Special: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock, Paper, Scissors | Special</title>
        <meta
          name="description"
          content="Play the special mode Rock, Paper, Scissors, Lizard, Spock versus the computer"
        />
      </Head>
      <DynamicGame gamemode={GameModes.SPECIAL} />
    </>
  );
};

export default Special;
