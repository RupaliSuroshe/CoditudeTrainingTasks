import React, { useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useDispatch, useSelector } from "react-redux";

// import { fetchedAlbums } from "../Album/albumAction";
// import useCustomHook from "../../useCustomHook";
import { useGetAlbumsQuery } from "../Album/albumAPI";


const UserRating = () => {

  const { data: userResponce } = useGetAlbumsQuery();
  console.log(userResponce);
  // const albumData = useSelector((state) => state.albumStore.albums);
  // const { data, loading, error } = useCustomHook("/albums");
  //  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (data) {
  //     dispatch(fetchedAlbums(data));
  //   }
  
  // }, [data]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Rating</h2>
      <div className="row g-3">
        {userResponce && userResponce.map((album) => (
          <div key={album.id} className="col-md-12">
            <div className="d-flex">
              <div className="col-md-4 mb-3">
                <div className="shadow-lg bg-body rounded" style={{ flex: 1, height: "300px" }}>
                  <div className="card-body bg-danger text-black" style={{ height: "100%" }}>
                    <img
                      src={`https://source.unsplash.com/random?nature/300x300/${album.id}`}
                      alt="Album Cover"
                      className="card-img-top"
                      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
                    />
                    <h5 className="card-title text-center mt-3 ">{album.albumName}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-8 ms-5">
                <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{ flex: 2, height: "300px" }}>
                  <div>
                    <h6 className="card-title text-left">Total Review: {album.totalCount}</h6>
                  </div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div className="mt-2" key={`progress-${album.id}-star${star}`}>
                      <div className="d-flex align-items-center mt-4">
                        <div className="col-1 ms-4">
                          <p className="mb-0">Star {star}</p>
                        </div>
                        <div className="col flex-grow-1">
                          <ProgressBar completed={album.userrating[0][`star${star}`]} />
  
                        </div>
                        <div className="col-1 ms-4">
                          <p className="mb-0">{album[`reviewProgress${star}`]}
                          {album.ratings.filter((rating) => rating.rating === star).length} users
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRating;
