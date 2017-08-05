import React, { PropTypes } from 'react';
import Person from './Person';
import './PeopleDropDown.css';

function PeopleDropDown(props) {

	const {people, handleClick} = props;

	return (
		<ul className="PeopleDropDown">
			{people.map(person =>
				<Person
					key={person.id}
					person={person}
					handleClick={handleClick}
				/>
			)}
		</ul>
	);
}

PeopleDropDown.propTypes = {
	people: PropTypes.array.isRequired,
	handleClick: PropTypes.func.isRequired,
};


export default PeopleDropDown;
