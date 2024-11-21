import { spawn } from "redux-saga/effects";
import userSaga from "../Pages/User/usersaga";
import artistSaga from "../Pages/Artist/artistsaga";
import albumSaga from "../Pages/Album/albumSaga";

function* rootSaga(){
    console.log('rootSaga Called...');
    yield spawn(userSaga);
    yield spawn(artistSaga);
    yield spawn(albumSaga);
}

export default rootSaga;