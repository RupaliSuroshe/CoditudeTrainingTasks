import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { userapi } from "./UserAPI";


const usersAdapter = createEntityAdapter({});

const initialState = {
  ...usersAdapter.getInitialState(),
  isUserFulfilled: false,
  isUserRejected: false,
  isUserPending: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log("data is set...");
      usersAdapter.setAll(state, action.payload);
    },
    addUserData: (state, action) => {
      console.log("data is add...");
      usersAdapter.addOne(state, action.payload);
    },
    updateuserData: (state, action) => {
      console.log("data is update...");
      usersAdapter.upsertOne(state, action.payload);
    },
    deleteUserData: (state, action) => {
      console.log("data is delete...");
      usersAdapter.removeOne(state, action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder
    .addMatcher(
      userapi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        usersSlice.caseReducers.setUserData(state, action);
        console.log(state, action);
        state.isUserFulfilled = true;
      })

      .addMatcher(userapi.endpoints.getUsers.matchPending, (state, action) => {
        state.isUserPending = true;
      })

      .addMatcher(userapi.endpoints.getUsers.matchRejected, (state, action) => {
        state.isUserRejected = true;
      })

      //AddUser

      .addMatcher(
        userapi.endpoints.addUser.matchFulfilled,
        (state, action) => {
          usersSlice.caseReducers.addUserData(state, action);
          console.log(state, action);
          state.isUserFulfilled = true;
        })
  
        .addMatcher(userapi.endpoints.addUser.matchPending, (state, action) => {
          state.isUserPending = true;
        })
  
        .addMatcher(userapi.endpoints.addUser.matchRejected, (state, action) => {
          state.isUserRejected = true;
        })

        //updateUser

        .addMatcher(
          userapi.endpoints.updateUser.matchFulfilled,
          (state, action) => {
            usersSlice.caseReducers.updateuserData(state, action);
            console.log(state, action);
            state.isUserFulfilled = true;
          })
    
          .addMatcher(userapi.endpoints.updateUser.matchPending, (state, action) => {
            state.isUserPending = true;
          })
    
          .addMatcher(userapi.endpoints.updateUser.matchRejected, (state, action) => {
            state.isUserRejected = true;
          })

          //deleteUser

          .addMatcher(
            userapi.endpoints.deleteUserById.matchFulfilled,
            (state, action) => {
              usersSlice.caseReducers.deleteUserData(state, action);
              console.log(state, action);
              state.isUserFulfilled = true;
            })
      
            .addMatcher(userapi.endpoints.deleteUserById.matchPending, (state, action) => {
              state.isUserPending = true;
            })
      
            .addMatcher(userapi.endpoints.deleteUserById.matchRejected, (state, action) => {
              state.isUserRejected = true;
            });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => state.users);

export const { setUserData, addUserData, updateuserData, deleteUserData } =
  usersSlice.actions;

export default usersSlice.reducer;
