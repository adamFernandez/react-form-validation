import Label from "../Label/Label";
import Input from "./Input/Input";
import { StyledInputField } from "./InputField.styled";
import { capitalize } from "../../../styles/Functions";

const InputField = ( { name, type, value, handleChange, error }) => {
  const nameUpper = capitalize(name);
  
  return (
    <StyledInputField>      
      <Label for={name} text={nameUpper}/>
      <Input type={type} name={name} placeholder={nameUpper} value={value} handleChange={handleChange} /> 
      <p>{error}</p>   
    </StyledInputField>
  ) 
  ;
};

export default InputField;
