import { capitalize } from "../../../../styles/Functions";
import { StyledInput } from "./Input.styled";

const Input = ({ type, name, checked, value, handleChange }) => {
  return (
    <StyledInput 
      type={type} 
      name={name} 
      placeholder={capitalize(name)}
      checked={checked}
      value={value}
      onChange={handleChange} 
    />
  );
};

export default Input;
