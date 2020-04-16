import { createGlobalStyle } from "styled-components";

import Montserrat from "./Fonts/Montserrat/Montserrat-Regular.woff2";
import MontserratBold from "./Fonts/Montserrat/Montserrat-Bold.woff2";
import MontserratExtraBold from "./Fonts/Montserrat/Montserrat-ExtraBold.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraBold}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }
`;
