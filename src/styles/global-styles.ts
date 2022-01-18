import { createGlobalStyle } from 'styled-components';
import '@fontsource/source-sans-pro';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    
  }

  body {
    overflow-X:hidden;
    font-family: "Source Sans Pro";
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
    font-family: "Source Sans Pro";
  }
  ::placeholder,::-webkit-input-placeholder,:-ms-input-placeholder{
     font-family: "Source Sans Pro";
  }
  *,::before,::after{
    font-family: "Source Sans Pro";
  }
  input, select {
    font-family: "Source Sans Pro";
    font-size: inherit;
  }
`;
