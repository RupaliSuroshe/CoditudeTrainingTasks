import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { albumapi } from "./albumAPI";


const albumsAdapter = createEntityAdapter();

const initialState = {
  ...albumsAdapter.getInitialState(),
  isAlbumFulfilled: false,
  isAlbumRejected: false,
  isAlbumPending: false,
};

const albumSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    setAlbumData: (state, action) => {
        albumsAdapter.setAll(state, action.payload);
      console.log("data is set...");
    },
    addAlbumData: (state, action) => {
        albumsAdapter.addOne(state, action.payload);
      console.log("data is add...");
    },
    updateAlbumData: (state, action) => {
        albumsAdapter.upsertOne(state, action.payload);
      console.log("data is update...");
    },
    deleteAlbumData: (state, action) => {
        albumsAdapter.removeOne(state, action.payload.id);
      console.log("data is delete...");
    },
  },

  extraReducers: (builder) => {
    builder
    .addMatcher(
      albumapi.endpoints.getAlbums.matchFulfilled,
      (state, action) => {
        albumSlice.caseReducers.setAlbumData(state, action);
        state.isAlbumFulfilled = true;
      })

      .addMatcher(albumapi.endpoints.getAlbums.matchPending, (state) => {
        state.isAlbumPending = true;
      })

      .addMatcher(albumapi.endpoints.getAlbums.matchRejected, (state) => {
        state.isAlbumRejected = true;
      })


      // addAlbum

      .addMatcher(
        albumapi.endpoints.addAlbum.matchFulfilled,
        (state, action) => {
            albumSlice.caseReducers.addAlbumData(state, action);
          state.isAlbumFulfilled = true;
        }
      )
      .addMatcher(albumapi.endpoints.addAlbum.matchPending, (state) => {
        state.isAlbumPending = true;
      })
      .addMatcher(albumapi.endpoints.addAlbum.matchRejected, (state) => {
        state.isAlbumRejected = true;
      })
      
      //updateAlbum

      .addMatcher(
        albumapi.endpoints.updateAlbum.matchFulfilled,
        (state, action) => {
            albumSlice.caseReducers.updateAlbumData(state, action);
          state.isAlbumFulfilled = true;
        }
      )
      .addMatcher(albumapi.endpoints.updateAlbum.matchPending, (state) => {
        state.isAlbumPending = true;
      })
      .addMatcher(albumapi.endpoints.updateAlbum.matchRejected, (state) => {
        state.isAlbumRejected = true;
      })

      //deleteAlbum

      .addMatcher(
        albumapi.endpoints.deleteAlbumById.matchFulfilled,
        (state, action) => {
          albumSlice.caseReducers.deleteAlbumData(state, action);
          state.isAlbumFulfilled = true;
        }
      )
      .addMatcher(albumapi.endpoints.deleteAlbumById.matchPending, (state) => {
        state.isAlbumPending = true;
      })
      .addMatcher(albumapi.endpoints.deleteAlbumById.matchRejected, (state) => {
        state.isAlbumRejected = true;
      });
  },
});

export const {
  selectAll: selectAllAlbums,
  selectById: selectAlbumsById,
  selectIds: selectAlbumstIds,
} = albumsAdapter.getSelectors((state) => state.albums);

export const {
  setAlbumData,
  addAlbumData,
  updateAlbumData,
  deleteAlbumData,
} = albumSlice.actions;

export default albumSlice.reducer;
