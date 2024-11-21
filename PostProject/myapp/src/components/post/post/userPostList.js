import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPostQuery } from "./postApi";
import { selectAllPost, setPost } from "./postSlice";

export const UserPostList = ({ username, handleOnEdit, handleOnDelete }) => {
  const { data: postResponse } = useGetPostQuery(null,{
    pollingInterval: 3000,
    skipPollingIfUnfocused: true
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (postResponse) {
      dispatch(setPost(postResponse));
    }
  }, [postResponse, dispatch]);

  const postData = useSelector(selectAllPost);

  const { isPostFulfilled, isPostPending, isPostRejected } = useSelector(
    (state) => state.postSlice
  );

  return (
    <>
      {isPostFulfilled ? (
        <table className="table border border-primary text-center table-auto border-3 table-bordered table-hover">
          <thead className="table-primary ">
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Post</th>
              <th scope="col" colSpan={"2"}>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {postData
              .filter((user) => user.username === username)
              .map((posts, index) => (
                <tr
                  key={posts.id}
                  className="animate__animated animate__fadeInDown"
                >
                  <th scope="row">{index + 1}</th>
                  <td>{posts.username}</td>
                  <td>{posts.description}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-warning"
                      onClick={() => handleOnEdit(posts)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleOnDelete(posts.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : isPostRejected ? (
        <div className="text-center mt-10">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
          <h2 className="text-xl font-bold text-red-900 dark:text-black mt-4">
            Error...
          </h2>
        </div>
      ) : isPostPending ? (
        <div className="text-center mt-10">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 className="text-black-900 dark:text-white mt-4">Loading...</h2>
          <p className="text-black-600 dark:text-zinc-400">
            Wait, Loading Feed Deatils ...
          </p>
        </div>
      ) : null}
    </>
  );
};
