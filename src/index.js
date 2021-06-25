import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/index";
import thunk from 'redux-thunk';
import { QueryParamProvider } from 'use-query-params';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <App />
        </QueryParamProvider>
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
