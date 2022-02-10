import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  border-right: 1px solid #dddddd;
  &:last-child {
    border-right: none;
  }
`