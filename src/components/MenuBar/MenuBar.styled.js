import styled from 'styled-components';

export const StyledMenuBar = styled.div`
  z-index: 1000;
  position: sticky;
  top: 0;
  margin-bottom: .5em;
  width: 100%;
  height: 3em;
  background-color: #e4eeff;
  display: flex;
  /* grid-template-columns: repeat(4, minmax(100px, 125px)) 150px; */
  align-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1.4em;
  
  a {
    color: #464646;
    text-decoration: none;
    border-top: 2px solid #e4eeff;
    border-bottom: 2px solid #e4eeff;
    transform: scale(100%);
    transition: transform .2s;
    
    &:last-child {
      border: none;
    }
    
    
    &:hover {
      border-top: 2px solid #464646;
      border-bottom: 2px solid #464646;
      transform: scale(110%);

      &:last-child {
        border: none;
      }
    }

    &:active {
      border: none;
      transform: scale(80%);
    }
  }


  div:nth-child(n){
      cursor: pointer;
  }

  &:first-child {
    padding-left: .5em;
  }
  
  .cart {
    display: flex;    
    margin-left: auto;
    
    div:last-child {
      margin: 0 .5em;
    }
    
    .currency {
      margin-top: .5rem;
      color: #999999;

      .symbol {
        width: .4em;
        margin-left: .1em;
        cursor: pointer;
      }
    }
    
    
    .basket {
      position: relative;

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
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        background-color: hsla(120, 80%, 10%, 25%);
        cursor: pointer;
      }
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
