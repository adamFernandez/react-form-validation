import styled, { css } from 'styled-components';

export const ProductContainer = styled.div`
  position: relative;
  background-color: #fff;
  margin: .5em auto;
  // border: 1px solid #999999;
  border-radius: .5em;
  padding: 1.2em;
  overflow: hidden;
  
  .status {
    margin: 0;
    display: grid;
    justify-items: end;
    align-items: start;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 5%;
    color: white;
    
    .banner {
      position: relative;
      top: 15vw;
      right: -3.2vw;
      font-size: 2vw;
      display: grid;
      align-items: center;
      padding-bottom: .2em;
      justify-content: center;
      width: 18vw;
      height: 3vw;
      background-color: #02641e;
      transform: rotate(45deg) translate(2%, -10%);
      cursor: pointer;
    }
  }

  .expired {
    background-color: #c40606 !important;
  }


  ${({ card }) => card && css`
      width: 300px;
    `} 

  @media screen and (max-width: 400px) { 
  }

  @media screen and (max-width: 600px) {
    .status {
      .banner {
        top: 3vw;
        right: -3.5vw; 
        width: 18vw; 
      }
    }
  }

  @media screen and (min-width: 600px) {
    .status {
      .banner {
        top: 3vw;
        right: -3.4vw;
      }
    }

    .price {
    }
  } 

  @media screen and (min-width: 1200px) {
    .status {
      .banner {
        top: 3vw;
        right: -3.4vw;
      }
    }
    
  }
`;