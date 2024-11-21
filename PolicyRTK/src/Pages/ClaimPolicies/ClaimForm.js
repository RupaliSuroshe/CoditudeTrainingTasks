// ClaimForm.js
import React from "react";

const ClaimForm = ({ handleUserData, userData, handlePolicyData, policyData, handleOnAdd }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-5" style={{ fontSize: '2rem' }}>Claim Policies</h2>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <select className="form-select mb-3" onChange={handleUserData}>
                <option value="">Select User</option>
                {userData.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.userName}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <select
                className="form-select mb-3"
                onChange={handlePolicyData}
              >
                <option value="">Select Policy</option>
                {policyData.map((policy) => (
                  <option key={policy.id} value={policy.id}>
                    {policy.policyName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button" 
              className="btn btn-primary"
              onClick={handleOnAdd} 
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
