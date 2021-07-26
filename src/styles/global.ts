import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    background: #003638;
    color: #F3F2C9;
  }

  a {
    text-decoration: none;
  }
`;
