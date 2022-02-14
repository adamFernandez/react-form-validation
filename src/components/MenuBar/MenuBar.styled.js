import styled from "styled-components";

export const StyledMenuBar = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  margin-bottom: .5em;
  width: 100%;
  height: 3em;
  background-color: #e4eeff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-content: center;
  font-size: 1.4em;
  
  div:nth-child(n){
      cursor: pointer;
  }

  .currency_symbols {
    justify-self: center;

    display: flex;
    color: #999999;

    &:nth-child(1) {
      padding: 0;
    }
    
    .symbol {
      width: .4em;
      margin-left: .1em;
      cursor: pointer;
    }
  }

  .cart {
    width: 50%;
    position: relative;
    justify-self: center;

    .counter {
      position: absolute;
      top: 48%;
      right: 27%;
      font-size: 0.6em;
      font-weight: bold;
      background-color: #ffffff;
      border-radius: 50%;
      width: 45%;
      height: 45%;
      padding-top: 7%;
      z-index: 40;
      text-align: center;
    }
    
    .overlay {
      z-index: 1000;
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: hsla(120, 80%, 10%, 25%);
      cursor: pointer;
    }
  }
  

  .sub_menu {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    width: 60%;
    margin: auto;
    height: 2em;
    background-color: lighten($bg-grey, 10%);
    border: 1px solid $border-grey;
    border-radius: 4px;

    .sub_menu_item {
      padding-left: 1.4em;
    }
  }
`;