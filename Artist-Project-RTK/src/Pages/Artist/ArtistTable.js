import { useDispatch, useSelector } from "react-redux";
import { selectAllArtists, setArtistData } from "./artistSlice";
import { useGetArtistsQuery } from "./artistApi";
import { useEffect } from "react";


export const ArtistTable = ({ handleOnDelete, handleOnEdit }) => {
  const artists = useSelector(selectAllArtists);
  console.log(artists);
  const { isArtistFulfilled, isArtistRejected, isArtistPending } = useSelector((state) => state.artists);

  const dispatch = useDispatch()

  const {
    data: artistsResponse,
    isLoading: isUserLoading,
    isError: isUserError,
    isSuccess: isUserSuccess,
  } = useGetArtistsQuery(null, {
    pollingInterval: 5000,
    });

  useEffect(()=>{
    if(artistsResponse){
    dispatch(setArtistData(artistsResponse));
    }
  }, [artistsResponse], dispatch);

  return (
    <div className="row mt-5">
      <div className="col-md-8 mx-auto">
        {isArtistFulfilled ? (
          <table className="table table-bordered border-black">
            <thead>
              <tr>
                <th className="table-success text-center">Sr.No</th>
                <th className="table-success text-center">Name</th>
                <th className="table-success text-center">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {artists &&
                artists.map((artist, index) => (
                  <tr key={artist.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{artist.artistName}</td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success"
                          style={{ marginRight: "10px" }}
                          onClick={() => handleOnEdit(artist)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleOnDelete(artist.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : isArtistRejected ? (
          <div
            className="d-flex justify-content-center align-items-center text-center h3"
            style={{ minHeight: "80vh" }}
          >
            Error:
          </div>
        ) : isArtistPending ? (
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
