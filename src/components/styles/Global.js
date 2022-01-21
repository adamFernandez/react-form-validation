import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;700&display=swap');
    
   * {
       box-sizing: border-box;
   } 

   body {
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
       width: 95%;
       margin: 0 auto;
   }

   label {
       font-weight: bold;
   }

   input {
        width: 100%;
        margin-bottom: 1.5em;
        padding: .8em 0.5em;
        border: 1px solid #999999;
        border-radius: .5em;
   }
`;