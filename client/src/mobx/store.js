import { observable, action } from "mobx";

class MobxStore {
  @observable text = "hi";

  @action
  updateText(newValue) {
    this.text = newValue;
  }
}

const mobxStore = new MobxStore();

export default mobxStore;
