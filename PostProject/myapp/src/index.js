import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PostRouter } from "./postRouter";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PostRouter></PostRouter>
      <>
      
      </>
    </Provider>
  </React.StrictMode>
);