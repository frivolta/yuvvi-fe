import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { Switch, BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { AuthProvider } from "./context/useAuthContext";
import { debugContextDevtool } from "react-context-devtool";

const GlobalStyle = createGlobalStyle`
  html{
    min-height:100%;/* make sure it is at least as tall as the viewport */
    position:relative;
  }
  body, #root {
    min-height:100%;
    height: 100vh;
  }
`;

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  container
);

debugContextDevtool(container, { debugContext: true, debugReducer: true });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
