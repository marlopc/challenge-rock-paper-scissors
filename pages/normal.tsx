import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { GameModes } from "~/hooks/useGame";

const DynamicGame = dynamic(() => import("~/components/Game/Game"), {
  ssr: false,
});

const Normal: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock, Paper, Scissors | Normal</title>
        <meta
          name="description"
          content="Play the classic Rock, Paper, Scissors game versus the computer"
        />
      </Head>
      <DynamicGame gamemode={GameModes.NORMAL} />
    </>
  );
};

export default Normal;
