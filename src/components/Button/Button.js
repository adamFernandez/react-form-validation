import { StyledButton } from "./Button.styled";

const Button = ({ text, type, handleSubmit }) => {
  return (
    <StyledButton type={type} onSubmit={handleSubmit}>{text}</StyledButton>
  );
};

export default Button;
