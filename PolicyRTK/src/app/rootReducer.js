import { combineReducers } from "redux";
import userReducer from "../Pages/UserPage/UserReducer";
import policyReducer from "../Pages/Policy/PolicyReducer";
import ClaimpolicyReducer from "../Pages/ClaimPolicies/claimReducer";

const rootReducer = combineReducers({
    userStore: userReducer,
    policyStore: policyReducer,
    claimStore: ClaimpolicyReducer,
});

export default rootReducer;
