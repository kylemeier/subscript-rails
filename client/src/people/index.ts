import {
  waitingState,
  State,
  waiting,
  loading,
  ready,
  inactive,
  personSelected
} from "./states";
import { Action } from "./actions";

// import database from '../data/firebase';

export default function(state: State = waitingState(), action: Action): State {
  switch (state.type) {
    case "waiting":
      return waiting(state, action);
    case "loading":
      return loading(state, action);
    case "ready":
      return ready(state, action);
    case "inactive":
      return inactive(state, action);
    case "person-selected":
      return personSelected(state, action);
    default:
      return state;
  }
}

// function savePerson (id) {
//   return dispatch =>{
//     dispatch(savePersonRequested());

//     const ref = database.ref('/');

//     ref
//       .push({id})
//       .then( ()=>{
//         dispatch(savePersonFulfilled())
//       })
//       .catch( error=>{
//         dispatch(savePersonRejected(error))
//       });
//   }
// }

// function savePersonRequested(){
//   return {
//     type: ACTIONS.SAVE_PERSON_REQUESTED
//   }
// }

// function savePersonRejected(error){
//   return {
//     type: ACTIONS.SAVE_PERSON_REJECTED,
//     error
//   }
// }

// function savePersonFulfilled(){
//   return {
//     type: ACTIONS.SAVE_PERSON_FULFILLED
//   }
// }
