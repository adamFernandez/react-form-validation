import styled from 'styled-components';

export const StyledListItem = styled.li`
  list-style-type: none;
  &:nth-child(n+2) {
    border-top: 1px solid #dddddd;
  }

  .title {
    font-weight: bold;
  }
`