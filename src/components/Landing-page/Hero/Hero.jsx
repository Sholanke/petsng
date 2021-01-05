import React from "react";
import Button from "../../common/Button/Button";
import { usePostsContext } from "../../contexts/PostsContext";
import sendIcon from "../../common/assets/svg/send.svg";
import { postDispatchTypes } from "../../contexts/PostsReducer";
export default function Hero() {
  const {
    posts: { posts, searchValue, filteredPosts },
    dispatch,
  } = usePostsContext();

  const handleSearch = ({ currentTarget: { value } }) =>
    dispatch({
      type: postDispatchTypes.search,
      payload: value,
    });

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
              onChange={handleSearch}
              spellCheck={false}
            />
            <Button>
              <span className="button_text">Search</span>
              <div className="mbl_i">
                <img src={sendIcon} alt="send icon" srcSet="" />
              </div>
            </Button>
          </div>

          {!!searchValue && (
            <p className="__results">
              Found {filteredPosts.length} results for "{searchValue}"
            </p>
          )}
        </div>
      </div>
    )
  );
}
