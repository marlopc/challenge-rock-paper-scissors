import clsx from "clsx";
import React from "react";
import styles from "~/components/Game/options/Option.module.css";
import { SpecialOptions } from "~/hooks/useGame";

export type OptionProps = {
  option: SpecialOptions;
  type?: "small" | "medium" | "results";
  glowing?: boolean;
};

const Option: React.FC<OptionProps> = ({ option, type = "small", glowing }) => {
  const classNames = clsx(styles.option, styles[option], {
    [styles[type]]: type !== "small" && type,
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
