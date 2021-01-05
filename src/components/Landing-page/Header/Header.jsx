import React from "react";
import Button from "../../common/Button/Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="wrapper nav">
      <div className="max_width">
        <nav>
          <div className="_left">
            <p className="logo">PetsNg</p>
            <div className="links">
              <NavLink to="/" className="link">
                Blog
              </NavLink>
            </div>
          </div>

          <div className="_right">
            <Button>PetsNg</Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
