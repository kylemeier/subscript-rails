import React, {PropTypes} from 'react';

import PosterImage from './PosterImage';

import './Movie.css';

function Movie(props){
	const {title, poster, role} = props;

	return(
		<div className="Movie">
			<PosterImage poster={poster} />
			<div className="Movie-titleAndRoleWrapper">
				<h1 className="Movie-title">{title}</h1>
				<h2 className="Movie-role" >Role: {role}</h2>
			</div>
			<a className="Movie-showtimeLink" href={"http://www.google.com/search?q="+title+"%20showtimes"} target="_blank">Showtimes</a>
		</div>
	);
}

Movie.propTypes = {
	title: PropTypes.string,
	poster: PropTypes.string,
	role: PropTypes.string,
};

Movie.defaultProps = {
	role: 'Unknown'
};

export default Movie;