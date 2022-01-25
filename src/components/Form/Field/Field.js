import Label from "./Label/Label";
import Input from "./Input/Input";
import { StyledField } from "./Field.styled";

const Field = ({ label, type, name, placeholder, value, handleChange }) => {
  return (
    <StyledField>
      <Label text={label}/>
      <Input type={type} name={name} placeholder={placeholder} value={value} handleChange={handleChange} />    
    </StyledField>
  ) 
  ;
};

export default Field;
