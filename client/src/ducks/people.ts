import { CALL_API } from "redux-api-middleware";
// import database from '../data/firebase';

interface Person {
  id: number;
}

interface Waiting {
  type: "waiting";
}

interface Loading {
  type: "loading";
}

interface Ready {
  type: "ready";
  people: Person[];
}

interface Inactive {
  type: "inactive";
  people: Person[];
}

interface PersonSelected {
  type: "person-selected";
  people: Person[];
  selectedPerson: Person;
}

const waitingState = (): Waiting => ({
  type: "waiting"
});

const loadingState = (): Loading => ({
  type: "loading"
});

const readyState = (people: Person[]): Ready => ({
  type: "ready",
  people
});

const inactiveState = (people: Person[]): Inactive => ({
  type: "inactive",
  people
});

const personSelectedState = (
  people: Person[],
  selectedPerson: Person
): PersonSelected => ({
  type: "person-selected",
  people,
  selectedPerson
});

export type State = Waiting | Loading | Ready | Inactive | PersonSelected;

type ActionType =
  | "PEOPLE_REQUEST"
  | "PEOPLE_SUCCESS"
  | "PEOPLE_FAILURE"
  | "SAVE_PERSON_REQUEST"
  | "SAVE_PERSON_SUCCESS"
  | "SAVE_PERSON_FAILURE";

interface GenericAction {
  type: ActionType;
  payload: {
    results: Person[];
  };
}

interface PeopleDeactivate {
  type: "PEOPLE_DEACTIVATE";
}

interface PeopleActivate {
  type: "PEOPLE_ACTIVATE";
}

interface PersonSelectAction {
  type: "PEOPLE_SELECT";
  person: Person;
}

export function deactivate(): PeopleDeactivate {
  return {
    type: "PEOPLE_DEACTIVATE"
  };
}

export function activate(): PeopleActivate {
  return {
    type: "PEOPLE_ACTIVATE"
  };
}

export function selectPerson(person: Person): PersonSelectAction {
  return {
    type: "PEOPLE_SELECT",
    person
  };
}

type Action =
  | GenericAction
  | PeopleDeactivate
  | PeopleActivate
  | PersonSelectAction;

const waiting = (state: Waiting, action: Action) => {
  switch (action.type) {
    case "PEOPLE_REQUEST":
      return loadingState();
    default:
      return state;
  }
};

const loading = (state: Loading, action: Action) => {
  switch (action.type) {
    case "PEOPLE_SUCCESS":
      const people = action.payload.results;
      return readyState(people);
    default:
      return state;
  }
};

const ready = (state: Ready, action: Action) => {
  switch (action.type) {
    case "PEOPLE_REQUEST":
      return loadingState();
    case "PEOPLE_DEACTIVATE":
      return inactiveState(state.people);
    case "PEOPLE_SELECT":
      return personSelectedState(state.people, action.person);
    default:
      return state;
  }
};

const inactive = (state: Inactive, action: Action) => {
  switch (action.type) {
    case "PEOPLE_ACTIVATE":
      return readyState(state.people);
    default:
      return state;
  }
};

const personSelected = (state: PersonSelected, action: Action) => {
  return state;
};

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

export function getPeople(query: string) {
  return {
    [CALL_API]: {
      endpoint: `https://api.themoviedb.org/3/search/person?api_key=a3122208a7cf285fa705e6970ef28dbe&language=en-US&query=${query}&page=1&include_adult=false`,
      method: "GET",
      types: ["PEOPLE_REQUEST", "PEOPLE_SUCCESS", "PEOPLE_FAILURE"]
    }
  };
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
