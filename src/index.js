import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Fonts from "./Fonts";
import GlobalStyles from "./components/GlobalStyles";
import defaultTheme from "./themes/default";

ReactDOM.render(
  <>
    <Fonts />
    <GlobalStyles />
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
