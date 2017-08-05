import moment from 'moment';
import { RECEIVE_MOVIES } from '../constants/ACTIONS_MOVIES';

function receiveMovies(query, json) {

	return {
		query,
		type: RECEIVE_MOVIES,
		movies: getCurrentlyPlayingMovies(json.cast.concat(json.crew)),
		receivedAt: Date.now()
	};
}

function getCurrentlyPlayingMovies(movies) {
	return combineDuplicates(movies).filter(IsReleasedRecently);
}

function IsReleasedRecently(movie) {
	const currentDate = moment();
	const cutoffDate = currentDate.clone().subtract(3, 'months');
	const releaseDate = moment(movie.release_date);
	return cutoffDate.isSameOrBefore(releaseDate) && releaseDate.isSameOrBefore(currentDate);
}

function combineDuplicates(movies) {

	return movies.reduce((result, movie) => {

		let existingMovieIndex = result.findIndex(item => item.id === movie.id);

		if (existingMovieIndex === -1) existingMovieIndex = result.push(movie) - 1;

		result[existingMovieIndex] = combineCharacterAndJobValues(
			result[existingMovieIndex],
			movie,
		);

		return result;
	}, []);
}

//adds a role property which is a string combining all characters/jobs
function combineCharacterAndJobValues(currentObj, newObj) {

	const clone = Object.assign({ role: '' }, currentObj);
	const roleToAdd = newObj.character || newObj.job;

	if (clone.role.length && roleToAdd) clone.role += '/';

	clone.role += roleToAdd || '';

	delete clone.character;
	delete clone.job;
	if (!clone.role.length) delete clone.role;
	return clone;
}

export default receiveMovies;