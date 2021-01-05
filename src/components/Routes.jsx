import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";
import LandingPage from "./Landing-page";
import AllArticles from "./AllArticles/AllArticles";

export default function Routes() {
  return (
    <HashRouter>
      <Route path="/" exact>
        <Redirect to="/articles" />
      </Route>
      <Route path="/articles" exact component={AllArticles} />
      <Route path="/articles/:uuid" exact component={LandingPage} />
    </HashRouter>
  );
}
