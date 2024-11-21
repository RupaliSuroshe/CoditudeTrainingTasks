import { api } from "../../../app/api";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPost: build.query({
      query: () => "/posts",

      providesTags: ["Posts"],
    }),

    deletePostById: build.mutation({
      query: (id) => ({
        url: `/post/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postApi.util.updateQueryData("getPost", undefined, (draft) => {
            return draft.filter((feeds) => feeds.id !== id);

            //  console.log(JSON.stringify(draft));
          })
        );

        try {
          await queryFulfilled;
          console.log("Completed optimistic Update DeletePost >>>>>");
        } catch {
          patchResult.undo();
        }
      },
    }),

    addPost: build.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),

      async onQueryStarted(post, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postApi.util.updateQueryData("getPost", undefined, (draft) => {
            //  console.log(JSON.stringify(draft));
            draft.push(post);
           })
        );

      
        try {
          await queryFulfilled;
          console.log("Completed optimistic Update AddPost >>>>>");
        } catch {
          patchResult.undo();
        }
      },
    }),

    updatePost: build.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PATCH",
        body: post,
      }),
      async onQueryStarted(post, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          postApi.util.updateQueryData("getPost", undefined, (draft) => {
            return draft.map((data) => (data.id === post.id ? post : data));
          })
        );

        try {
          await queryFulfilled;
          console.log("Completed optimistic update for updatePost >>>>>");
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostByIdMutation,
  usePrefetch
} = postApi;
