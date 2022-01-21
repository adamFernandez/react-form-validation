import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: ${({ mg }) => mg || '1em'} auto;
    border: ${({ border }) => border || '1px solid #999999'};
    border-radius: .5em;
    padding: ${({ pd }) => pd || '1.5em'} 1.5em;
`;

