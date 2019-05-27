import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { connect } from "react-redux";

import PersonCard from "../components/PersonCard";
import "./PersonCardWrapper.css";

class PersonCardWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(id) {
    console.log("handle save does nothing right now", id);
    // this.props.dispatch(savePerson(id));
  }

  render() {
    const { movies, selectedPerson } = this.props;
    //use an array to allow cards to switch out rather than replace the contents
    //of one card
    const selectedPersonIDArray = selectedPerson ? [selectedPerson.id] : [];

    const cards = selectedPersonIDArray.map(id => (
      <PersonCard
        key={id}
        person={selectedPerson}
        movies={movies}
        handleSave={this.handleSave}
      />
    ));

    return (
      <div className="PersonCardWrapper">
        <ReactCSSTransitionGroup
          transitionName="PersonCard-slideUp"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
        >
          {cards}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = ({ movies, people }) => {
  return {
    movies: movies.items,
    selectedPerson: people.selectedPerson
  };
};

export default connect(mapStateToProps)(PersonCardWrapper);
