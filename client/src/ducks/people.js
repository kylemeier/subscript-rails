import { CALL_API } from 'redux-api-middleware';

const PEOPLE_REQUEST = 'PEOPLE_REQUEST';
const PEOPLE_SUCCESS = 'PEOPLE_SUCCESS';
const PEOPLE_FAILURE = 'PEOPLE_FAILURE';
const PEOPLE_SELECT = 'PEOPLE_SELECT';
const SAVE_PERSON_REQUEST = 'SAVE_PERSON_REQUEST';
const SAVE_PERSON_SUCCESS = 'SAVE_PERSON_SUCCESS';
const SAVE_PERSON_FAILURE = 'SAVE_PERSON_FAILURE';

export default function(
	state = {
		isFetching: false,
		didInvalidate: false,
		items: [],
		selectedPerson: {}
	}, action = {}){

	switch(action.type){
		case PEOPLE_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case PEOPLE_SUCCESS:
      const people = action.payload.results;
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: people,
				selectedPerson: people.length === 1? people[0] : {},
				// lastUpdated: action.receivedAt
			});
		case PEOPLE_SELECT:
			return Object.assign({}, state, {
				selectedPerson: action.person
			});
		default:
			return state;
	}
}

export function getPeople(query) {
	return {
		[CALL_API]: {
			endpoint: `https://api.themoviedb.org/3/search/person?api_key=a3122208a7cf285fa705e6970ef28dbe&language=en-US&query=${query}&page=1&include_adult=false`,
			method: 'GET',
			types: ['PEOPLE_REQUEST', 'PEOPLE_SUCCESS', 'PEOPLE_FAILURE']
		}
	}
}
