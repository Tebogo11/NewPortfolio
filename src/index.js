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
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
