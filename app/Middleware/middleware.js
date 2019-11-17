import Thunk from "redux-thunk";
import Logger from "redux-logger";
import { applyMiddleware } from "redux";

const combinedMiddleware = applyMiddleware(Thunk, Logger);

export default combinedMiddleware;
