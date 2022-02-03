import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 90%;
  background-color: #fff;
  margin: .5em auto;
  border: 1px solid #999999;
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

  .message {
    color: #999999;
    font-size: 1.7vw;
    margin-top: .2em;
  }

   

  ${({ card }) => card && css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `} 

  @media screen and (max-width: 400px) { 
  }

  @media screen and (max-width: 600px) {
    font-size: 2vw;
    .status {
      .banner {
        top: 3vw;
        right: -3.5vw; 
        width: 18vw; 
      }
    }
    .message {
      font-size: 2vw;
    }
  }

  @media screen and (min-width: 600px) {
    font-size: 2vw;
    .status {
      .banner {
        top: 3vw;
        right: -3.4vw;
      }
    }

    .price {
      font-size: 5vw;
    }
  } 

  @media screen and (min-width: 1200px) {
    font-size: 2.3vw;
    .status {
      .banner {
        top: 3vw;
        right: -3.4vw;
      }
    }
    
  }
`;