import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import Album from './Pages/Album/Album';
import AlbumRating from './Pages/Album-Rating/Album_Rating';
import UserRating from './Pages/User-Rating/User_Rating';
import Artist from './Pages/Artist/Atrist';
import { ArtistForm } from "./Pages/Artist/ArtistForm";
import { ArtistTable } from "./Pages/Artist/ArtistTable";
import { Provider } from 'react-redux';
import store from "./app/store";
import { UserForm } from "./Pages/User/UserForm";
import { UserTable } from "./Pages/User/UserTable";
import User from "./Pages/User/User";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<User/>} />
            <Route path="/usertable" element={<UserTable />} />
            <Route path="/userform" element={<UserForm/>} />
            <Route path="/artist"  element={<Artist/>} />
            <Route path="/artistform"  element={<ArtistForm/>} />
            <Route path="/artisttable"  element={<ArtistTable/>} />
            <Route path="/album" element={<Album />} />
            <Route path="/albumrating" element={<AlbumRating />} />
            <Route path="/userrating" element={<UserRating />} />
            <Route path="*" element={<><h1 className='text-2xl text-center font-bold my-5'>404 Page Not Found...</h1></>}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;