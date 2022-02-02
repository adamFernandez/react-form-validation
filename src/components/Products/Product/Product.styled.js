import styled from "styled-components";

export const StyledProduct = styled.div`
  position: relative;  
  border-bottom: 1px solid #bbbbbb;
  margin: 0;
  padding: .2em 0;
  
  
  .image {
    width: 90%;

    img {
      width: 100%;
    }
  }
  .title {
    font-size: 1.3em;
  }

  .price {
    color: purple;
    margin: 0;
    padding: 0;
    font-size: 1em;
  }

  .rooms {
    display: flex;
    margin: .5em 0;
    
    div:nth-child(n+2){
      margin-left: .8em;
    }
  }

  .description {
    font-size: .9em;
  }

  .address {
    font-size: .8em;
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

`;