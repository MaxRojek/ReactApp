import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Elhover from "./Elhover";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Elhover />, document.getElementById("el1"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
