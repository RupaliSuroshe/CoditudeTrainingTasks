import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
 
const userAdpter = createEntityAdapter();
const initialState = {
  ...userAdpter.getInitialState(),
  isUserFulfilled: false,
  isUserRejected: false,
  isUserPending: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("data is set");
      userAdpter.setAll(state, action.payload);
    },
    addUserRecord: (state, action) => {
      console.log("data is added");
      userAdpter.addOne(state, action.payload);
    },
    editUser: (state, action) => {
      console.log("data is edit");
      userAdpter.updateOne(state, action.payload);
    },
    removeUser: (state, action) => {
      console.log("data is remove");
      userAdpter.removeOne(state, action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder

      // Set User Data
      .addMatcher(
        userApi.endpoints.getUsers.matchFulfilled,
        (state, action) => {
          console.log('getUsers matchFulfilled........');

          userSlice.caseReducers.setUser(state, action);
          state.isUserFulfilled = true;
        }
      )
      .addMatcher(userApi.endpoints.getUsers.matchRejected, (state) => {
        state.isUserRejected = true;
      })
      .addMatcher(userApi.endpoints.getUsers.matchPending, (state) => {
        state.isUserPending = true;
      }) 
      
      // Add User Data
      .addMatcher(userApi.endpoints.addUser.matchFulfilled, (state, action) => {
        console.log('addUser matchFulfilled........');
        userSlice.caseReducers.addUserRecord(state, action);
        state.isUserFulfilled = true;
      })
      .addMatcher(userApi.endpoints.addUser.matchRejected, (state) => {
        state.isUserRejected = true;
      })
      .addMatcher(userApi.endpoints.addUser.matchPending, (state) => {
        state.isUserPending = true;
      })

      // Update User Data
      .addMatcher(
        userApi.endpoints.updateUser.matchFulfilled,
        (state, action) => {
          console.log('updateUser matchFulfilled........');

          userSlice.caseReducers.editUser(state, action);
          state.isUserFulfilled = true;
        }
      )
      .addMatcher(
        userApi.endpoints.updateUser.matchRejected,
        (state) => {
          state.isUserRejected = true;
        }
      )
      .addMatcher(
        userApi.endpoints.updateUser.matchPending,
        (state) => {
          state.isUserPending = true;
        }
      )

      // Delete User Data
      .addMatcher(
        userApi.endpoints.deleteUserById.matchFulfilled,
        (state, action) => {
          console.log('deleteUserById matchFulfilled........');

          userSlice.caseReducers.removeUser(state, action);
          state.isUserFulfilled = true;
        }
      )
      .addMatcher(
        userApi.endpoints.deleteUserById.matchRejected,
        (state) => {
          state.isUserRejected = true;
        }
      )
      .addMatcher(
        userApi.endpoints.deleteUserById.matchPending,
        (state) => {
          state.isUserPending = true;
        }
      );
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = userAdpter.getSelectors((state) => state.userSlice);

export const { setUser, addUserRecord, editUser, removeUser } =
  userSlice.actions;

export default userSlice.reducer;