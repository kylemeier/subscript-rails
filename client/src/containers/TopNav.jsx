import React from 'react';
import { Link } from 'react-router';

import database from '../data/firebase';

import './TopNav.css';

class TopNav extends React.Component{

  componentDidMount(){
    console.log('mounted', database);
    database.ref('/').once('value', snap =>{
      console.log('here');
      console.log(snap.val());
    });
  }

  render(){
    return(
      <div className="TopNav">
        <ul className="TopNav-linkList">
          <li className="TopNav-linkList-item">
            <Link to="/">Subscript</Link>
          </li>
          <li className="TopNav-linkList-item">
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li className="TopNav-linkList-item">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default TopNav;