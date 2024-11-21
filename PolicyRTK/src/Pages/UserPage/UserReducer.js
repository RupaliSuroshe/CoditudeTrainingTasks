const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_USERS":
      return { ...state, users: action.payload };

    case "SET_USERS":
       
    return { ...state, users: [...state.users, action.payload] };


    case "EDIT_USERS":
      console.log("EDIT_USERS", action.payload);
      return {
        ...state,
        users: state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
        ),
      };

      case "DELETE_USERS":
        return{
            ...state,
            users: state.users.filter(user => user.id !== action.payload)
        }

    default:
      return state;
  }
};

export default userReducer;
