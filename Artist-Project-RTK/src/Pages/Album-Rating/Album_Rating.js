import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import useCustomHook from "../../useCustomHook";
import { useGetAlbumsQuery, useUpdateAlbumMutation } from "../Album/albumAPI";
import { useGetUsersQuery } from "../User/userAPI";
import { selectAllUsers } from "../User/userSlice";
import { selectAllAlbums, setAlbumData } from "../Album/albumSlice";

const AlbumRating = () => {
  const [selectedUser, setSelectedUser] = useState("Select Users");
  
  // const userData = useSelector((state) => state.userStore.users);
  // const albumData = useSelector((state) => state.albumStore.albums);

  // const { data: userDataFetched, loading: loadingUsers, error: errorUsers } = useCustomHook("/users");
  // const { data: albumDataFetched, loading: loadingAlbums, error: errorAlbums } = useCustomHook("/albums");
  // const dispatch = useDispatch();

  const {data: usersResponce} = useGetUsersQuery();
  console.log(usersResponce)
  const { data: albumResponce } = useGetAlbumsQuery();
  console.log(albumResponce);
  const [updateAlbum] = useUpdateAlbumMutation();

  const users = useSelector(selectAllUsers);
  const albums = useSelector(selectAllAlbums);

  const dispatch = useDispatch();



  useEffect(()=>{
    if(albumResponce){
    dispatch(setAlbumData(albumResponce));
    }
  }, [albumResponce], dispatch);
  

  const handleOnRating = (album, rate) => {
    const updatedAlbum = JSON.parse(JSON.stringify(album));

  const existingUserIndex = updatedAlbum.ratings.findIndex(
    (user) => user.userId === selectedUser
  );

  if (existingUserIndex !== -1) {
    updatedAlbum.ratings[existingUserIndex].rating = rate;
  } else {
    updatedAlbum.ratings.push({
      userId: selectedUser,
      rating: rate,
    });
  }

  // Calculate total rating
  const totalRating = updatedAlbum.ratings.length;

  // Calculate percentage for each star
  const starsCount = [0, 0, 0, 0, 0];

  updatedAlbum.ratings.forEach((user) => {
    starsCount[user.rating - 1]++;
  });

  const percentage = starsCount.map((count) => (count / totalRating) * 100);

  updatedAlbum.totalCount = totalRating;

  updatedAlbum.userrating = [{
    star1: percentage[0].toFixed(1),   //convert each percentage to a string with one decimal point
    star2: percentage[1].toFixed(1),
    star3: percentage[2].toFixed(1),
    star4: percentage[3].toFixed(1),
    star5: percentage[4].toFixed(1),
  }];

  updateAlbum(updatedAlbum);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Album Rating</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Select User</option>
              {users && users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.userName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {albums && albums.map((album) => (
          <div key={album.id + selectedUser} className="col">
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title text-center">{album.artistName}</h5>
                <img
                  src={`https://source.unsplash.com/random?nature/300x300/${album.id}`}
                  alt="Album Cover"
                  className="card-img-top"
                  style={{ maxWidth: "100%", height: "auto", display: "block" }}
                />
                <h5 className="card-title text-center">{album.albumName}</h5>
                <div className="text-justify-center">
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={album.ratings.find((user) => user.userId === selectedUser)?.rating || 0}
                    onChange={(rating) => handleOnRating(album, rating)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumRating;
