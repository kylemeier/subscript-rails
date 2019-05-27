import { Person } from "./sharedTypes";
import { Action } from "./actions";

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

export const waitingState = (): Waiting => ({
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

export const waiting = (state: Waiting, action: Action) => {
  switch (action.type) {
    case "PEOPLE_REQUEST":
      return loadingState();
    default:
      return state;
  }
};

export const loading = (state: Loading, action: Action) => {
  switch (action.type) {
    case "PEOPLE_SUCCESS":
      const people = action.payload.results;
      return readyState(people);
    default:
      return state;
  }
};

export const ready = (state: Ready, action: Action) => {
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

export const inactive = (state: Inactive, action: Action) => {
  switch (action.type) {
    case "PEOPLE_ACTIVATE":
      return readyState(state.people);
    default:
      return state;
  }
};

export const personSelected = (state: PersonSelected, action: Action) => {
  return state;
};
