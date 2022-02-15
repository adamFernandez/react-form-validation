import { capitalize } from '../../../styles/Functions';
import { StyledLabel } from '../Field/Label/Label.styled';
import { StyledSelect } from './Select.styled';
import React from 'react';

const Select = ({ name, id, options, error }) => {
  return (
    <>
      <StyledLabel for={name}>{capitalize(name)}</StyledLabel>
      <StyledSelect name={name} id={id}>
        {options.map(option => 
          <option value={option}>{capitalize(option)}</option>)}
      </StyledSelect>
      <p>{error}</p>
    </>
  );
};

export default Select;
