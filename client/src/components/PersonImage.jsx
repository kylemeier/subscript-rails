import React from "react";
import "./PersonImage.css";

function PersonImage(props) {
  const { imagePath, size } = props;

  const backgroundImageWidth = size > 45 ? 185 : 45; //these two numbers are the two widths allowed by the API

  const imgStyle = {
    width: size + "px",
    height: size + "px",
    backgroundImage:
      'url("https://image.tmdb.org/t/p/w' +
      backgroundImageWidth +
      "/" +
      imagePath +
      '")'
  };

  const iconStyle = {
    fontSize: size + "px"
  };

  let el;

  if (imagePath) {
    el = <img className="PersonImage" style={imgStyle} role="presentation" />;
  } else {
    el = (
      <i className="PersonImage material-icons" style={iconStyle}>
        person
      </i>
    );
  }

  return el;
}

// PersonImage.propTypes = {
// 	imagePath: PropTypes.string,
// 	size: PropTypes.string
// };

PersonImage.defaultProps = {
  size: "45"
};

export default PersonImage;
