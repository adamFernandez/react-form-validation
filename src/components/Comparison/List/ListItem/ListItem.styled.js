import styled from 'styled-components';

export const StyledListItem = styled.li`

  padding: .4em;
  list-style-type: none;


  &:first-child {
    height: 180px;
    align-items: end;
  }

  &:nth-child(n+2) {
    border-top: 1px solid #dddddd;
  }

  .true {
    color: green;
  }
  
  .false {
    color: red;
  }
`