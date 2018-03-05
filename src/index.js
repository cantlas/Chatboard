import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { postReducer } from "./reducers/postReducer";

import ChatboardListPage from "./ChatboardListPage";
import PostPage from "./PostPage";

const testReducer = (state = "success") => {
  return state;
};

const rootReducer = combineReducers({ postReducer, test: testReducer });

let store = createStore(rootReducer);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={ChatboardListPage} />
      <Route path="/post/:id" component={PostPage} />
    </div>
  </Router>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
