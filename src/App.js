import React, { useState, useEffect } from "react";
import "./css/app.css";
import LandingPage from "./components/Landing-page/index";
import { API_SPACE_ID, API_TOKEN } from "./env";
import * as Contentful from "contentful";

const client = Contentful.createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN,
});

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "Blog Posts",
      })
      .then((response) => {
        setEntries(response.items);
      });
  }, []);

  useEffect(() => {
    console.log(entries);
  }, [entries]);
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
