import React from "react";
import svgIllustration from "../../../../common/assets/svg/emptyIllustration.svg";
import { usePostsContext } from "../../../../contexts/PostsContext";

export default function EmptyState() {
  const {
    posts: { searchValue },
  } = usePostsContext();
  return (
    <div className="wrapper">
      <div className="max_width no_posts">
        <span className="illustration_rapper">
          <img src={svgIllustration} alt="" srcSet="" />
        </span>
        <h5>
          {searchValue
            ? `No posts on "${searchValue}" for now`
            : "No posts for now"}
        </h5>
        <p>
          {searchValue
            ? ` Looks like there are no posts on "${searchValue}" for now, in the mean time you can send
            us a message.`
            : ` Looks like there are no posts for now, in the mean time you can send
            us a message.`}
        </p>
      </div>
    </div>
  );
}
