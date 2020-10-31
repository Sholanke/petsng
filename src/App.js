import React from "react";
import "./css/app.css";
import PostsContextProvider from "./components/contexts/PostsContext";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <PostsContextProvider>
        <Routes />
      </PostsContextProvider>
    </div>
  );
}

export default App;
