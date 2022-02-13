import styled, { css } from 'styled-components';


export const StyledList = styled.ul`
  
  padding: 0;

  &:nth-child(n+1) {
    border-right: 1px solid #dddddd;
  }

  ${({ header }) => 
			header && css`
        font-weight: 600;
				h1 {
					margin: .5em 0;
				}
    `}
`