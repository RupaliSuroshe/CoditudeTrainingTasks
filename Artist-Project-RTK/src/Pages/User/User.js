import React, { useState } from "react";
import { UserForm } from "./UserForm";
import { UserTable } from "./UserTable";
import { useAddUserMutation, useDeleteUserByIdMutation,  useUpdateUserMutation } from "./userAPI";
import {  nanoid } from "@reduxjs/toolkit";

export const User = () => {
  const [userDetails, setUserDetails] = useState({ id: "", userName: "" });
  const [isEdit, setIsEdit] = useState(false);

  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUserById] = useDeleteUserByIdMutation();



  const handleOnAdd = async () => {
    try {
      await addUser({
        id: nanoid(),
        userName: userDetails.userName,
      });
      setUserDetails({ id: "", userName: "" });
      setIsEdit(false);

      
      
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  const handleOnEdit = (user) => {
    setUserDetails(user);
    setIsEdit(true);
  };

  const handleOnUpdate = async () => {
    try {
      await updateUser(userDetails);
      setUserDetails({ id: "", userName: "" });
      setIsEdit(false);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleOnDelete = async (id) => {
    try {
      console.log(id);
      await deleteUserById(id);
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="col-md-12">
          <UserForm
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            handleOnAdd={handleOnAdd}
            isEdit={isEdit}
            handleOnUpdate={handleOnUpdate}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <UserTable
            handleOnEdit={handleOnEdit}
            handleOnDelete={handleOnDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
