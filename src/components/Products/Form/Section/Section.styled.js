import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  padding: .2em;
  /* border: 1px solid #dddddd; */

  h4 {
    margin: .7em .2em;
  }
  h5 {
    margin: .5em .6em
  }
  
  ${({ checkbox }) => 
			checkbox && css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(45px, .15fr));
        justify-content: start;
        align-content: center;
        width: 100%;
        padding: .2em;
        border: none;
        border-top: 1px solid #dddddd;
    `}
`