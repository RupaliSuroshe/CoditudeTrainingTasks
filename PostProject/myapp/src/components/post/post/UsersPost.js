import React, { useState } from "react";
import { UserPostForm } from "./userPostForm";
import { UserPostList } from "./userPostList";
 
import {
  useAddPostMutation,
  useDeletePostByIdMutation,
  useUpdatePostMutation,
} from "./postApi";
import { nanoid } from "@reduxjs/toolkit";

export const UsersPost = () => {
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePostByID] = useDeletePostByIdMutation();

  var data = {};
  const sessionUser = JSON.parse(localStorage.getItem("userData"));
  data = sessionUser[0];

  const [postInput, setPostInput] = useState({
    id: "",
    description: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleOnAdd = async () => {
    if (!postInput.description.trim()) {
      alert("Please Enter The Description....");
      return;
    }

    await addPost({
      id: nanoid(),
      username: data.username,
      description: postInput.description,
      totalLike: 0,
      users: [],
      comments: [],
    });

    console.log("hello");

    setPostInput({
      id: "",
      description: "",
    });
  };

  const handleOnEdit = (post) => {
    setPostInput(post);
    setIsEdit(true);
  };

  const handleOnUpdate = async () => {
    await updatePost(postInput);

    setPostInput({
      id: "",
      description: "",
    });
    setIsEdit(false);
  };

  const handleOnDelete = async (id) => {
    await deletePostByID(id);
  };

  return (
    <div className="container mx-auto my-3">
      <h1 className="text-4xl font-bold text-center my-2">Post Details</h1>
      <div className="border border-3 border-primary rounded-xl shadow-xl">
        <UserPostForm
          username={data.username}
          postInput={postInput}
          setPostInput={setPostInput}
          handleOnAdd={handleOnAdd}
          isEdit={isEdit}
          handleOnUpdate={handleOnUpdate}
        />
      </div>

      {/* This is Post List */}
      <div className="my-3 ">
        <UserPostList
          username={data.username}
          handleOnEdit={handleOnEdit}
          handleOnDelete={handleOnDelete}
        />
      </div>
    </div>
  );
};
