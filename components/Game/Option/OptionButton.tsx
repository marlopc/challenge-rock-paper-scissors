import { ButtonHTMLAttributes } from "react";
import Option, { OptionProps } from "./Option";

type OptionButtonProps = OptionProps & ButtonHTMLAttributes<HTMLButtonElement>;

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  size,
  glowing,
  ...rest
}) => {
  return (
    <button value={option ?? ""} tabIndex={rest.disabled ? -1 : 0} {...rest}>
      <Option option={option} size={size} glowing={glowing} />
    </button>
  );
};

export default OptionButton;
