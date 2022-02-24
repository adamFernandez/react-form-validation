import { capitalize } from "../../../styles/Functions";
import { StyledLabel } from "./Label.styled";

const Label = ({ text }) => {
  return (
    <StyledLabel htmlFor={text}>{capitalize(text)}</StyledLabel>
  );
};

export default Label;
