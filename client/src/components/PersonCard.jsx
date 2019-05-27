import React from "react";
import MovieList from "./MovieList";
import PersonImage from "../components/PersonImage";
import "./PersonCard.css";

function PersonCard(props) {
  const { movies, person, handleSave } = props;

  function handleSaveBtnClick() {
    handleSave(person.id);
  }

  return (
    <div className="PersonCard">
      <button onClick={handleSaveBtnClick}>save</button>
      <PersonImage imagePath={person.profile_path} size="100" />
      <p className="PersonCard-name">{person.name}</p>
      <MovieList movies={movies} title="Recently Released" />
    </div>
  );
}

// PersonCard.propTypes = {
//   movies: PropTypes.array.isRequired,
//   person: PropTypes.object.isRequired,
//   handleSave: PropTypes.func.isRequired
// };

PersonCard.defaultProps = {
  movies: [],
  person: {}
};

export default PersonCard;
