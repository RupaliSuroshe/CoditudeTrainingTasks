// UserAction.js

export const fetchedUsers = (allUsers) => {
  return { type: "FETCHED_USERS", payload: allUsers };
};

export const setUsers = (users) => {
    console.log(users);
  return {
    type: "SET_USERS",
    payload: users,
  };
};

export const editUsers = (users) => {
  return {
    type: "EDIT_USERS",
    payload: users,
  };
};

export const deleteUsers = (users) => {
    return {
      type: "DELETE_USERS",
      payload: users,
    };
  };
  