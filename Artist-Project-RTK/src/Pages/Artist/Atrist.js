import React, { useState } from "react";
import { ArtistTable } from "./ArtistTable";
import { ArtistForm } from "./ArtistForm";
import {
  useAddArtistMutation,
  useDeleteArtistByIdMutation,
  useUpdateArtistMutation,
} from "./artistApi";

import { nanoid } from "@reduxjs/toolkit";


export const Artist = () => {
  const [artistDetails, setArtistDetails] = useState({
    id: "",
    artistName: "",
  });
  const [isEdit, setIsEdit] = useState(false);


  // const { data: artistData } = useGetArtistsQuery();
  
  // const artistsResponse = useSelector(selectAllArtists);
  
  const [addArtist] = useAddArtistMutation();
  const [updateArtist] = useUpdateArtistMutation();
  const [deleteArtistById] = useDeleteArtistByIdMutation();

  const handleOnAdd = async () => {
    try {
      await addArtist({
        id: nanoid(),
        artistName: artistDetails.artistName,
      });

      setArtistDetails({ id: "", artistName: "" });
      setIsEdit(false);
    } catch (error) {
      console.error("Failed to add artist:", error);
    }
  };

  const handleOnEdit = (artist) => {
    setArtistDetails(artist);
    setIsEdit(true);
  };

  const handleOnUpdate = async () => {
    try {
      const res = await updateArtist({
        id: artistDetails.id,
        artistName: artistDetails.artistName,
      });
      console.log(res);
      if (res.data) {
        
      }
      console.log("data updated", artistDetails);
      setArtistDetails({ id: "", artistName: "" });
      setIsEdit(false);
    } catch (error) {
      console.error("Failed to update artist:", error);
    }
  };

  const handleOnDelete = async (id) => {
    try {
      console.log(id);
      await deleteArtistById(id);
    } catch (error) {
      console.error("Failed to delete artist:", error);
    }
  };

  return (
    <div>
    <div className="container">
      <div className="col-md-12">
        <ArtistForm
          handleOnAdd={handleOnAdd}
          artistDetails={artistDetails}
          isEdit={isEdit}
          handleOnUpdate={handleOnUpdate}
          setArtistDetails={setArtistDetails}
        />
      </div>
      </div>
      <div className="col-md-12">
        <div className="col-md-12">
        <ArtistTable
          handleOnEdit={handleOnEdit}
          handleOnDelete={handleOnDelete}
        />
        </div>
      </div>
    </div>

  );
};

export default Artist;
