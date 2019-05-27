import React from "react";
import "normalize.css/normalize.css";
import "../utils/defaults.css";
import TopNav from "../containers/TopNav";
import FindPersonForm from "../containers/FindPersonForm";
import PersonCardWrapper from "../containers/PersonCardWrapper";
import FindPersonFormAndResultsWrapper from "./FindPersonFormAndResultsWrapper";
// import SignInModal from "../containers/SignInModal";
import "./App.css";

const App = () => (
  <div className="App">
    <TopNav />
    <FindPersonFormAndResultsWrapper>
      <FindPersonForm />
      <PersonCardWrapper />
    </FindPersonFormAndResultsWrapper>
  </div>
);

export default App;
