import { StyledButton } from "./Button.styled";

const Button = ({ text, type, pd, w, fs, br, b, bg, c, onClick, disabled, className}) => {
  return (
    <StyledButton type={type} pd={pd} w={w} fs={fs} br={br} b={b} bg={bg} c={c} onClick={onClick} disabled={disabled} className={className}>{text}</StyledButton>
  );
};

export default Button;
