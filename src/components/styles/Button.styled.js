import styled from 'styled-components';

export const Button = styled.button`
    font-size: .9em;
    width: ${({ width }) => width || '100%' };
    margin-top: .5em;
    padding: .7em 0;
    border: none;
    border-radius: .5em;
    background-color: ${({ color }) => color || '#1555AA'} ;
    color: #fff;
`;