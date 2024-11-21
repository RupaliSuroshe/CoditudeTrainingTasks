import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "../components/post/user/userSlice";
import postSlice from "../components/post/post/postSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    userSlice: userSlice,
    postSlice: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
