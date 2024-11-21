import React from "react";

const PolicyForm = ({
  handleOnAdd,
  handleOnUpdate,
  isEdit,
  policyDetails,
  setPolicyDetails
}) => {
  return (
    <div className="container">
      <h2 className="text-center mt-5" style={{ fontSize: '2rem' }}>Policy</h2>
      <div className="row justify-content-center">
      <div className="col-md-12">
      <div className="mb-3 mt-5 text-center">
            <label className="form-label text-center">
              <strong>Policy Name</strong>
            </label>
            <input
              type="text"
              className="form-control border border-black mx-auto text-center"
              placeholder="Enter Policy Name"
              value={policyDetails.policyName}
              onChange={(e) => setPolicyDetails({...policyDetails, policyName : e.target.value})}  
              style={{ width: '60%' }}
            />
          </div>
          <div className="mb-3 mt-5 text-center">
            <label className="form-label text-center">
              <strong>Amount</strong>
            </label>
            <input
              type="text"
              className="form-control border border-black mx-auto text-center"
              placeholder="Enter Amount"
              value={policyDetails.amount}
              onChange={(e) =>setPolicyDetails({...policyDetails, amount : e.target.value})} 
              style={{ width: '60%' }}
            />
          </div>
          <div className="mb-3 mt-5 text-center">
            <label className="form-label text-center">
              <strong>Max Limit of Claim</strong>
            </label>
            <input
              type="text"
               className="form-control border border-black mx-auto text-center"
              placeholder="Enter max claim amount"
              value={policyDetails.limitClaim}
              onChange={(e) =>setPolicyDetails({...policyDetails, limitClaim : e.target.value}) } 
              style={{ width: '60%' }}
            />
          </div>
          <div className="text-center">
            {isEdit ? (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={()=>{
                  handleOnUpdate(policyDetails[policyDetails.id], policyDetails.limitClaim)
                }}
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={()=>{
                  handleOnAdd(policyDetails[policyDetails.id], policyDetails.limitClaim)
                }}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyForm;

