import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;700&display=swap');

   * {
       box-sizing: border-box;
   } 

   body {
       min-height: 101vh;
       background-color: #444960;
       font-family: 'Merriweather', sans-serif; 
       font-size: 1.15em;
       margin: 0;
   }

   h1, h2, h3, p {
       margin: 0;
   }
   form {
       p {
           color: red;
       }
   }  

   .tooltip {
       position: relative;
       display: inline-block;

       .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: #3a3a3a;
            color: #ffffff;
            text-align: center;
            padding: .2em 0;
            border: 1px solid black;
            border-radius: .5em;
            
            position: absolute;
            z-index: 15;
       }

       &:hover .tooltiptext {
           visibility: visible;
       }
   }




   
`;