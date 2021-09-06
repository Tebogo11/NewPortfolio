import React from "react";
import ReactDOM from "react-dom";
//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import App from "./App";
import projects from "./store/reducors/projectsR";
const reducor = combineReducers({
  projects,
});
const store = createStore(reducor, compose(applyMiddleware(thunk)));
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
