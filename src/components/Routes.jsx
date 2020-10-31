import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import LandingPage from "./Landing-page";

export default function Routes() {
  return (
    <HashRouter>
      <Route path="/" exact>
        <Redirect to="/articles/0" />
      </Route>
      <Route path="/articles" exact>
        <Redirect to="/articles/0" />
      </Route>
      <Route path="/articles/:uuid" exact component={LandingPage} />
      {/* <Route path="/articles" component={LandingPage} /> */}
    </HashRouter>
  );
}
