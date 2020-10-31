import React, { createContext, useContext, useState, useEffect } from "react";
import { getContentfulEntries } from "../contentful";

const PostsContext = createContext();

export default function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //make api call for posts
    getContentfulEntries({
      content_type: "blogPosts",
    }).then((response) => {
      setPosts(response.items);
    });
    
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts: {
          posts,
          setPosts,
        },
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { usePostsContext };