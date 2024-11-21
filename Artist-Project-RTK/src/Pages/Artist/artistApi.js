import { api } from "../../app/api";

export const artistapi = api.injectEndpoints({
  endpoints: (build) => ({
    getArtists: build.query({
      query: () => "/artists",
      providesTags: ["Artists"],
    }),

     //addArtist
    
    addArtist: build.mutation({
      query: (artist) => ({
        url: "/artists",
        method: "POST",
        body: artist,
      }),

      async onQueryStarted(artist, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
            artistapi.util.updateQueryData('getArtists', undefined, (draft) => {
              draft.push(artist);                                           
            }),
          );
          try {
            await queryFulfilled;                                         
          } catch (error) {
            patchResult.undo();                                                                  
          }
        },

      invalidatesTags: ["Artists"],
    }),

    //updateArtist

    updateArtist: build.mutation({
      query: (artist) => ({
        url: `/artists/${artist.id}`,
        method: "PUT",
        body: artist,
      }),

      async onQueryStarted(artist, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          artistapi.util.updateQueryData('getArtists',undefined , (draft) => {        
           const index = draft.findIndex(a=> a.id === artist.id);
           if (index !== -1) {        
             draft[index]={...draft[index],...artist};
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },

      invalidatesTags: ["Artists"],
    }),

    //deleteArtist

    deleteArtistById: build.mutation({
      query: (id) => ({
        url: `/artists/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          artistapi.util.updateQueryData('getArtists', undefined, (draft) => {
            console.log('Before Delete',JSON.stringify(draft)); 
            return draft.filter(user => user.id !== id);  
                 
          })
        );
        try {
          await queryFulfilled;             
        } catch (error) {
          patchResult.undo();            
        }
      },

      invalidatesTags: ["Artists"],
    }),

  }),
  overrideExisting: false,
});

export const {
  useGetArtistsQuery,
  useDeleteArtistByIdMutation,
  useUpdateArtistMutation,
  useAddArtistMutation,
  usePrefetch
} = artistapi;
