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
    top: -80vh;
    }
  50% {
    top: 50vh;
  }
  100% {
    top: 3.3em; 
  }
`;

export const slideUp = keyframes`
  0% { 
    top: 3.3em;
  }
  50% {
    top: 50vh;
  }
  100% {
    top: -80vh;
  }
`;

export const rubberButton = keyframes`
  0% {
    transform: scale(80%);
  }
  50% {
    transform: scale(100%);
  }
  75% {
    transform: scale(120%);
  }
  100% {
    transform: scale(90%);
  }
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
  `
  
  export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
    visibility: hidden;
  }
`
