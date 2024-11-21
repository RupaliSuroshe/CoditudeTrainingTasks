import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { artistapi } from "./artistApi";

const artistsAdapter = createEntityAdapter();

const initialState = {
  ...artistsAdapter.getInitialState(),
  isArtistFulfilled: false,
  isartistRejected: false,
  isArtistPending: false,
};

const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    setArtistData: (state, action) => {
      artistsAdapter.setAll(state, action.payload);
      console.log("data is set...");
    },
    addArtistData: (state, action) => {
      artistsAdapter.addOne(state, action.payload);
      console.log("data is add...");
    },
    updateArtistData: (state, action) => {
      artistsAdapter.upsertOne(state, action.payload);
      console.log("data is update...");
    },
    deleteArtistData: (state, action) => {
      artistsAdapter.removeOne(state, action.payload.id);
      console.log("data is delete...");
    },
  },

  extraReducers: (builder) => {
    builder
    .addMatcher(
      artistapi.endpoints.getArtists.matchFulfilled,
      (state, action) => {
        artistsSlice.caseReducers.setArtistData(state, action);
        state.isArtistFulfilled = true;
      })

      .addMatcher(artistapi.endpoints.getArtists.matchPending, (state) => {
        state.isPending = true;
      })

      .addMatcher(artistapi.endpoints.getArtists.matchRejected, (state) => {
        state.isartistRejected = true;
      })


      // addArtist

      .addMatcher(
        artistapi.endpoints.addArtist.matchFulfilled,
        (state, action) => {
          artistsSlice.caseReducers.addArtistData(state, action);
          state.isArtistFulfilled = true;
        }
      )
      .addMatcher(artistapi.endpoints.addArtist.matchPending, (state) => {
        state.isPending = true;
      })
      .addMatcher(artistapi.endpoints.addArtist.matchRejected, (state) => {
        state.isartistRejected = true;
      })
      
      //updateArtist

      .addMatcher(
        artistapi.endpoints.updateArtist.matchFulfilled,
        (state, action) => {
          artistsSlice.caseReducers.updateArtistData(state, action);
          state.isArtistFulfilled = true;
        }
      )
      .addMatcher(artistapi.endpoints.updateArtist.matchPending, (state) => {
        state.isPending = true;
      })
      .addMatcher(artistapi.endpoints.updateArtist.matchRejected, (state) => {
        state.isartistRejected = true;
      })

      //deleteArtist

      .addMatcher(
        artistapi.endpoints.deleteArtistById.matchFulfilled,
        (state, action) => {
          artistsSlice.caseReducers.deleteArtistData(state, action);
          state.isArtistFulfilled = true;
        }
      )
      .addMatcher(artistapi.endpoints.deleteArtistById.matchPending, (state) => {
        state.isPending = true;
      })
      .addMatcher(artistapi.endpoints.deleteArtistById.matchRejected, (state) => {
        state.isartistRejected = true;
      });
  },
});

export const {
  selectAll: selectAllArtists,
  selectById: selectArtistById,
  selectIds: selectArtistIds,
} = artistsAdapter.getSelectors((state) => state.artists);

export const {
  setArtistData,
  addArtistData,
  updateArtistData,
  deleteArtistData,
} = artistsSlice.actions;

export default artistsSlice.reducer;
