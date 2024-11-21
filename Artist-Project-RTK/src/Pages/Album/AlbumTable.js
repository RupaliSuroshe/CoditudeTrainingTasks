import React, { useEffect } from "react";
import { useGetAlbumsQuery } from "./albumAPI";
import { useDispatch, useSelector } from "react-redux";
import { selectAllAlbums, setAlbumData } from "./albumSlice";

export const AlbumTable = ({handleOnEdit, handleOnDelete})=>{

const {
  data: albumResponce,
  isLoading: isAlbumLoading,
  isError: isAlbumError,
  isSuccess: isAlbumSuccess,
 } = useGetAlbumsQuery(null, {
  pollingInterval: 5000,
 });


 const albums = useSelector(selectAllAlbums);
console.log(albums);
const {isAlbumFulfilled, isAlbumRejected, isAlbumPending } = useSelector((state) => state.albums);
const dispatch = useDispatch()

 useEffect(()=>{
  if(albumResponce){
  dispatch(setAlbumData(albumResponce));
  }
}, [albumResponce], dispatch);

  return (
    <div className="row mt-5">
      <div className="col-md-8 mx-auto">
      {isAlbumFulfilled ? (
        <table className="table table-bordered border-black">
          <thead>
            <tr>
              <th className="table-success text-center">Sr.No</th>
              <th className="table-success text-right">Artist Name</th>
              <th className="table-success text-right">Album Name</th>
              <th className="table-success text-right">URL</th>
              <th className="table-success text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {albums && albums.map((album, index) => (
      
              <tr key={album.id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-right">{album.artistName}</td>
                <td className="text-right">{album.albumName}</td>
                <td className="text-right">{album.albumUrl}</td>
                <td className="text-center">
                  <button
                   type="button"
                   className="btn btn-success"
                   style={{ marginRight: "10px" }}
                    onClick={() => handleOnEdit(album)}
                  >
                    Edit
                  </button>
                  <button
                     type="button"
                     className="btn btn-danger"
                    onClick={() => handleOnDelete(album.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        ) : isAlbumRejected ? (
          <div
            className="d-flex justify-content-center align-items-center text-center h3"
            style={{ minHeight: "80vh" }}
          >
            Error:
          </div>
        ) : isAlbumPending ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "90vh" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AlbumTable;
