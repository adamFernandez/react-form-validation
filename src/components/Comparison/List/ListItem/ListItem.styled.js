import styled from 'styled-components';

export const StyledListItem = styled.li`

  padding: .4em;
  list-style-type: none;
  

  &:first-child {
    img {
      width: 80%;
    }

    
    height: 180px;
    display: grid;
    justify-items: center;
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

  .colour {
    font-size: .9em;
  }
`