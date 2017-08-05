import React from 'react';

import './FindPersonFormAndResultsWrapper.css';

function FindPersonFormAndResultsWrapper(props){

  return(
    <div className="FindPersonFormAndResultsWrapper">
      {props.children}
    </div>
  )
}

export default FindPersonFormAndResultsWrapper;