import receiveMovies from './receiveMovies';
import { RECEIVE_MOVIES } from '../constants/ACTIONS_MOVIES';
import moment from 'moment';

const data = {
	cast: [],
	crew: []
};

it('only returns movies released in the last three months from cast property', () => {

	const recentDate = moment();
	recentDate.subtract(3, 'months').add(1, 'day');

	const recent = {
		id: 'recent',
		release_date: recentDate.format('YYYY-MM-DD'),
	};

	const old = {
		id: 'old',
		release_date: '1970-01-01',
	};


	data.cast = [recent, old];

	const actualResult = receiveMovies('query', data);

	const expectedResult = {
		query: 'query',
		type: RECEIVE_MOVIES,
		movies: [recent],
		receivedAt: actualResult.receivedAt
	};

	expect(actualResult).toEqual(expectedResult);
});

it('returns movies from both cast and crew properties', () => {

	const date = moment();

	const cast = {
		id: 'cast',
		release_date: date.format('YYYY-MM-DD'),
	};

	const crew = {
		id: 'crew',
		release_date: date.format('YYYY-MM-DD'),
	};

	data.cast = [cast];
	data.crew = [crew];

	const actualResult = receiveMovies('query', data);

	const expectedResult = {
		query: 'query',
		type: RECEIVE_MOVIES,
		movies: [cast, crew],
		receivedAt: actualResult.receivedAt
	};

	expect(actualResult).toEqual(expectedResult);
});

it('combines duplicate movies into a single movie', () => {

	const date = moment();
	const formattedDate = date.format('YYYY-MM-DD');

	const director = {
		id: 1,
		job: 'Director',
		release_date: formattedDate
	};

	const writer = {
		id: 1,
		job: 'Writer',
		release_date: formattedDate
	};

	const mainDude = {
		id: 1,
		character: 'Main Dude',
		release_date: formattedDate
	};

	const alterEgo = {
		id: 1,
		character: 'Alter ego',
		release_date: formattedDate
	};

	data.crew = [director, writer];
	data.cast = [mainDude, alterEgo];

	const actualResult = receiveMovies('query', data);

	const expectedMovie = {
		id: 1,
		role: 'Main Dude/Alter ego/Director/Writer',
		release_date: formattedDate
	};

	const expectedResult = {
		query: 'query',
		type: RECEIVE_MOVIES,
		movies: [expectedMovie],
		receivedAt: actualResult.receivedAt
	};

	expect(actualResult).toEqual(expectedResult);
});