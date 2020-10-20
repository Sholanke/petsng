import React from "react";
import Button from "../../common/Button/Button";

export default function Hero() {
  return (
    <div className="wrapper hero_section">
      <div className="max_width">
        <div className="heading_container">
          <h1>#ENDSARSNOW</h1>
          <p className="faint">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur.
          </p>
        </div>
        <div className="big_search_bar">
          <input type="text" placeholder="Search..." spellCheck={false} />
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
}
