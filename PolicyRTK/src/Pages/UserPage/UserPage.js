import React from "react";
import { UserForm } from "./UserForm";
import { UserTable } from "./UserTable";

import useCustomData from "../../useCustomData";

export const User = () => {
  const [userDetails, setUserDetails, isEdit, setIsEdit, userData, handleOnAdd, handleOnEdit, handleOnDelete, handleOnUpdate] = useCustomData();
  

  return (
    <div>
      <div className="container">
        <div className="col-md-12">
          <UserForm
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            handleOnAdd={handleOnAdd}
            isEdit={isEdit}
            setIsEdit= {setIsEdit}
            handleOnUpdate={handleOnUpdate}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <UserTable
            userData={userData}
            handleOnEdit={handleOnEdit}
            handleOnDelete={handleOnDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
