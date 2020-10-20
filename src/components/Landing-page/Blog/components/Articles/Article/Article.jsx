import React from "react";

export default function Article() {
  return (
    <div className="blog_article active">
      <div className="image_holder"></div>
      <div className="text_holder">
        <div className="article_header">
          <div className="tag">34 Reads</div>
          <p className="time faint">4 mins</p>
        </div>
        <p className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.
        </p>
      </div>
    </div>
  );
}
