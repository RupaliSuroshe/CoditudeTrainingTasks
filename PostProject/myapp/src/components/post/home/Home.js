import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PostCard } from "./PostCard";
import { selectAllPost } from "../post/postSlice";
import { useGetPostQuery, useUpdatePostMutation } from "../post/postApi";
import { getPosts } from "../../../service/service";

export const Home = () => {
  useGetPostQuery();
  const postData = useSelector(selectAllPost);
  const { isPostFulfilled, isPostPending, isPostRejected } = useSelector(
    (state) => state.postSlice
  );
  const [updatePost] = useUpdatePostMutation();

  const dispatch = useDispatch();

  const [likedPosts, setLikedPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [addComment, setAddComment] = useState({});

  var data = {};
  const sessionUser = JSON.parse(localStorage.getItem("userData"));
  data = sessionUser[0];

  const userLikedPosts = postData.filter((post) =>
    post.users.some((user) => user.id === data.id)
  );
  const likedPostIds = userLikedPosts.map((post) => post.id);

  useEffect(() => {
    getPosts()
      .then((res) => {
        setLikedPosts(likedPostIds);
      })
      .catch((err) => console.log(err));
  }, [likedPostIds, dispatch]);

  const toggleLike = async (postId) => {
    const likePost = postData.find((post) => post.id === postId);
    const isLiked = likePost.users.some((user) => user.id === data.id);

    if (isLiked) {
      // Unlike the post
      await updatePost({
        id: postId,
        totalLike: likePost.totalLike - 1,
        users: likePost.users.filter((user) => user.id !== data.id),
      });
      setLikedPosts((prevLikedPosts) =>
        prevLikedPosts.filter((id) => id !== postId)
      );
    } else {
      // Like the post
      await updatePost({
        id: postId,
        totalLike: likePost.totalLike + 1,
        users: [...likePost.users, { id: data.id, username: data.username }],
      });
      setLikedPosts((prevLikedPosts) => [...prevLikedPosts, postId]);
    }
  };

  // console.log(likedPosts);

  // This is For Toggle the Comment Section
  const toggleComments = (postId) => {
    setShowComments((prevShowComments) => ({
      ...prevShowComments,
      [postId]: !prevShowComments[postId],
    }));
  };

  const handleAddComment = async (id) => {
    const shallowCopy = postData.map((post) => ({ ...post }));

    const postIndex = shallowCopy.findIndex((post) => post.id === id);

    if (postIndex !== -1) {
      const commentData = shallowCopy[postIndex].comments
        ? [...shallowCopy[postIndex].comments]
        : [];

      commentData.push({ userName: data.username, text: addComment[id] });

      shallowCopy[postIndex] = {
        ...shallowCopy[postIndex],
        comments: commentData,
      };

      await updatePost({ id: id, comments: commentData });

      setAddComment({});
    } else {
      console.error(`Post with id ${id} not found`);
    }
  };

  return (
    <div className="row">
      {isPostFulfilled ? (
        <PostCard
          postData={postData}
          likedPosts={likedPosts}
          toggleLike={toggleLike}
          toggleComments={toggleComments}
          showComments={showComments}
          addComment={addComment}
          setAddComment={setAddComment}
          handleAddComment={handleAddComment}
        />
      ) : isPostPending ? (
        <div className="text-center mt-10">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
          <h2 className="text-xl font-bold text-red-900 dark:text-black mt-4">
            Error...
          </h2>
        </div>
      ) : isPostRejected ? (
        <div className="text-center mt-10">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 className="text-black-900 dark:text-white mt-4">Loading...</h2>
          <p className="text-black-600 dark:text-zinc-400">
            Wait, Loading Feed Deatils ...
          </p>
        </div>
      ) : null}
    </div>
  );
};
