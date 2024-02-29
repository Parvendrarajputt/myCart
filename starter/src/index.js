import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { store } from '../src/redux/Store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import {Toaster} from "react-hot-toast"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    <Toaster/>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
