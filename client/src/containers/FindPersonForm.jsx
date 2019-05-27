import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import {
  getPeople,
  selectPerson,
  deactivate,
  activate
} from "../people/actions";
import fetchMovies from "../actions/fetchMovies";
import PeopleDropDown from "../components/PeopleDropDown";
import "./FindPersonForm.css";
import "../utils/layout.css";

class FindPersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePersonSelected = this.handlePersonSelected.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.fetchPeopleFromInput = this.fetchPeopleFromInput.bind(this);
    this.prevInputValue = "";

    //auto show a card
    // setTimeout(() => {
    // 	this.props.dispatch(selectPerson({
    // 		id: 1032, //30614 gosling 1032 scorsese
    // 		known_for: [],
    // 		name: "Martin Scorsese",
    // 		profile_path: "/7ayyfofgSRB9kVV004EocFBC4zC.jpg"
    // 	}));
    // }, 100);
  }

  componentWillReceiveProps(nextProps) {
    // const nextSelectedPersonID = nextProps.selectedPerson
    //   ? nextProps.selectedPerson.id
    //   : null;
    // const currentSelectedPersonID = this.props.selectedPerson
    //   ? this.props.selectedPerson.id
    //   : null;
    // if (this.props.stateType === "person-selected") {
    // this.props.dispatch(fetchMovies(nextProps.selectedPerson.id));
    // }
  }

  handleInputFocus() {
    this.props.dispatch(activate());
  }

  handleInputBlur() {
    this.props.dispatch(deactivate());
  }

  handleSubmit(e, id) {
    e.preventDefault();
    this.fetchPeopleFromInput();
  }

  handlePersonSelected(e, person) {
    this.props.dispatch(selectPerson(person));
  }

  fetchPeopleFromInput() {
    const newInputValue = this.input.value.trim();

    if (!newInputValue || this.prevInputValue === newInputValue) return;

    this.props.dispatch(getPeople(newInputValue));
    this.prevInputValue = newInputValue;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="FindPersonForm">
        <div className="FindPersonForm-inputContainer">
          <div className="FindPersonForm-inputDropDownContainer">
            <input
              className="FindPersonForm-input"
              placeholder="Enter a movie cast/crew member..."
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
              onKeyDown={debounce(this.fetchPeopleFromInput, 500, {
                maxWait: 1000
              })}
              autoFocus
              ref={node => {
                this.input = node;
              }}
            />
            <PeopleDropDown />
          </div>
          <button className="FindPersonForm-btn" type="submit">
            <i className="material-icons flex">search</i>
          </button>
        </div>
      </form>
    );
  }
}

export default connect()(FindPersonForm);
