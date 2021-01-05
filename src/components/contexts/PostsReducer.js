import { filterPostsArray } from "../../utils/Posts";

const postDispatchTypes = {
  getPosts: "GET_POSTS",
  search: "SEARCH",
};



function postsReducer(state, action) {
  switch (action.type) {

    case postDispatchTypes.getPosts:
      return { ...state, posts: [...action.payload] };
   
      case postDispatchTypes.search:
      return {
        ...state,
        searchValue: action.payload,
        filteredPosts: action.payload
          ? filterPostsArray(action.payload, state.posts, [
              "title",
              "description",
              "body",
            ])
          : [],
      };
    default:
      return state;
  }
}

export default postsReducer;
export { postDispatchTypes, postsReducer };
