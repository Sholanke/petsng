import React, { useEffect } from "react";
import { HashRouter, Route, Redirect, useLocation } from "react-router-dom";
import LandingPage from "./Landing-page";
import AllArticles from "./AllArticles/AllArticles";

export default function Routes() {
  return (
    <HashRouter>
      <RoutesWrapper>
        <Route path="/" exact>
          <Redirect to="/articles" />
        </Route>
        <Route path="/articles" exact component={AllArticles} />
        <Route path="/articles/:uuid" exact component={LandingPage} />
      </RoutesWrapper>
    </HashRouter>
  );
}

function RoutesWrapper({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return children;
}
