import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    font-style: normal;
    color: ${colors.black};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button, textarea { margin: 0; padding: 0; }

  ul { list-style: none; }

  button { background: transparent; border: 0; outline: 0 }

  body {
    background: ${colors.white};
    height: 100vh;
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
  }

`;
