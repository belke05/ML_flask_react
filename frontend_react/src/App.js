import React, { useState } from "react";

import "./styles/App.css";
import SalaryPage from "./pages/SalaryPage";
import Navigator from "./components/Navigator";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Navigator />
      <div className="App">
        <Switch>
          <Route exact path="/" component={SalaryPage} />
          <Route exact path="/salarypage" component={SalaryPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
