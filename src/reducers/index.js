const INITIAL_STATE = {
  posts: [],
  postsTemplate: [],
  message: "",
  recentPosts: [],
  currentPosts: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        postsTemplate: action.payload,
      };

    case "GET_POSTS_ERROR":
      return {
        ...state,
        message: action.payload,
      };

    case "RECENT_TWO_POSTS":
      return {
        ...state,
        recentPosts: action.payload.slice(
          action.payload.length - 2,
          action.payload.length
        ),
      };

    case "RECENT_TWO_POSTS_ERROR":
      return {
        ...state,
        message: action.payload,
      };

    case "CURRENT_POST":
      return {
        ...state,
        posts: state.postsTemplate.filter(post => post.title.includes(action.payload))
      };

    default:
      return state;
  }
};
