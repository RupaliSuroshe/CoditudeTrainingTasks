// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./rootReducer";
// import createsagaMiddleware from "redux-saga"
// import rootSaga from "./rootSaga";

// const sagaMiddleware= createsagaMiddleware()

// const store = createStore(rootReducer,
// applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(rootSaga);
// export default store;

// -------------------------------------------------------------------------------------------------------------

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
// import { userapi } from "../Pages/User/userAPI";
import userSlice from "../Pages/User/userSlice";
import artistSlice from "../Pages/Artist/artistSlice";
import albumSlice from '../Pages/Album/albumSlice';
const store = configureStore({
  reducer: {
    users: userSlice,
    artists: artistSlice,
    albums: albumSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
