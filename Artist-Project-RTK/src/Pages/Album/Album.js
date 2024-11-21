import React, { useState, useEffect } from "react";
import AlbumTable from "./AlbumTable";
import AlbumForm from "./AlbumForm";
import { useDispatch, useSelector } from "react-redux";


// import useCustomHook from "../../useCustomHook";
import {
  useAddAlbumMutation,
  useDeleteAlbumByIdMutation,
  useGetAlbumsQuery,
  useUpdateAlbumMutation,
} from "./albumAPI";
import { useGetArtistsQuery } from "../Artist/artistApi";
import { selectAllAlbums } from "./albumSlice";
import { selectAllArtists } from "../Artist/artistSlice";
import { nanoid } from "@reduxjs/toolkit";

const Album = () => {
  const [album, setAlbumInput] = useState({
    id: "",
    artistName: "",
    albumName: "",
    albumUrl: "",
  });

  const [selectedArtist, setSelectedArtist] = useState("Select Artist");
  const artists = useSelector(selectAllArtists);
  console.log(artists);
  // const albumData = useSelector((state) => state.albumStore.albums);
  // const artistData = useSelector((state) => state.artistStore.artists);
  // const {data: albumData} = useGetAlbumsQuery();
  // const {data: artistData}= useGetArtistsQuery();
  // console.log(artistData);
  const [isEdit, setIsEdit] = useState(false);
  // const {
  //   data: artistDataFetched,
  //   loading: loadingArtists,
  //   error: errorArtists,
  // } = useCustomHook("/artists");
  // const {
  //   data: albumDataFetched,
  //   loading: loadingAlbums,
  //   error: errorAlbums,
  // } = useCustomHook("/albums");

  // const dispatch = useDispatch();
 
  // const albums = useSelector(selectAllAlbums);
  // const artist = useSelector(selectAllArtists);
  // console.log(artist);

  // const { data: userResponce } = useGetAlbumsQuery();
  // console.log(userResponce);
  const [addAlbum] = useAddAlbumMutation();
  const [updateAlbum] = useUpdateAlbumMutation();
  const [deleteAlbumById]= useDeleteAlbumByIdMutation();
  
  const handleAddAlbum = () => {
    if (!album.albumName.trim() || !album.albumUrl.trim()) {
      alert("Please enter album name, URL, and select an artist.");
      return;
    }

    addAlbum({
      id: nanoid(),
      albumName: album.albumName,
      albumUrl: album.albumUrl,
      artistName: album.artistName,
      ratings: [],
      totalCount: 0,
      userrating: [{ star1: "", star2: "", star3: "", star4: "", star5: "" }],
    });

    // dispatch(
    // setAlbumAction({
    //   id: String(albumData.length + 1),
    //   albumName: album.albumName,
    //   albumUrl: album.albumUrl,
    //   artistName: album.artistName,
    //   ratings: [],
    //   totalCount: 0,
    //   userrating: [{ star1: "", star2: "", star3: "", star4: "", star5: "" }],
    // });
    // );

    setAlbumInput({ id: "", artistName: "", albumName: "", albumUrl: "" });
  };
  const handleOnDelete =(id)=>{
    console.log(id);
    deleteAlbumById(id);
    } 

  const handleOnEdit = (album) => {
    setAlbumInput(album);
    setIsEdit(true);
  };

  const handleOnUpdate = () => {
    // dispatch(editAlbums(album));
    updateAlbum(album)
    console.log(album);
    setAlbumInput({ id: "", artistName: "", albumName: "", albumUrl: "" });
    setIsEdit(false);
  };

  const handleArtistChange = (e) => {
    setSelectedArtist(e.target.value);
    setAlbumInput({ ...album, artistName: e.target.value });
  };

  return (
    <div className="container">
      <div className="col-md-12">
        <AlbumForm
          album={album}
          setAlbumInput={setAlbumInput}
          artistData={artists}
          selectedArtist={selectedArtist}
          isEdit={isEdit}
          handleOnUpdate={handleOnUpdate}
          handleArtistChange={handleArtistChange}
          handleAddAlbum={handleAddAlbum}
        />
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
        <AlbumTable 
          albumData={album}
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
        />
      </div>
      </div>
    </div>
  );
};

export default Album;
