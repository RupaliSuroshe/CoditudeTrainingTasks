import React from "react";
import { Link } from "react-router-dom";
import { usePrefetch as useUserPrefetch } from "../Pages/User/userAPI";
import { usePrefetch as useArtistPrefetch } from "../Pages/Artist/artistApi";
import { usePrefetch as useAlbumPrefetch } from "../Pages/Album/albumAPI";

const Navbar = () => {
  const UserPrefetch = useUserPrefetch("getUsers");
  const ArtistPrefetch = useArtistPrefetch("getArtists");
  const AlbumPrefetch = useAlbumPrefetch("getAlbums");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <div className="navbar-nav ">
            <Link
              className="nav-link d-flex align-items-center me-4 btn btn-sm btn-outline-secondary"
              to="/"
              style={{ margin: "0 30px" }}
              onMouseEnter={() => UserPrefetch()}
            >
              <img
                src="Images/user.png"
                alt="user_icon"
                className="nav-icon me-2"
              />
              <strong>User</strong>
            </Link>
            <Link
              className="nav-link d-flex align-items-center me-4  btn btn-sm btn-outline-secondary"
              to="/artist"
              style={{ margin: "0 30px" }}
              onMouseEnter={() => ArtistPrefetch()}
            >
              <img
                src="Images/artist.png"
                alt="artist_icon"
                className="nav-icon me-2"
              />
              <strong>Artist</strong>
            </Link>
            <Link
              className="nav-link d-flex align-items-center me-4 btn btn-sm btn-outline-secondary"
              to="/album"
              style={{ margin: "0 30px" }}
              onMouseEnter={() => AlbumPrefetch()}
            >
              <img
                src="Images/album.png"
                alt="album_icon"
                className="nav-icon me-2"
              />
              <strong>Album</strong>
            </Link>
            <Link
              className="nav-link d-flex align-items-center me-4 btn btn-sm btn-outline-secondary"
              to="/albumrating"
              style={{ margin: "0 30px" }}
              onMouseEnter={() => AlbumPrefetch()}
            >
              <img
                src="Images/albumRating.png"
                alt="album_rating_icon"
                className="nav-icon me-2"
              />
              <strong>Album Rating</strong>
            </Link>
            <Link
              className="nav-link d-flex align-items-center me-4 btn btn-sm btn-outline-secondary"
              to="/userrating"
              style={{ margin: "0 30px" }}
              onMouseEnter={() => AlbumPrefetch()}
            >
              <img src="Images/a.png" alt="a_icon" className="nav-icon me-2" />
              <strong>User Rating</strong>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
