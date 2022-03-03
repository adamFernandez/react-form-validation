import { capitalize } from '../../../../styles/Functions';
import { StyledSelect } from './Select.styled';

const Select = ({ name, options, handleChange }) => {
  return (
    <StyledSelect name={name} onChange={(e) => handleChange(e)} >
      {options.map((option, index) =>
        <option key={option} value={option} >{capitalize(option)}</option>
      )}
    </StyledSelect>
  )
}

export default Select;