import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
  margin: 0;
  padding: .2em 0;
  
  
  .image {
    width: 90%;

    img {
      width: 100%;
    }
  }

  .info {
    justify-self: left;
    
    .title {
        text-align: left;
        margin: 0;
        font-size: 1em;
        color: #000;
      }
    
      .price {
        color: purple;
        margin: 0;
        padding: 0;
        font-size: 1.5em;
      }
  }

  .rooms {
    display: flex;
    margin: .5em 0;
    
    div:nth-child(n+2){
      margin-left: .8em;
    }
  }

  .description {
    font-size: .7em;
  }

  .address {
    font-size: .6em;
  }

  @media screen and (max-width: 320px) { 
    grid-template-columns: 1fr;
    justify-items: center;
    font-size: 4vw;
    .image {
      width: 100%;
    }
    .info {
      justify-self: left;
      padding-left: .5em;
    }
  }
  @media screen and (max-width: 400px) { 
    grid-template-columns: 1fr;
    font-size: 4vw;

    .image {
      width: 100%;
    }
    .info {
      justify-self: left;
      padding-left: .5em;
    }
  }
  
  

`