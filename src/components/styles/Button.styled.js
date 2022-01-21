import styled from 'styled-components';

export const Button = styled.button`
    width: ${({ width }) => width || '100%' };
    margin-top: 1.5em;
    padding: 1em 0;
    border: none;
    border-radius: .5em;
    background-color: ${({ color }) => color || '#0103AA'} ;
    color: #fff;
`;