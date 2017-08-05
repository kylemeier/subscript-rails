import React from "react";
import { observer } from "mobx-react";

@observer
class MobxTest extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    this.props.store.updateText(e.target.value);
  }

  render() {
    const store = this.props.store;
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp} />
        <p>
          {store.text}
        </p>
      </div>
    );
  }
}

export default MobxTest;
