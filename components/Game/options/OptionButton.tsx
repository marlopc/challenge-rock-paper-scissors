import { ButtonHTMLAttributes } from "react";
import Option, { OptionProps } from "./Option";

type OptionButtonProps = OptionProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  type,
  glowing,
  ...rest
}) => {
  return (
    <button {...rest}>
      <Option option={option} type={type} glowing={glowing} />
    </button>
  );
};

export default OptionButton;
