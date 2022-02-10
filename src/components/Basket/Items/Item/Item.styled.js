import styled from 'styled-components';

export const StyledItem = styled.div`



  display: grid;
  grid-template-columns: 10% 45% 10% 25% 10%;
  align-items: center;


  padding: .8rem 0;
  border-bottom: 1px dashed #ddd;

  &:last-child {
    border: none;
  }
  
  .image {
    justify-self: center;
  }

  .title {
    color: #000000;
    font-size: .9em;
    padding: .5em;
    text-align: left;
  }
  
  .number_box {
    color: rgb(150, 150, 150);
    font-family: gothamBold, Arial, sans-serif;
    font-size: 1em;
    height: 1.4em;
    text-align: center;
    border: 1px solid rgb(218, 217, 217);
    border-radius: 3px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        display: none;
    }

    &:hover {
      box-shadow: 0px 0px 3px rgb(206, 206, 206);
      border-color: $light-blue;
      cursor: pointer;
    }
  }   

  .price {
    color: purple;
    justify-self: end;
    padding-right: 3%;
  }

  .delete {
    justify-self: center;
    color: rgb(191, 191, 191);
    cursor: pointer;
  }
  
`
