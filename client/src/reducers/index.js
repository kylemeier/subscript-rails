import { combineReducers } from "redux";
import movies from "./movies";
import people from "../ducks/people";
import { stateMachineReducer } from "../statemachine/test";

const reducers = combineReducers({
  movies,
  people,
  stateMachineReducer
});

export default reducers;
