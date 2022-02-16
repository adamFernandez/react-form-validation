import styled, { css } from "styled-components";

export const StyledInputField = styled.div`
  margin: .5em 0;

  &:nth-child(n){
    display: grid;
    align-content: center;
    justify-content: center;
    justify-items: center;
  }

  
  ${({ checkbox }) => 
  checkbox && css`
  border: 1px solid red;
`}

`
