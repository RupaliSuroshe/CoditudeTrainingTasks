const initialState = {
  claimpolicies: [],
};

const ClaimpolicyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_CLAIMPOLICIES":
      return { ...state, claimpolicies: action.payload };

    case "ADD_CLAIMPOLICY":
      return { ...state, claimpolicies: [...state.claimpolicies, action.payload] };

    case "UPDATE_CLAIMPOLICY":
      return {
        ...state,
        claimpolicies: state.claimpolicies.map((policy) =>
          policy.id === action.payload.id ? action.payload : policy
        ),
      };

    case "REMOVE_CLAIMPOLICY":
      return {
        ...state,
        claimpolicies: state.claimpolicies.filter((policy) => policy.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default ClaimpolicyReducer;
