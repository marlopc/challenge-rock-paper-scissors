import clsx from "clsx";
import React from "react";
import styles from "~/components/Button/Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  solid?: boolean;
  expand?: boolean;
  label: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { solid, label, expand, ...rest },
  ref
) {
  const className = clsx(styles.container, {
    [styles.expand]: expand,
    [styles.solid]: solid,
  });

  return (
    <button className={className} ref={ref} {...rest}>
      {label}
    </button>
  );
});

export default Button;
