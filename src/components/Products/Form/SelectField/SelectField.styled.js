import styled from 'styled-components';

export const StyledSelectField = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: ${({ width }) => width || '100%'};
  margin-bottom: ${({ mb }) => mb || '.5em'};
`;
