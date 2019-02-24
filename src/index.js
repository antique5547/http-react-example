import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Axios from "axios";

Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
Axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
Axios.defaults.headers.post["Content-Type"] = "application/json";

Axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log("error ", error);
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  response => {
    console.log("response", response);
    return response;
  },
  error => {
    console.log("response error : ", error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
