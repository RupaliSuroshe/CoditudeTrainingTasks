import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClaimPolicies, updateOnClaimPolicy } from "../../Services/Service";
import {
  editClaimPolicy,
  fetchedClaimPolicies,
} from "../ClaimPolicies/ClaimAction";

const SettlementTable = () => {
  const dispatch = useDispatch();
  const claimPolicyData = useSelector(
    (state) => state.claimStore?.claimpolicies
  );

  const handleApprove = (claimId) => {
    updateOnClaimPolicy({
      id: claimId,
      status: "Aprove",
    })
      .then((res) => dispatch(editClaimPolicy(res.data)))
      .catch((err) => console.log(err));
  };

  const handleReject = (claimId) => {
    updateOnClaimPolicy({
      id: claimId,
      status: "Reject",
    })
      .then((res) => dispatch(editClaimPolicy(res.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getClaimPolicies()
      .then((res) => {
        dispatch(fetchedClaimPolicies(res.data));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      <div className="row mt-5">
        <h1 text-center mt-5 style={{ fontSize: '2rem' }} > Policy ClaimSettlement</h1>
        <div className="col-md-12">
          <table className="table table-striped mt-5 table table-bordered border-black">
            <thead>
              <tr>
                <th className="border-2 border-black">Sr.No.</th>
                <th className="border-2 border-black">User's Name</th>
                <th className="border-2 border-black">Policy Name</th>
                <th className="border-2 border-black">Premium</th>
                <th className="border-2 border-black">Max Limit</th>
                <th className="border-2 border-black">Req Amount</th>
                <th className="border-2 border-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {claimPolicyData
                ?.filter((policy) => policy.status === "claim")
                .map((claimStore, index) => {
                  const requiredAmount = claimStore.claimAmount;
                  return (
                    <tr key={claimStore.id}>
                      <td>{index + 1}</td>
                      <td>{claimStore.userName}</td>
                      <td>{claimStore.policyName}</td>
                      <td>{claimStore.amount}</td>
                      <td>{claimStore.limitClaim}</td>
                      <td>{requiredAmount}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          style={{ marginRight: "10px" }}
                          onClick={() => handleApprove(claimStore.id)}
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleReject(claimStore.id)}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center mt-5">Approved CLAIMS</h2>
        <table className="table table-striped mt-5 table table-bordered border-black">
          <thead>
            <tr>
              <th className="border-2 border-black">Policy Name</th>
              <th className="border-2 border-black">User Name</th>
            </tr>
          </thead>
          <tbody>
            {claimPolicyData
              .filter((policy) => policy.status === "Aprove")
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.policyName}</td>
                  <td>{item.userName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="container">
        <h2 className="text-center mt-5">Rejected CLAIMS</h2>
        <table className="table table-striped mt-5 table table-bordered border-black">
          <thead>
            <tr>
              <th className="border-2 border-black">Policy Name</th>
              <th className="border-2 border-black">User Name</th>
            </tr>
          </thead>
          <tbody>
            {claimPolicyData
              .filter((policy) => policy.status === "Reject")
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.policyName}</td>
                  <td>{item.userName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SettlementTable;
