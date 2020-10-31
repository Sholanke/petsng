import React from "react";
import svgIllustration from "../../../../common/assets/svg/emptyIllustration.svg";

export default function index() {
  return (
    <div className="wrapper">
      <div className="max_width no_posts">
        <span className="illustration_rapper">
          <img src={svgIllustration} alt="" srcset="" />
        </span>
        <h5>No posts for now</h5>
        <p>
          Looks like there are no posts for now, in the mean time you can send
          us a message.
        </p>
      </div>
    </div>
  );
}
