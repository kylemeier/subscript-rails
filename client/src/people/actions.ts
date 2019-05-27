import { CALL_API } from "redux-api-middleware";
import { Person } from "./sharedTypes";

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

export function getPeople(query: string) {
  return {
    [CALL_API]: {
      endpoint: `https://api.themoviedb.org/3/search/person?api_key=a3122208a7cf285fa705e6970ef28dbe&language=en-US&query=${query}&page=1&include_adult=false`,
      method: "GET",
      types: ["PEOPLE_REQUEST", "PEOPLE_SUCCESS", "PEOPLE_FAILURE"]
    }
  };
}

export type Action =
  | GenericAction
  | PeopleDeactivate
  | PeopleActivate
  | PersonSelectAction;
