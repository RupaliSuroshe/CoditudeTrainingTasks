const initialState = {
    claimSettlemet: [],
  };
  
  const ClaimSettlementReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCHED_CLAIMSETTLEMENTS":
        return { ...state, claimSettlemet: action.payload };
  
      case "ADD_CLAIMSETTLEMENT":
        return { ...state, claimSettlemet: [...state.claimSettlemet, action.payload] };
  
      case "UPDATE_CLAIMSETTLEMENT":
        return {
          ...state,
          claimSettlemet: state.claimSettlemet.map((policy) =>
            policy.id === action.payload.id ? action.payload : policy
          ),
        };
  
      case "REMOVE_CLAIMSETTLEMENT":
        return {
          ...state,
          claimSettlemet: state.claimSettlemet.filter((policy) => policy.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
  
  export default ClaimSettlementReducer;
  