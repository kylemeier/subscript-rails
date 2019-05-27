import React from "react";
import Movie from "../components/Movie";

import "./MovieList.css";

function MovieList(props) {
  const { movies, title } = props;

  let moviesToShow;

  if (movies.length) {
    moviesToShow = (
      <ul>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            role={movie.role}
            poster={movie.poster_path}
          />
        ))}
      </ul>
    );
  } else {
    moviesToShow = <p>None found.</p>;
  }

  return (
    <div className="MovieList">
      <p>{title}</p>
      {moviesToShow}
    </div>
  );
}

// MovieList.propTypes = {
// 	movies: PropTypes.array,
// 	title: PropTypes.string.isRequired
// };

export default MovieList;
