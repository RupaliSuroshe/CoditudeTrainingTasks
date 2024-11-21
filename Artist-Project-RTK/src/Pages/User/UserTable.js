import { useDispatch, useSelector } from "react-redux";

import  { selectAllUsers, setUserData } from "./userSlice";
import { useEffect } from "react";
import { useGetUsersQuery } from "./userAPI";

export const UserTable = ({ handleOnDelete, handleOnEdit }) => {
  const users = useSelector(selectAllUsers);
  console.log(users);
  const { isUserFulfilled, isUserRejected, isUserPending } = useSelector(
    (state) => state.users);
  const dispatch = useDispatch();
  
  const {
    data: usersResponce,
  } = useGetUsersQuery( 
  //   null,{
  //   pollingInterval: 5000,
  // }
);

  useEffect(()=>{
    if(usersResponce){
    dispatch(setUserData(usersResponce));
    }
  }, [usersResponce], dispatch);

  return (
    <div className="row mt-5">
      <div className="col-md-8 mx-auto">
        {isUserFulfilled ? (
          <table className="table table-bordered border-black">
            <thead>
              <tr>
                <th className="table-success text-center">Sr.No.</th>
                <th className="table-success text-center">User Name</th>
                <th className="table-success text-center">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {users &&
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{user.userName}</td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success"
                          style={{ marginRight: "10px" }}
                          onClick={() => 
                            handleOnEdit(user)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() =>
                             handleOnDelete(user.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : isUserRejected ? (
          <div
            className="d-flex justify-content-center align-items-center text-center h3"
            style={{ minHeight: "80vh" }}
          >
            Error:
          </div>
        ) : isUserPending ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "90vh" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
