const initialState = {
  policies: [],
};

const policyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_POLICIES":
      return { ...state, policies: action.payload };

    case "SET_POLICIES":
      return { ...state, policies: [...state.policies, action.payload] };

    case "EDIT_POLICY": 
      const updatedPolicy = state.policies.map((policy) =>
        policy.id === action.payload.id ? action.payload : policy
      );
      return {
        ...state,
        policies: updatedPolicy,
      };

    case "DELETE_POLICY": 
      return {
        ...state,
        policies: state.policies.filter(
          (policy) => policy.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default policyReducer;
