import Select from './Select/Select';
import Label from '../Label/Label';
import { StyledSelectField } from './SelectField.styled';

const SelectField = ({ name, options, error }) => {
  return (
    <StyledSelectField>
      <Label text={name} />
      <Select name={name} options={options} />
      <p>{error}</p>
    </StyledSelectField>
  );
};

export default SelectField;
