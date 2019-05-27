import React from "react";
import { connect } from "react-redux";
import Person from "./Person";
import "./PeopleDropDown.css";

class PeopleDropDown extends React.Component {
  render() {
    const { stateType, people } = this.props;
    switch (stateType) {
      case "ready":
        return (
          <ul className="PeopleDropDown">
            {people.map(person => (
              <Person key={person.id} person={person} />
            ))}
          </ul>
        );
      default:
        return null;
    }
  }
}

const mapStateToProps = ({ people }) => {
  return {
    stateType: people.type,
    people: people.people
  };
};

export default connect(mapStateToProps)(PeopleDropDown);
