import styled from "styled-components";

export const StyledMenuBar = styled.div`
  margin: 1em 0;
  width: 100%;
  height: 3em;
  background-color: #e4eeff;
  display: flex;
  align-items: center;
  font-size: 1.4em;
  
  div:nth-child(n){
      margin-left: .6em;
      cursor: pointer;
  }

  // .form {
  //     cursor: pointer;
  // }
  // .movies {
  //     cursor: pointer;
  // }
  // .card {
  //     cursor: pointer;
  // }

  .currency_symbols {
    display: flex;
    color: #999999;

    &:nth-child(1) {
      padding: 0;
    }
    
    .symbol {
      padding-left: .2em;
      cursor: pointer;
    }
  }


  .cart {
    margin-left: auto;
    // grid-column: 3/4;
    // grid-row: 1/1;
    cursor: pointer;   
  }

  .counter {
    font-size: 0.9em;
    background-color: #ffffff;
    border: 1px solid $light-red;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    position: relative;
    z-index: 20;
    right: 5.7vw;
    top: 1.3vw;
    text-align: center;
    cursor: pointer;
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