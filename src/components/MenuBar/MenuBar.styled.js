import styled from "styled-components";

export const StyledMenuBar = styled.div`

  width: 100%;
  margin: auto;
  height: 3em;
  background-color: #999999;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 0.5fr));
  align-items: center;
  justify-items: start;
  border: 1px solid $border-grey;

  .form {
      padding-left: 1.4rem;
      font-size: 1.4em;
      cursor: pointer;
  }
  .movies {
      padding-left: 1.4rem;
      font-size: 1.4em;
      cursor: pointer;
  }
  .card {
      padding-left: 1.4rem;
      font-size: 1.4em;
      cursor: pointer;
  }

  .currency_symbols {
    display: flex;
    color: lighten($items-grey, 30%);

    &:nth-child(1) {
      padding: 0;
    }
    
    .symbol {
      padding-left: .2em;
      cursor: pointer;
    }
  }


  .currency {
    width: 90%;
    font-family: gothamBold, Arial, sans-serif;
    color: $items-grey;
    border: 1px solid $border-grey;
    border-radius: 3px;
  }

  .icon {
    justify-self: center; 
    grid-column: 3/4;
    grid-row: 1/1; 
    cursor: pointer;    
  }

  .counter {
    font-size: 0.9em;
    background-color: #ffffff;
    border: 1px solid $light-red;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    justify-self: center;
    line-height: 1.5rem;
    text-align: center;
    grid-column: 2/3;
    grid-row: 1/1;
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