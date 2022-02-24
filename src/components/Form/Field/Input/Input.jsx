import { StyledInput } from "./Input.styled";

const Input = ({ type, name, placeholder, value, handleChange }) => {
  return (
    <StyledInput 
      type={type} 
      name={name} 
      placeholder={placeholder}
      value={value}
      onChange={handleChange} 
    />
  );
};

export default Input;
