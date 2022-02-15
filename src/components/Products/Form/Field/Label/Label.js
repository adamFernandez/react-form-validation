import { capitalize } from "../../../../styles/Functions";
import { StyledLabel } from "./Label.styled";

const Label = ({ text }) => {
  return (
    <StyledLabel for={text}>{capitalize(text)}</StyledLabel>
  );
};

export default Label;
