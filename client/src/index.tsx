import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/index";
import { apiMiddleware } from "redux-api-middleware";
import { automataMiddleware } from "redux-automata";
import { BrowserRouter as Router, Route } from "react-router-dom";
import mobx from "mobx";
import App from "./components/App";
// import SignInModal from "./containers/SignInModal";

mobx.useStrict(true);

const createStoreWithAPI = applyMiddleware(apiMiddleware)(createStore);
function configureStore() {
  return createStoreWithAPI(reducer);
}

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(apiMiddleware, automataMiddleware)
);

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
