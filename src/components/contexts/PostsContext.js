import React, { createContext, useContext, useEffect, useReducer } from "react";
import { getContentfulEntries } from "../contentful";
import { postDispatchTypes, postsReducer } from "./PostsReducer";

const PostsContext = createContext();

export default function PostsContextProvider({ children }) {
  const [posts, dispatch] = useReducer(postsReducer, {
    searchValue: "",
    posts: [],
    filteredPosts: [],
  });

  useEffect(() => {
    //make api call for posts
    getContentfulEntries({
      content_type: "blogPosts",
    }).then((response) => {
      dispatch({
        type: postDispatchTypes.getPosts,
        payload: response.items,
      });
    });
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        dispatch,
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
