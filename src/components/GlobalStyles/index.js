import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-size: 14px;
    line-height: 1;
    width: 100%;
    height: 100%;
    -webkit-text-size-adjust: none;
    -webkit-overflow-scrolling: touch;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 320px;
  };
  body {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-drag: none;;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Montserrat, Arial, sans-serif;
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    *::before, *::after{
      box-sizing: border-box;
    }
  }
  #root {
    width: 100%;
    height: 100%;
  }
  button {
   font-family: Montserrat, Arial, sans-serif;
  }
  label {
    outline: none;
  }
`;
