import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "./Components/App";
import Store from "./Store/store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

require("./index.scss");
