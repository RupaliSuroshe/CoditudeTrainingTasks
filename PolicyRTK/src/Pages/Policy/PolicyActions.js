
export const fetchedPolicies = (allPolicies) => {
    return { type: "FETCHED_POLICIES", payload: allPolicies };
  };
  
  export const setPolicies = (policies) => {
    return {
      type: "SET_POLICIES",
      payload: policies,
    };
  };
  
  export const editPolicy = (updatedPolicy) => {
    return {
      type: "EDIT_POLICY",
      payload: updatedPolicy,
    };
  };
  
  export const deletePolicy = (policyId) => {
    return {
      type: "DELETE_POLICY",
      payload: policyId,
    };
  };