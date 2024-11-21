import { combineReducers } from "redux";
import { userReducer } from "../components/post/user/userReducer";
import { postReducer } from "../components/post/post/postReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});

export default rootReducer;