import React from "react";
import { useSelector } from "react-redux";

export const PolicyTable = ({ handleOnEdit, handleOnDelete }) => {
  const policyData = useSelector((state) => state.policyStore.policies);
  return (
    <div className="row" style={{ marginTop: "0px", paddingTop: "0px" }}>
      <div className="col-md-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Policy Name</th>
              <th>Amount</th>
              <th>Max Limit of Claim</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {policyData.map((policy, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{policy.policyName}</td>
                <td>{policy.amount}</td>
                <td>{policy.limitClaim}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleOnEdit(policy)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleOnDelete(policy.id)}
                  >
                    Delete
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
