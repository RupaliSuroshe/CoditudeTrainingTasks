import React, { useState } from "react";
import { UserFrom } from "./userForm";
import { UserList } from "./userList";
import {
  useAddUserMutation,
  useDeleteUserByIdMutation,
  useUpdateUserMutation,
} from "./userApi";

import { nanoid } from "@reduxjs/toolkit";

export const UserEnroll = () => {

  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUserById] = useDeleteUserByIdMutation();

  const [userInput, setUserInput] = useState({ id: "", name: "" });
  const [isEdit, setIsEdit] = useState(false);

  const handleOnAdd = async () => {
    if (!userInput.name.trim()) {
      alert("Please Enter The Name....");
      return;
    }

    await addUser({ id: nanoid(), name: userInput.name });

    setUserInput({ id: "", name: "" });
  };

  const handleOnEdit = (user) => {
    setUserInput(user);
    setIsEdit(true);
  };

  const handleOnUpdate = async () => {
    await updateUser(userInput);

    setUserInput({ id: "", name: "" });
    setIsEdit(false);
  };

  const handleOnDelete = async (id) => {
    await deleteUserById(id);
  };
  return (
    <div className="container mx-auto my-3">
      <h1 className="text-4xl font-bold text-center my-2">Enroll User</h1>
      <div className="border border-3 border-primary rounded-xl shadow-xl">
        {/* This is an input form of users */}

        <UserFrom
          handleOnAdd={handleOnAdd}
          userInput={userInput}
          isEdit={isEdit}
          handleOnUpdate={handleOnUpdate}
          setUserInput={setUserInput}
        />
      </div>

      {/* This is an table view of users */}
      <div className="my-3 ">
        <UserList handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} />
      </div>
    </div>
  );
};
