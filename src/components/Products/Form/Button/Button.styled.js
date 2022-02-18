import styled from 'styled-components';

export const StyledButton = styled.button`
    font-size: ${({ fs }) => fs || '.9em' };
    width: ${({ w }) => w || '100%' };
    margin-top: .5em;
    padding: ${({ pd }) => pd || '.7em 0' };
    border: ${({ b }) => b || 'none' };
    border-radius: ${({ br }) => br || '.5em' };
    background-color: ${({ bg }) => bg || '#1555AA'} ;
    color: ${({ c }) => c || '#ffffff' };
    cursor: pointer;
`;