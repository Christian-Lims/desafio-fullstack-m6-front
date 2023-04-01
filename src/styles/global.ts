import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body{
    background-color: var(--color-grey-4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  a{
    text-decoration: none;
  }

  ol, ul, li {
    list-style: none;
  } 

  button, select{
    cursor: pointer;
  }

  :root{
    --color-primary: #6B01C7;
    --color-primary-focus: #51356F;
    --color-primary-2: #6D5FC1;
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;
    --color-negative: #D10000;
    --color-sucess: #00CF00;
  }
`;
export default GlobalStyle;
