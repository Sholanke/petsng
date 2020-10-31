import React from "react";
import Article from "./Article/Article";
import { usePostsContext } from "../../../../contexts/PostsContext";

export default function Articles() {
  const {
    posts: { posts },
  } = usePostsContext();

  return (
    <div>
      {posts?.map((post, index) => (
        <Article key={index} {...post.fields} />
      ))}
    </div>
  );
}
