import React from "react";
import Articles from "../Landing-page/Blog/components/Articles/Articles";
import Header from "../Landing-page/Header/Header";
import Hero from "../Landing-page/Hero/Hero";
import { usePostsContext } from "../contexts/PostsContext";
import BlogEmptyState from "../Landing-page/Blog/components/BlogEmptyState";
import Footer from "../Landing-page/Footer/Footer";

export default function AllArticles() {
  const {
    posts: { posts, searchValue, filteredPosts },
  } = usePostsContext();
  return (
    <div>
      <Header />
      <Hero />
      {(searchValue ? filteredPosts : posts)?.length > 0 ? (
        <div className="wrapper">
          <div className="max_width articles_grid_container">
            <h3 className="__title">All Articles</h3>
            <Articles />
          </div>
        </div>
      ) : (
        <BlogEmptyState />
      )}
      <Footer />
    </div>
  );
}
