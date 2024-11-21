import { api } from "../../app/api";

export const albumapi = api.injectEndpoints({
    endpoints: (build) => ({
        getAlbums: build.query({
            query: () => "/albums",
            providesTags: ["Albums"],
        }),
        
        //add Album

        addAlbum: build.mutation({
            query: (album) => ({
              url: "/albums",
              method: "POST",
              body: album,
            }),
            async onQueryStarted(album, { dispatch, queryFulfilled }) {
              const patchResult = dispatch(
              albumapi.util.updateQueryData('getAlbums', undefined, (draft) => {
                    draft.push(album);                                           
                  }),
                );
                try {
                  await queryFulfilled;                                         
                } catch (error) {
                  patchResult.undo();                                                                  
                }
              },
            invalidatesTags: ["Albums"],
          }),
      
           
          //update Album

          updateAlbum: build.mutation({
            query: (album) => ({
              url: `/albums/${album.id}`,
              method: "PUT",
              body: album,
            }),
            async onQueryStarted(album, { dispatch, queryFulfilled }) {
              const patchResult = dispatch(
                albumapi.util.updateQueryData('getAlbums',undefined , (draft) => {        
                 const index = draft.findIndex(a=> a.id === album.id);
                 if (index !== -1) {        
                   draft[index]={...draft[index],...album};
                  }
                })
              );
              try {
                await queryFulfilled;
              } catch {
                patchResult.undo();
              }
            },
            invalidatesTags: ["Albums"],
          }),  
          
         //delete Album 

         deleteAlbumById: build.mutation({
          query: (id) => ({
              url: `/albums/${id}`,
              method: 'DELETE',
          }),
          async onQueryStarted(id, { dispatch, queryFulfilled }) {
            const patchResult = dispatch(
              albumapi.util.updateQueryData('getAlbums', undefined, (draft) => {
                console.log('Before Delete',JSON.stringify(draft)); 
                return draft.filter(album => album.id !== id);  
                     
              })
            );
            try {
              await queryFulfilled;             
            } catch (error) {
              patchResult.undo();            
            }
          },
          invalidatesTags: ["Albums"],
      }),

    }),
    
    overrideExisting: false,
});

export const {
    useGetAlbumsQuery,
    useDeleteAlbumByIdMutation,
    useAddAlbumMutation,
    useUpdateAlbumMutation,
    usePrefetch
} = albumapi;
