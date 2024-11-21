// ClaimPolicies.js
import React, { useEffect, useState } from "react";
import ClaimTable from "./ClaimTable";
import ClaimForm from "./ClaimForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addClaimPolicy,
  getClaimPolicies,
  getPolicies,
  getUsers,
  updateOnClaimPolicy,
} from "../../Services/Service";
import { fetchedUsers } from "../UserPage/UserAction";
import { fetchedPolicies } from "../Policy/PolicyActions";
import {
  addClaimPolicyaction,
  editClaimPolicy,
  fetchedClaimPolicies,
} from "./ClaimAction";

const ClaimPolicies = () => {
  const userData = useSelector((state) => state.userStore.users);
  const policyData = useSelector((state) => state.policyStore.policies);
  const claimPolicyData = useSelector(
    (state) => state.claimStore.claimpolicies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers()
      .then((res) => {
        dispatch(fetchedUsers(res.data));
      })
      .catch((err) => console.log(err));

    getPolicies()
      .then((res) => {
        dispatch(fetchedPolicies(res.data));
      })
      .catch((err) => console.log(err));

    getClaimPolicies()
      .then((res) => {
        dispatch(fetchedClaimPolicies(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const [claimPolicyDetails, setClaimPolicyDetails] = useState({
    userId: "",
    policyId: "",
  });

  const [claimAmountDetails, setClaimAmountDetails] = useState(null);

  const handleUserData = (e) => {
    setClaimPolicyDetails({
      ...claimPolicyDetails,
      userId: e.target.value,
    });
  };

  const handleAmountData = (e) => {
    setClaimAmountDetails({
      ...claimAmountDetails,
      setAmount: e.target.value,
    });
  };

  const handlePolicyData = (e) => {
    setClaimPolicyDetails({
      ...claimPolicyDetails,
      policyId: e.target.value,
    });
  };

  const handleOnAdd = () => {
    if (
      !claimPolicyDetails.userId.trim() ||
      !claimPolicyDetails.policyId.trim()
    ) {
      alert("Please select both a User and a Policy.");
      return;
    }

    const selectedUser = userData.find(
      (user) => user.id === claimPolicyDetails.userId
    );
    const selectedPolicy = policyData.find(
      (policy) => policy.id === claimPolicyDetails.policyId
    );

    const newClaimPolicy = {
      id: String(claimPolicyData.length + 1),
      userName: selectedUser.userName,
      policyName: selectedPolicy.policyName,
      amount: selectedPolicy.amount,
      limitClaim: selectedPolicy.limitClaim,
      claimAmount: "",
      status: "pending",
    };

    addClaimPolicy(newClaimPolicy)
      .then((res) => dispatch(addClaimPolicyaction(res.data)))
      .catch((err) => console.log(err));
  };

  const handleClaim = (id, newClaimAmount, limitClaim) => {
    console.log(claimAmountDetails);
    if(parseInt(newClaimAmount) > parseInt(limitClaim)){
      alert("limit exceeds")
      return;
    }
    updateOnClaimPolicy({
      id: id,
      claimAmount: newClaimAmount,
      status: "claim",
    })
      .then((res) => dispatch(editClaimPolicy(res.data)))
      .catch((err) => console.log(err));

    console.log(id, newClaimAmount);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <ClaimForm
            userData={userData}
            policyData={policyData}
            claimPolicyDetails={claimPolicyDetails}
            handleUserData={handleUserData}
            handlePolicyData={handlePolicyData}
            handleOnAdd={handleOnAdd}
            handleAmountData={handleAmountData}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <ClaimTable
            claimPolicyData={claimPolicyData}
            handleClaim={handleClaim}
            claimAmountDetails={claimAmountDetails}
            setClaimAmountDetails={setClaimAmountDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimPolicies;
