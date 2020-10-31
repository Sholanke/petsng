import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePostsContext } from "../../../../contexts/PostsContext";
import moment from "moment";

export default function ArticleContent() {
  const { uuid: uuidParam } = useParams();
  const [uuid, setUuid] = useState();
  const {
    posts: { posts },
  } = usePostsContext();



  const [postContent, setPostContent] = useState();



  useEffect(() => {
    if (posts.length > 0)
      setUuid(() =>
        uuidParam !== "0" ? uuidParam : posts[posts.length - 1].fields.slug
      );
  }, [uuidParam, posts]);



  useEffect(() => {
    if (posts.length > 0) {
      const post = [...posts].filter((post) => post.fields.slug === uuid)[0];
      setPostContent(post?.fields);
    }
  }, [uuid, posts]);


  return (
    !!postContent && (
      <div className="blog_article_content">
        <div
          className="image_holder"
          style={{
            backgroundImage: `url(https:${postContent?.coverImage.fields.file.url})`,
          }}
        ></div>
        <div className="article_header">
          <div className="tag">34 Reads</div>
          <p className="time faint">
            {moment(postContent?.publishDate, "YYYYMMDD").fromNow()}
          </p>
        </div>
        <p className="article_title">
          {postContent?.title} : {postContent?.description}
        </p>
        <p className="article_writer">
          <span className="dp_rapper"></span>
          Sholanke Olamide
        </p>
        <br/>
        <p>{postContent.body}</p>
      </div>
    )
  );
}
