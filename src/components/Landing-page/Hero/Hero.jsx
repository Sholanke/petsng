import React, { useState } from "react";
import Button from "../../common/Button/Button";
import { usePostsContext } from "../../contexts/PostsContext";

export default function Hero() {
  const {
    posts: { posts },
  } = usePostsContext();

  const [searchValue, setSearchValue] = useState();

  return (
    posts?.length > 0 && (
      <div className="wrapper hero_section">
        <div className="max_width">
          <div className="heading_container">
            <h1>#ENDSARSNOW</h1>
            <p className="faint">
              <strong>End SARS</strong> is a decentralised social movement and
              series of mass <strong>protests</strong> against police brutality
              <strong> in Nigeria</strong>.
            </p>
          </div>

          <div className="big_search_bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={({ currentTarget: { value: searchValue } }) =>
                setSearchValue(searchValue)
              }
              spellCheck={false}
            />
            <Button>Search</Button>
          </div>
        </div>
      </div>
    )
  );
}
