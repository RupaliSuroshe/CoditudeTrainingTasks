import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers, setUser } from "./userSlice";
import { useGetUsersQuery } from "./userApi";
import { useEffect } from "react";

export const UserList = ({ handleOnEdit, handleOnDelete }) => {
  const { data: userResponse } = useGetUsersQuery();

  // console.log("After Deleting The Data From Cache",userResponse);

  const dispatch = useDispatch();
 
  useEffect(() => {
    if (userResponse) {
      dispatch(setUser(userResponse));
    }
  }, [userResponse, dispatch]);

  const userData = useSelector(selectAllUsers);

  const { isUserFulfilled, isUserRejected, isUserPending } = useSelector(
    (state) => state.userSlice
  );
  return (
    <>
      {isUserFulfilled ? (
        <table className="table border border-primary  text-center table-auto border-3 table-bordered table-hover">
          <thead className="table-primary ">
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col" colSpan={"2"}>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {userData.map((user, index) => (
              <tr
                key={user.id}
                className="animate__animated animate__fadeInDown"
              >
                <th scope="row">{index + 1}</th>
                <td>{`${user.name}`}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-warning"
                    onClick={() => handleOnEdit(user)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleOnDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : isUserRejected ? (
        <div className="text-center mt-10">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
          <h2 className="text-xl font-bold text-red-900 dark:text-black mt-4">
            Error...
          </h2>
        </div>
      ) : isUserPending ? (
        <div className="text-center mt-10">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 className="text-black-900 dark:text-white mt-4">Loading...</h2>
          <p className="text-black-600 dark:text-zinc-400">
            Wait, Loading User Deatils ...
          </p>
        </div>
      ) : null}
    </>
  );
};
