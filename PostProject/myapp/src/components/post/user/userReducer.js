const initialState = {
    users: [],
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCHED_USERS":
        return { ...state, users: action.payload };
  
      case "ADD_USER":
        return { ...state, users: [...state.users, action.payload] };
  
      case "EDIT_USER":
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        };
  
      case "REMOVE_USER":
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };