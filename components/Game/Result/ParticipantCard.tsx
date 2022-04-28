import styles from "~/components/Game/Result/ParticipantCard.module.css";
import { SpecialMode } from "~/hooks/useGame";
import Option from "../Option/Option";

type ParticipantCardProps = {
  label: string;
  pick: SpecialMode["options"] | null;
  glowing: boolean;
};

const ParticipantCard: React.FC<ParticipantCardProps> = ({
  label,
  pick,
  glowing,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <div>
        <Option option={pick} size="results" glowing={glowing} />
      </div>
    </div>
  );
};

export default ParticipantCard;
