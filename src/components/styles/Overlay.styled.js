import styled, { css } from "styled-components";
import { fadeIn, fadeOut } from "./animations/animations";

export const Overlay = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: rgba(0 ,0 ,0 , 0.85);
  position: fixed;
  // transition: 5000s;
  z-index: ${({ zindex }) => zindex || '800'};
  top: 0;
  left: 0;
  cursor: pointer;
  
`