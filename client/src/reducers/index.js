import { combineReducers } from 'redux';
import movies from './movies';
import people from '../ducks/people';

const reducers = combineReducers({
	movies,
	people
});

export default reducers;