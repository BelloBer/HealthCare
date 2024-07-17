// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    color: ${(props) => props.theme.bodyFontColor};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  label {
    color: ${(props) => props.theme.bodyFontColor};
  }
`;

export default GlobalStyles;
