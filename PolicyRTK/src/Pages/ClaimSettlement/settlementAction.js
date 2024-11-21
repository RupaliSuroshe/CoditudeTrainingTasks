export const approveClaim = (claimId) => {
  return { type: "APPROVE_CLAIM", payload: claimId };
};

export const rejectClaim = (claimId) => {
  return { type: "REJECT_CLAIM", payload: claimId };
};
