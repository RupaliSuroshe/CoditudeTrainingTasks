const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_POSTS":
      return { ...state, posts: action.payload };

    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };

    case "EDIT_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };

    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };

    default:
      return state;
  }
};
