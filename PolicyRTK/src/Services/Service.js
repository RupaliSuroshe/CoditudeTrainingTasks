import http from "../http-common";

export const getUsers = () =>{
    return http.get("/users")
}

export const addUsers = (user) =>
{
     return http.post('/users',user)
}

export const updateUsers = (user) =>
{
     return http.put(`/users/${user.id}`,user);
}

export const removeUsers = (id) =>
{
     return http.delete(`/users/${id}`);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const getPolicies = () => {
     return http.get("/policies");
 }
 
 export const addPolicy = (policyName) => {
     return http.post('/policies', policyName);
 }
 
 export const updatePolicy = (updatedPolicy) => {
     return http.put(`/policies/${updatedPolicy.id}`, updatedPolicy);
 }
 
 export const removePolicy = (id) => {
     return http.delete(`/policies/${id}`);
 }
 

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 export const getClaimPolicies = () => {
    return http.get("/claimPolicy");
  };

  export const addClaimPolicy = (claimPolicyData) => {
    return http.post("/claimPolicy", claimPolicyData);
  };

  export const updateOnClaimPolicy = (updatedClaim) => {
    console.log(updatedClaim);
    return http.patch(`/claimPolicy/${updatedClaim.id}`, updatedClaim);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getClaimSettlement = (claimPolicyData) => {
    return http.get("/claimsettlement",claimPolicyData );
  };