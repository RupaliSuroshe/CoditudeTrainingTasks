import {combineReducers} from "redux";
import userReducer from "../Pages/User/UserReducer";
import albumReducer from "../Pages/Album/albumReducer";
import artistReducer from "../Pages/Artist/ArtistReducer";
import ratingReducer from "../Pages/Album-Rating/RatingReducer";
import userratingReducer from "../Pages/User-Rating/userRatingReducer";

const rootReducer= combineReducers ({
    userStore:  userReducer,
    artistStore: artistReducer,
    albumStore: albumReducer,
    ratingStore: ratingReducer,
    userratingStore: userratingReducer,
});

export default rootReducer;