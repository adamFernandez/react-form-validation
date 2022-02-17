/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  padding: .2em;
  border: 1px solid #dddddd;
  
  h4 {
    margin: .7em .2em;
  }
  h5 {
    margin: .5em .6em
  }
  
  ${({ input }) => input && css`
    border: none;
    
  `}
    
  ${({ checkbox }) => checkbox && css`

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
      justify-content: start;
      text-align: center;
      padding: .2em;
      border: none;
      border-top: 1px solid #dddddd;

      input[type="checkbox"] {
        margin: 0;
      }
      ${({ list }) => list && css`
        grid-template-columns: 1fr;
        padding: 0 .4em;

        div:nth-child(n) {
            display: grid;
            grid-template-columns: 1fr .5fr;
            justify-items: left;
          

        }
      
        
      `}
  `}

`;
