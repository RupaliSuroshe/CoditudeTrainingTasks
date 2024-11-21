import React, { useState } from "react";
import { useSelector } from "react-redux";

const ClaimTable = ({ handleClaim }) => {
  const claimPolicyData = useSelector(
    (state) => state.claimStore.claimpolicies
  );

  const [claimAmounts, setClaimAmounts] = useState({});

  const handleAmountChange = (id, value) => {
    setClaimAmounts({
      ...claimAmounts,
      [id]: value,
    });
  };

  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>User's Name</th>
              <th>Policy Name</th>
              <th>Premium</th>
              <th>Max Limit</th>
              <th>Req Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {claimPolicyData
              .filter((policy) => policy.status === "pending")
              .map((claimStore, index) => (
                <tr key={claimStore.id}>
                  <td>{index + 1}</td>
                  <td>{claimStore.userName}</td>
                  <td>{claimStore.policyName}</td>
                  <td>{claimStore.amount}</td>
                  <td>{claimStore.limitClaim}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={claimAmounts[claimStore.id] || ""}
                      onChange={(e) => {
                        handleAmountChange(claimStore.id, e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        handleClaim(
                          claimStore.id,
                          claimAmounts[claimStore.id],
                          claimStore.limitClaim
                        )
                      }
                    >
                      Claim
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClaimTable;
