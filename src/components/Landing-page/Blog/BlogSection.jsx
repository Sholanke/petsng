import React from "react";
import ArticleContent from "./components/ArticleContent/ArticleContent";
import Articles from "./components/Articles/Articles";
import { usePostsContext } from "../../contexts/PostsContext";
import EmptyState from "./components/BlogEmptyState";

export default function BlogSection() {
  const {
    posts: { posts },
  } = usePostsContext();
  return (
    <>
      {posts?.length > 0 ? (
        <div className="wrapper blog_section">
          <div className="max_width">
            <div>
              <ArticleContent />
            </div>
            <div>
              <h3 className="__article_col__heading">Related articles</h3>
              <Articles />
            </div>
          </div>
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
}
