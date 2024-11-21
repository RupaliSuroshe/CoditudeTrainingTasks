export const fetchedClaimPolicies = (allClaimPolicies) => {
  return { type: "FETCHED_CLAIMPOLICIES", payload: allClaimPolicies };
};

export const addClaimPolicyaction = (newClaimPolicy) => {
  return { type: "ADD_CLAIMPOLICY", payload: newClaimPolicy };
};

export const removeClaimPolicy = (claimPolicyId) => {
  return { type: "REMOVE_CLAIMPOLICY", payload: claimPolicyId };
};

export const updateClaimPolicy = (updatedClaimPolicy) => {
  return { type: "UPDATE_CLAIMPOLICY", payload: updatedClaimPolicy };
};

export const editClaimPolicy = (updatingClaimPolicy) => {
  return {
    type: "EDIT_CLAIMPOLICY", payload: updatingClaimPolicy,
  };
};
