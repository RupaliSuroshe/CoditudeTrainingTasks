import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PolicyForm from "./PolicyForm";
import { PolicyTable } from "./PolicyTable";
import {
  addPolicy,
  getPolicies,
  removePolicy,
  updatePolicy,
} from "../../Services/Service";
import {
  deletePolicy,
  editPolicy,
  fetchedPolicies,
  setPolicies,
} from "./PolicyActions";
const Policy = () => {
  
  const [policyDetails, setPolicyDetails] = useState({
    id: "",
    policyName: "",
    amount: "",
    limitClaim: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const policyData = useSelector((state) => state.policyStore.policies);
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    const { amount, limitClaim } = policyDetails;
    if(parseInt(amount) > parseInt(limitClaim)) {
      alert("Amount exceeds the maximum limit.");
      return;
    }
    addPolicy({
      id: String(policyData.length + 1),
      policyName: policyDetails.policyName,
      amount: policyDetails.amount,
      limitClaim: policyDetails.limitClaim
    })
      .then((res) => {
        dispatch(setPolicies(res.data));
      })
      .catch((err) => console.log(err));
  };
  

  const handleOnEdit = (policy) => {
    setPolicyDetails(policy);
    setIsEdit(true);
  };

  const handleOnUpdate = () => {
    const { amount, limitClaim } = policyDetails;
    if(parseInt(amount) > parseInt(limitClaim)) {
      alert("Amount exceeds the maximum limit.");
      return;
    }
    updatePolicy(policyDetails)
      .then((res) => {
        dispatch(editPolicy(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleOnDelete = (id) => {
    removePolicy(id).then((res) => {
      dispatch(deletePolicy(id));
    });
  };

  useEffect(() => {
    getPolicies()
      .then((res) => {
        dispatch(fetchedPolicies(res.data));
      })
      .catch((res) => console.log(res));
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <PolicyForm
            handleOnAdd={handleOnAdd}
            handleOnUpdate={handleOnUpdate}
            isEdit={isEdit}
            policyDetails={policyDetails}
            setPolicyDetails={setPolicyDetails}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <PolicyTable
            policyData={policyData}
            handleOnEdit={handleOnEdit}
            handleOnDelete={handleOnDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Policy;
