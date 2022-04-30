import type { NextPage } from "next";
import Head from "next/head";
import GameModeSelection from "~/components/GameModeSelection/GameModeSelection";

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rock, Paper, Scissors</title>
        <meta
          name="description"
          content="Play Rock, Paper, Scissors, or the special gamemode!"
        />
      </Head>
      <GameModeSelection />
    </>
  );
};

export default Landing;
