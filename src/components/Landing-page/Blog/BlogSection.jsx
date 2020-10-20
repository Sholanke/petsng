import React from "react";
import ArticleContent from "./components/ArticleContent/ArticleContent";
import Articles from "./components/Articles/Articles";

export default function BlogSection() {
  return (
    <div className="wrapper blog_section">
      <div className="max_width">
        <div>
          <ArticleContent />
        </div>
        <div>
          <Articles />
        </div>
      </div>
    </div>
  );
}
