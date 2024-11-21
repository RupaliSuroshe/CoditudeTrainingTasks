import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  getUsers,
  removeUsers,
  updateUsers,
} from "./Services/Service";
import {
  deleteUsers,
  editUsers,
  fetchedUsers,
  setUsers,
} from "./Pages/UserPage/UserAction";


const useCustomData = () => {
  const dispatch = useDispatch();

  // User state and handlers
  const [userDetails, setUserDetails] = useState({ id: "", userName: "" });
  const [isEdit, setIsEdit] = useState(false);
  const userData = useSelector((state) => state.userStore.users);

  useEffect(() => {
    getUsers()
      .then((res) => {
        dispatch(fetchedUsers(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleOnAddUser = () => {
    addUsers({
      id: String(userData.length + 1),
      userName: userDetails.userName,
    })
      .then((res) => {
        dispatch(setUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    setUserDetails({ id: "", userName: "" });
  };

  const handleOnEditUser = (user) => {
    setUserDetails(user);
    setIsEdit(true);
  };

  const handleOnUpdateUser = () => {
    updateUsers(userDetails)
      .then((res) => {
        dispatch(editUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    setUserDetails({ id: "", userName: "" });
    setIsEdit(false);
  };

  const handleOnDeleteUser = (id) => {
    removeUsers(id)
      .then((res) => {
        dispatch(deleteUsers(id));
      })
      .catch((err) => console.log(err));
  };

 
  return [
    userDetails,
    setUserDetails,
    isEdit,
    setIsEdit,
    userData,
    handleOnAddUser,
    handleOnEditUser,
    handleOnDeleteUser,
    handleOnUpdateUser,

  ];
};

export default useCustomData;
