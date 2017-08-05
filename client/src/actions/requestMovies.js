import {REQUEST_MOVIES} from '../constants/ACTIONS_MOVIES';

export default function(query) {
	return {
		query,
		type: REQUEST_MOVIES,
	}
}