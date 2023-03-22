import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
  width: 100%;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  min-height: 100vh;
  word-break: break-word;
  background: linear-gradient(
    to right,
    ${({theme}) => theme.color.mainColor} 0%,
    ${({theme}) => theme.color.mainColor} 60%,
    ${({theme}) => theme.color.secondColor} 50%,
    ${({theme}) => theme.color.secondColor} 100%
  );
  }
  `;