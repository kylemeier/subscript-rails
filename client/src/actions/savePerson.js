// import * as ACTIONS from '../constants/ACTIONS_PEOPLE';
// import database from '../data/firebase';

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

// export default savePerson;