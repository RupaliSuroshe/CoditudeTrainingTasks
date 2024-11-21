import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { postApi } from "./postApi";

export const postAdpater = createEntityAdapter();

const initialState = {
  ...postAdpater.getInitialState(),
  isPostFulfilled: false,
  isPostRejected: false,
  isPostPending: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost: (state, action) => {
      console.log("data is set");
      postAdpater.setAll(state, action.payload);
    },
    addPostRecord: (state, action) => {
      // console.log(JSON.stringify(state.entities));
      console.log("data is added", action);
      postAdpater.addOne(state, action.payload);
    },
    editPost: (state, action) => {
      console.log("data is edit");
      postAdpater.updateOne(state, action.payload);
    },
    removePost: (state, action) => {
      console.log("data is remove",action);
      postAdpater.removeOne(state, action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder

      // Set Post Data
      .addMatcher(postApi.endpoints.getPost.matchFulfilled, (state, action) => {
        console.log("getPost matchFulfilled........");
        postSlice.caseReducers.setPost(state, action);
        state.isPostFulfilled = true;
       })
      .addMatcher(postApi.endpoints.getPost.matchRejected, (state) => {
        state.isPostRejected = true;
      })
      .addMatcher(postApi.endpoints.getPost.matchPending, (state) => {
        state.isPostPending = true;
      })

      // Add Post Data
      .addMatcher(postApi.endpoints.addPost.matchFulfilled, (state, action) => {
        console.log("addPost matchFulfilled........");
        postSlice.caseReducers.addPostRecord(state, action);
        state.isPostFulfilled = true;
      })
      .addMatcher(postApi.endpoints.addPost.matchRejected, (state) => {
        state.isPostRejected = true;
      })
      .addMatcher(postApi.endpoints.addPost.matchPending, (state) => {
        state.isPostPending = true;
      })

      // Update User Data
      .addMatcher(
        postApi.endpoints.updatePost.matchFulfilled,
        (state, action) => {
          console.log("updatePost matchFulfilled........");

          postSlice.caseReducers.editPost(state, action);
          state.isPostFulfilled = true;
        }
      )
      .addMatcher(postApi.endpoints.updatePost.matchRejected, (state) => {
        state.isPostRejected = true;
      })
      .addMatcher(postApi.endpoints.updatePost.matchPending, (state) => {
        state.isPostPending = true;
      })

      // Delete User Data
      .addMatcher(
        postApi.endpoints.deletePostById.matchFulfilled,
        (state, action) => {
          console.log("deletePostById matchFulfilled........");

          postSlice.caseReducers.removePost(state, action);
          state.isPostFulfilled = true;
        }
      )
      .addMatcher(postApi.endpoints.deletePostById.matchRejected, (state) => {
        state.isPostRejected = true;
      })
      .addMatcher(postApi.endpoints.deletePostById.matchPending, (state) => {
        state.isPostPending = true;
      });
  },
});

export const {
  selectAll: selectAllPost,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postAdpater.getSelectors((state) => state.postSlice);

export const { setPost, addPostRecord, editPost, removePost } =
  postSlice.actions;

export default postSlice.reducer;
