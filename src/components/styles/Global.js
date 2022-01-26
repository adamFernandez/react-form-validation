import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;700&display=swap');
    
   * {
       box-sizing: border-box;
   } 

   body {
       background-color: #444960;
       font-family: 'Merriweather', sans-serif; 
       font-size: 1.15em;
       margin: 0;
   }

   h1 {
       margin: 0.5em 0;
   }

   p {
       margin: .5em 0;
   }

   form {
       p {
           color: red;
       }
   }  
`;