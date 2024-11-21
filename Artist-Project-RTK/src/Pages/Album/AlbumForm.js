
import React from "react";
const AlbumForm = ({
  album,
  setAlbumInput,
  artistData,
  isEdit,
  handleAddAlbum,
  handleOnUpdate
 
}) => (
  <div className="container">
    <div className="content">
      <h3 className="text-center mt-4">Album Page</h3>
      <div className="d-flex justify-content-center">
       
          <div
            className="card p-5 mb-5 shadow bg-body-tertiary rounded"
            style={{ width: "400px" }}
          >
            <div className="mb-3">
              <select
                className="form-select"
                aria-label="Select Artist"
                value={album.artistName}
                onChange={(e) => setAlbumInput({...album,artistName:e.target.value})}
              >
                <option value ="">Select Artist</option>
                {artistData && artistData.map((artist, index) => (
                  <option value={artist.artistName} key={index}>{artist.artistName}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Album Name"
                value={album.albumName}
                onChange={(e) => setAlbumInput({...album,albumName:e.target.value})} 
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Album URL"
                value={album.albumUrl}
                onChange={(e) => setAlbumInput({...album,albumUrl:e.target.value})} 
              />
            </div>
            <div className="text-center">
                {isEdit ? (
                  <button
                    
                    className="btn btn-success"
                    onClick={handleOnUpdate}
                  >
                    Update
                  </button>
                ) : (
                  <button
                  
                    className="btn btn-success"
                    onClick={handleAddAlbum}
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

export default AlbumForm;
