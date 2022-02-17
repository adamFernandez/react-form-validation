import { keyframes } from "styled-components";

export const scaleUp = keyframes`
  0% {
    transform: scale(100%);
    z-index: 1000;
  }
  100%{
    transform: scale(115%) translateY(-35%);
    z-index: 2000;
  }
`;

export const slideDown = keyframes`
  0% { 
    top: -50vh;
    }
  50% {
    top: 50vh;
  }
  100% {
    top: 3.3em; 
  }
`;