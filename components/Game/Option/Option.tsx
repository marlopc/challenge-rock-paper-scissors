import clsx from "clsx";
import React from "react";
import styles from "~/components/Game/Option/Option.module.css";
import { SpecialMode } from "~/hooks/useGame";

export type OptionProps = {
  option: SpecialMode["options"] | null;
  size?: "small" | "medium" | "results";
  glowing?: boolean;
};

const Option: React.FC<OptionProps> = ({ option, size = "small", glowing }) => {
  const classNames = clsx(styles.option, styles[option ?? "placeholder"], {
    [styles[size]]: size !== "small" && size,
    [styles.glowing]: glowing,
  });

  return (
    <div className={classNames}>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Option;
