import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import {
  Router,
  IndexRoute,
  Route,
  Link,
  browserHistory,
  hashHistory
} from "react-router";
import mobx from "mobx";
import App from "./components/App";
import SignInModal from "./containers/SignInModal";

mobx.useStrict(true);

const createStoreWithAPI = applyMiddleware(apiMiddleware)(createStore);
function configureStore() {
  return createStoreWithAPI(reducer);
}
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(apiMiddleware)
);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SignInModal} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
