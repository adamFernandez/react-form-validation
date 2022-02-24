import styled from "styled-components";
import { fadeIn, fadeOut } from "./animations/animations";

export const Overlay = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: white;
  position: fixed;
  z-index: ${({ zindex }) => zindex || '800'};
  top: 0;
  left: 0;
  cursor: pointer;
  transition-duration: 2000ms;
  transition-property: background-color;
  
  .in {
    background-color: red !important;
    border: 1px solid red;
  }

  
  .out {
    background-color: blue;
  }
`