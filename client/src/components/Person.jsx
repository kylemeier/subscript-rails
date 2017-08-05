import React, { PropTypes } from 'react';
import './Person.css';
import PersonImage from './PersonImage';

class Person extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.handleClick(e, this.props.person);
	}

	render() {
		const {name, profile_path} = this.props.person;

		return (
			// onMouseDown rather than onClick to ensure it emits 
			// before anything that would remove this element (like onBlur)
			<button className="Person" onMouseDown={this.handleClick}>
				<PersonImage imagePath={profile_path} />
				<h1 className="Person-name">{name}</h1>
			</button>
		);
	}
};

Person.propTypes = {
	person: PropTypes.object.isRequired
};

export default Person;