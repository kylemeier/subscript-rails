const initialState = { type: "Off", message: "Starting State" };

const on = (action): On => ({
  type: "On",
  message: action.message,
  extra: "hello"
});

const off = (action): Off => ({ type: "Off", message: action.message });

interface On {
  type: "On";
  message: string;
  extra: string;
}

interface Off {
  type: "Off";
  message: string;
}

type State = On | Off;

const ToggleHandler = (state = initialState, action): State => {
  switch (state.type) {
    case "Off":
      return on(action);
    case "On":
      return off(action);
    // default:
    // return state;
  }
};

const stateMachineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Toggle":
      return ToggleHandler(state, action);
    default:
      return state;
  }
};

const Toggle = message => ({
  type: "Toggle",
  message
});

export { stateMachineReducer, Toggle };

// import { Automata, automataReducer } from "redux-automata";

// const automata = new Automata("Counter");

// // define states
// const Off = automata.state("Off", () => ({ message: "Switched Off" }));
// const On = automata.state("On", () => ({ message: "Switched On" }));

// // define actions
// const Toggle = automata.action("Toggle");

// // configure state machine
// automata
//   .in(Off)
//   .on(Toggle)
//   .goTo(On);

// automata
//   .in(On)
//   .on(Toggle)
//   .goTo(Off);

// automata.beginWith(Off);

// const stateMachineReducer = automataReducer(automata);
// export { stateMachineReducer, Toggle };
