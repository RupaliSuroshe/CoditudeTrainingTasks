export const fetchedPosts = (allUsers) => {
  return { type: "FETCHED_POSTS", payload: allUsers };
};

export const addPost = (post) => {
  return { type: "ADD_POST", payload: post };
};

export const updatePost = (post) => {
  return {
    type: "EDIT_POST",
    payload: post,
  };
};

export const removePost = (post) => {
  return {
    type: "REMOVE_POST",
    payload: post,
  };
};
