import * as React from "react";
import { connect } from "react-redux";
import { Toggle } from "../statemachine/test";

interface Props {
  state: any;
  dispatch: any;
}

class StateMachineTest extends React.Component<Props> {
  render() {
    const { state, dispatch } = this.props;
    switch (state.type) {
      case "Off":
        return (
          <div>
            {state.message}
            <button onClick={() => dispatch(Toggle("Switched On"))}>
              toggle
            </button>
          </div>
        );
      case "On":
        return (
          <div>
            {state.message}
            {state.extra}
            <button onClick={() => dispatch(Toggle("Switched Off"))}>
              toggle
            </button>
          </div>
        );
    }
  }
}

const mapStateToProps = ({ stateMachineReducer }: any) => {
  return {
    state: stateMachineReducer
  };
};

export default connect(mapStateToProps)(StateMachineTest);
