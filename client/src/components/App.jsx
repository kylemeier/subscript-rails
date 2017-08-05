import React from "react";
import "normalize.css/normalize.css";
import "../utils/defaults.css";
import TopNav from "../containers/TopNav";
import FindPersonForm from "../containers/FindPersonForm";
import PersonCardWrapper from "../containers/PersonCardWrapper";
import FindPersonFormAndResultsWrapper from "../components/FindPersonFormAndResultsWrapper";
import SignInModal from "../containers/SignInModal";
import MobxTest from "../components/MobxTest";
import mobxStore from "../mobx/store";
import "./App.css";

const App = () =>
  <div className="App">
    <TopNav />
    <MobxTest store={mobxStore} />
    <FindPersonFormAndResultsWrapper>
      <FindPersonForm />
      <PersonCardWrapper />
    </FindPersonFormAndResultsWrapper>
  </div>;

export default App;
