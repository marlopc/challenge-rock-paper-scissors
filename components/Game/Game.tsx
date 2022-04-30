import clsx from "clsx";
import React from "react";
import Button from "~/components/Button/Button";
import styles from "~/components/Game/Game.module.css";
import Gameplay from "~/components/Game/Gameplay/Gameplay";
import Header from "~/components/Header/Header";
import Modal from "~/components/Modal/Modal";
import Rules from "~/components/Rules/Rules";
import useGame, { GameModes } from "~/hooks/useGame";
import useModal from "~/hooks/useModal";

type GameProps = {
  gamemode: GameModes;
};

const Game: React.FC<GameProps> = ({ gamemode }) => {
  const game = useGame(gamemode);
  const rules = useModal();
  const rulesRef = React.useRef<HTMLButtonElement>(null);

  const headerClassNames = clsx(styles.floating, styles.header);
  const rulesClassNames = clsx(styles.floating, styles.rules);

  return (
    <div className={styles.container}>
      <div className={headerClassNames}>
        <Header gamemode={game.gamemode} score={game.score} />
      </div>
      <Gameplay {...game} />
      <div className={rulesClassNames}>
        <Button label="Rules" onClick={rules.open} ref={rulesRef} />
      </div>
      <Modal
        isOpen={rules.isOpen}
        close={rules.close}
        id="rules"
        initiatorRef={rulesRef}
        label="Rules"
      >
        <Rules gamemode={game.gamemode} />
      </Modal>
    </div>
  );
};

export default Game;
