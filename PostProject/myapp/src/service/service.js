import http from "../http-common";

/* -------------------------------  USER API  ------------------------------- */

export const getUsers = () => {
  return http.get("/users");
};

export const getUser = (username, password) => {
  return http.get(`/users?username=${username}&password=${password}`);
};


export const addUserData = (user) => {
  return http.post("/users", user);
};

export const editUserById = (user) => {
  return http.patch(`/users/${user.id}`, { name: user.name });
};

export const deleteUserByID = (id) => {
  return http.delete(`/users/${id}`);
};

/* -------------------------------  POST API  ------------------------------- */

export const getPosts = () => {
  return http.get("/posts");
};

export const addPostData = (post) => {
  return http.post("/posts", post);
};

export const editPostById = (post) => {
  return http.patch(`/posts/${post.id}`, post);
};

export const deletePostByID = (id) => {
  return http.delete(`/posts/${id}`);
};