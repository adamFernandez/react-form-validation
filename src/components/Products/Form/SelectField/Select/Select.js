import { capitalize } from '../../../../styles/Functions';
import { StyledSelect } from './Select.styled';

const Select = ({name, options }) => {
  return (
    <StyledSelect name={name}>
      {options.map(option => 
        <option value={option}>{capitalize(option)}</option>
      )}
    </StyledSelect>
  )
}

export default Select;