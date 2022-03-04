import { capitalize } from '../../../../styles/Functions';
import { StyledSelect } from './Select.styled';

const Select = ({ selected, name, options, handleChange }) => {
  return (
    <StyledSelect value={selected} name={name} onChange={(e) => handleChange(e)} >
      {options.map((option, index) =>
        <option key={option} value={option} >{capitalize(option)}</option>
      )}
    </StyledSelect>
  )
}

export default Select;