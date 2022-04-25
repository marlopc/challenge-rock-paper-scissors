import clsx from "clsx";
import React from "react";
import styles from "~/components/Button/Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  solid?: boolean;
  expand?: boolean;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ solid, label, expand, ...rest }) => {
  const className = clsx(styles.container, {
    [styles.expand]: expand,
    [styles.solid]: solid,
  });

  return (
    <button className={className} {...rest}>
      {label}
    </button>
  );
};

export default Button;
