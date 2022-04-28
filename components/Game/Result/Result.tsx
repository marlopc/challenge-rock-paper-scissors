import clsx from "clsx";
import React from "react";
import Button from "~/components/Button/Button";
import styles from "~/components/Game/Result/Result.module.css";
import { Game, GameStep } from "~/hooks/useGame";
import useSmallScreen from "~/hooks/useSmallScreen";
import ParticipantCard from "./ParticipantCard";

type ResultProps = Pick<
  Game,
  "cpuPick" | "userPick" | "step" | "result" | "reset"
> & { disabled: boolean };

const ResultMessages = {
  win: "You win!",
  lose: "You lose",
  tie: "It's a tie!",
};

const Result: React.FC<ResultProps> = ({
  cpuPick,
  userPick,
  step,
  result,
  reset,
  disabled,
}) => {
  const isSmallScreen = useSmallScreen();
  const [isResetGameVisible, setIsResetGameVisible] = React.useState(false);
  const [isDebouncing, setIsDebouncing] = React.useState(false);

  const resultText = result !== null && ResultMessages[result];

  const containerClassNames = clsx(styles.container, {
    [styles.show]: step !== GameStep.PICKING,
  });

  const resetGameClassNames = clsx(styles.reset, {
    [styles.appear]: isResetGameVisible && !isDebouncing,
  });

  const handleReset = () => {
    if (isDebouncing || disabled) return;

    setIsDebouncing(true);
    setTimeout(reset, 400);
  };

  React.useEffect(() => {
    if (step !== GameStep.WAITING) {
      setIsDebouncing(false);
      setIsResetGameVisible(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIsResetGameVisible(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [step]);

  return (
    <div className={containerClassNames}>
      <ParticipantCard
        label="You picked"
        pick={userPick}
        glowing={isResetGameVisible && result === "win"}
      />
      {!isSmallScreen && (
        <div className={resetGameClassNames}>
          <div>
            <p>{resultText}</p>
            <Button
              label="Play again"
              onClick={handleReset}
              disabled={disabled}
              solid
              expand
            />
          </div>
        </div>
      )}
      <ParticipantCard
        label="The house picked"
        pick={step === GameStep.WAITING ? cpuPick : null}
        glowing={isResetGameVisible && result === "lose"}
      />
      {isSmallScreen && (
        <div className={resetGameClassNames}>
          <div>
            <p>{resultText}</p>
            <Button label="Play again" onClick={handleReset} solid expand />
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
