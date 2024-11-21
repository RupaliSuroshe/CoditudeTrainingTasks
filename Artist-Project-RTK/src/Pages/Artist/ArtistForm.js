export const ArtistForm = ({ artistDetails, setArtistDetails, handleOnAdd, isEdit, handleOnUpdate }) => {
  return (
    <div className="container">
      <div className="content">
        <h3 className="text-center mt-4">Artist Page</h3>
        <div className="d-flex justify-content-center">
          
            <div
              className="card p-5 mb-5 shadow bg-body-tertiary rounded"
              style={{ width: "400px" }}
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Artist's name"
                  value={artistDetails.artistName}
                  onChange={(e) => setArtistDetails({ ...artistDetails, artistName: e.target.value })}
                />
              </div>
              <div className="text-center">
                {isEdit ? (
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handleOnUpdate}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handleOnAdd}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};
