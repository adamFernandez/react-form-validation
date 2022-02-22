import styled from "styled-components";
import { fadeIn } from "./animations/animations";

export const Overlay = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: rgba(0 ,0 ,0 , 0.75);
  position: fixed;
  z-index: ${({ zindex }) => zindex || '800'};
  top: 0;
  left: 0;
  cursor: pointer;
  visibility: ${({ visibility }) => visibility || 'visible' };

  animation: ${({ animation }) => animation || '${fadeIn} 5s' } ;
`