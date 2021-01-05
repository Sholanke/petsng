import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function Article({
  description,
  publishDate,
  title,
  slug,
  coverImage: {
    fields: {
      file: { url },
    },
  },
}) {
  return (
    <NavLink to={`/articles/${slug}`} className="blog_article active">
      <div
        className="image_holder"
        style={{ backgroundImage: `url(https:${url})` }}
      ></div>
      <div className="text_holder">
        <div className="article_header">
          <div className="tag">34 Reads</div>
          <p className="time faint">
            {moment(publishDate, "YYYYMMDD").fromNow()}
          </p>
        </div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
    </NavLink>
  );
}
