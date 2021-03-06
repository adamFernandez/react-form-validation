import Select from './Select/Select';
import Label from '../Label/Label';
import { StyledSelectField } from './SelectField.styled';

const SelectField = ({ selected, name, options, handleChange, error }) => {
  return (
    <StyledSelectField>
      <Label text={name} />
      <Select selected={selected} name={name} options={options} handleChange={handleChange} />
      <p>{error}</p>
    </StyledSelectField>
  );
};

export default SelectField;
