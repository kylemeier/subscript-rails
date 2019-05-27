import React from "react";

import "./PosterImage.css";

function PosterImage(props) {
  const { poster } = props;
  let el;

  if (poster) {
    el = (
      <img
        className="PosterImage"
        src={"https://image.tmdb.org/t/p/w185/" + poster}
        alt="Poster"
      />
    );
  } else {
    el = <i className="PosterImage material-icons">movie</i>;
  }
  return el;
}

export default PosterImage;
