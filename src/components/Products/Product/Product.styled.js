import styled from "styled-components";

export const StyledProduct = styled.div`
  border-bottom: 1px solid #bbbbbb;
  margin: 0;
  padding: .2em 0; 
   

  .image {
    width: 100%;
    
    img {
      width: 100%;
    }
  }
  
  .title {
    color: #000000;
    text-align: left; 
    font-size: 1.1em;
  }

  .price {
    color: purple;
    margin: 0;
    padding: 0;
    font-size: 1em;
  }

  .description {
    font-size: .9em;
  }

  .address {
    font-size: .8em;
  }

  // @media screen and (max-width: 320px) { 
  //   grid-template-columns: 1fr;
  //   justify-items: center;
  //   font-size: 4vw;
  //   .image {
  //     width: 100%;
  //   }
  //   .info {
  //     justify-self: left;
  //     padding-left: .5em;
  //   }
  // } 

`;