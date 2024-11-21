import { api } from "../../app/api";

export const userapi = api.injectEndpoints({
    endpoints: (build)=>({
        getUsers: build.query({
            query: () => '/users',
            providesTags: ["Users"]
        }),
        deleteUserById: build.mutation({
            query:(id)=> ({
                url: `/user/${id}`,
                method:"DELETE",               
            }
        ),
          invalidatesTags: ['Users'] ,

          async onQueryStarted  (id, { dispatch, queryFulfilled })  {
            console.log("optimistic started");
            const patchResult = dispatch(
            userapi.util.updateQueryData("getUsers", undefined, (draft) => {
                console.log("optimistic executed....<<<<<");
            return draft.filter(user => user.id !== id);
            })
            );     
            try {
            await queryFulfilled;
            } catch {
                console.log("undo occurs");
            patchResult.undo();
            }
            },
        }),  
        addUser: build.mutation({
            query: (user)=>({
                url:'/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users'],
            async onQueryStarted(user, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                  userapi.util.updateQueryData("getUsers", undefined, (draft) => {
                    draft.push(user);
                  })
                );
                try {
                  const { data } = await queryFulfilled;
                //  dispatch(artistSlice.actions.addArtistRecord(data));
                } catch {
                  patchResult.undo();
                }
              },
        }),
        updateUser: build.mutation({
            query: (user)=> ({
                url: `/users/${user.id}`,
                method: "PATCH",
                body: user
            }),
            invalidatesTags:['Users'],
            async onQueryStarted(user, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                  userapi.util.updateQueryData("getUsers", undefined, (draft) => {
                    const index = draft.findIndex(u => u.id === user.id);
                    if (index !== -1) {
                      draft[index] = user;
                    }
                  })
                );
                try {
                  const { data } = await queryFulfilled;
              //    dispatch(artistSlice.actions.editArtistRecord({ id: artist.id, changes: data }));
                } catch {
                  patchResult.undo();
                }
              },
        })
    }),
    overrideExisting: false,
})

export const {
  useGetUsersQuery,
  useDeleteUserByIdMutation,
  useAddUserMutation,
  useUpdateUserMutation,
  usePrefetch
} = userapi;