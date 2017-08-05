import requestMovies from './requestMovies';
import receiveMovies from './receiveMovies';

export default function fetchMovies(personID) {
	return (dispatch) => {

		dispatch(requestMovies(personID));

		return fetch(`https://api.themoviedb.org/3/person/${personID}/movie_credits?api_key=a3122208a7cf285fa705e6970ef28dbe&language=en-US&include_adult=false`)
			.then(response => response.json())
			.then(json => dispatch(receiveMovies(personID, json)))
			.catch(e => console.error(e));
	};
}