import Label from "./Label/Label";
import Input from "./Input/Input";
import { StyledField } from "./Field.styled";

const Field = ( { label, type, name, placeholder, value, handleChange, error }) => {
  return (
    <StyledField>
      <Label text={label}/>
      <Input type={type} name={name} placeholder={placeholder} value={value} handleChange={handleChange} /> 
      <p>{error}</p>   
    </StyledField>
  ) 
  ;
};

export default Field;
