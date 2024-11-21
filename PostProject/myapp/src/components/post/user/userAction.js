export const fetchedUsers = (allUsers) => {
   
    return { type: "FETCHED_USERS", payload: allUsers };
  };
  
  export const addUser = (user) => {
    return { type: "ADD_USER", payload: user };
  };
  
  export const updateUser = (user) => {
    return {
      type: "EDIT_USER",
      payload: user,
    };
  };
  
  export const removeUser = (user) => {
    return {
      type: "REMOVE_USER",
      payload: user,
    };
  };