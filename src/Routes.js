import React from "react";
import { Switch, Route } from "react-router-dom";
import SpacePulseForms from "./pages/SpacePulseForms";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <SpacePulseForms />
      </Route>
    </Switch>
  );
};

export default Routes;
