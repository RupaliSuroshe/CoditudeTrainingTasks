import http from "../http-common";

export const getUsers = () => {
  return http.get("/users");
};

export const addUsersData = (user) => {
  return http.post("/users/", user);
};

// export const editUser = (user) => {
//   return http.put(`/users/${user.id}`, user);
// };

export const deleteUser = (id) => {
  return http.delete(`/users/${id}`);
};

export const updateUsers = (user) =>{
       return http.put(`/users/${user.id}`,user);
  }

export const removeUsers = (id) => {
       return http.delete(`/users/${id}`);
  }

/*...................................................................Artist API................................................................ */

export const getArtist = () => {
  return http.get("/artists");
};

export const addArtistData =  (obj) => {
  return http.post("/artists/", obj);
};

// export const editArtist = (obj) => {
//   return http.put(`/artists/${obj.id}`, obj);
// };

export const deleteArtist = (id) => {
  return http.delete(`/artists/${id}`);
};

export const updateArtists = (artist) =>{
  return http.put(`/artists/${artist.id}`,artist);
}

export const removeArtists = (id) => {
  return http.delete(`/artists/${id}`);
}



/*...................................................................Album API................................................................ */
export const getAlbums = () => {
  return http.get("/albums");
};

export const addAlbumData = (album) => {
  return http.post("/albums", album);
};

export const editAlbum = (album) => {
  return http.put(`/albums/${album.id}`, album);
};

export const deleteAlbum = (id) => {
  return http.delete(`/albums/${id}`);
};

export const updateAlbum = (album) =>{
  return http.put(`/artists/${album.id}`,album);
};


//////////////////////////////////////////////////////// Album-Rating-API/////////////////////////////////////////////////////////////////////////

export const getRatings = () => {
  return http.get("/ratings");
};

export const addRatings = (rating) => {
  return http.post("/ratings", rating);
};

export const editRating = (rating) => {
  return http.put(`/ratings/${rating.id}`, rating);
};

export const deleteRating = (id) => {
  return http.delete(`/ratings/${id}`);
};

export const updateRatings = (rating) => {
  return http.put(`/ratings/${rating.id}`, rating);
};

////////////////////////////////////////////////////// User-Rating-API ////////////////////////////////////////////////////////////////////////

export const getUserRatings = () => {
  return http.get("/userratings");
};

export const addUserRatings = (userrating) => {
  return http.post("/userratings", userrating);
};

export const deleteUserRating = (id) => {
  return http.delete(`/userratings/${id}`);
};

export const updateUserRatings = (userrating) => {
  return http.put(`/userratings/${userrating.id}`, userrating);
};

