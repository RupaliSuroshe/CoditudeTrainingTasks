import { api } from "../../../app/api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),

    deleteUserById: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData("getUsers", undefined, (draft) => {
            // console.log("Before Deleting The Data From Draft",JSON.stringify(draft));
            return draft.filter((data) => data.id !== id);
          })
        );

        // console.log(JSON.stringify(patchResult));

        try {
          await queryFulfilled;
          console.log("Completed optimistic Update DeleteUser >>>>>");
        } catch {
          patchResult.undo();
        }
      },
    }),

    addUser: build.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      async onQueryStarted(user, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData("getUsers", undefined, (draft) => {
            draft.push(user);
          })
        );

        try {
          await queryFulfilled;
          console.log("Completed optimistic Update AddUser >>>>>");
        } catch {
          patchResult.undo();
        }
      },
    }),

    updateUser: build.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PATCH",
        body: user,
      }),

      async onQueryStarted(user, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData("getUsers", undefined, (draft) => {
            return draft.map((data) => (data.id === user.id ? user : data));
          })
        );

        try {
          await queryFulfilled;
          console.log("Completed optimistic Update UpdatePost >>>>>");
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserByIdMutation,
  useUpdateUserMutation,
  usePrefetch,
} = userApi;
