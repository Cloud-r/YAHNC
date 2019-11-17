/* eslint-disable no-underscore-dangle */

import { createStore, compose } from "redux";

import Reducer from "../Reducers/reducer";

import Middleware from "../Middleware/middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducer, composeEnhancers(Middleware));

/* eslint-enable */

export default store;
