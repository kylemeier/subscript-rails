import React from "react";
import { connect } from "react-redux";
import { selectPerson } from "../people/actions";
import "./Person.css";
import PersonImage from "./PersonImage";

class Person extends React.Component {
  handleClick = () => {
    this.props.dispatch(selectPerson(this.props.person));
  };

  render() {
    const { name, profile_path } = this.props.person;

    return (
      // onMouseDown rather than onClick to ensure it emits
      // before anything that would remove this element (like onBlur)
      <button className="Person" onMouseDown={this.handleClick}>
        <PersonImage imagePath={profile_path} />
        <h1 className="Person-name">{name}</h1>
      </button>
    );
  }
}

export default connect()(Person);
