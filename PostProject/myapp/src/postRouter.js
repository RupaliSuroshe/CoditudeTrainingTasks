import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { PostNavbar } from "./components/post/PostNavbar";
import { UserEnroll } from "./components/post/user/UserEnroll";
import { UsersPost } from "./components/post/post/UsersPost";
import { Home } from "./components/post/home/Home";
import { Login } from "./components/post/login/Login";
import { Registration } from "./components/post/registration/Registration";
import { CustomeHookTest } from "./components/post/customHook/customHookTest";

export const PostRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setIsLoggedIn(!!userData);
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <BrowserRouter>
      <PostNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Registration />}></Route>
        <Route path="/test" element={<CustomeHookTest />}></Route>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/user" element={<UserEnroll />}></Route>
            <Route path="/post" element={<UsersPost />}></Route>
          </>
        ) : (
          <>
            <Route
              path="*"
              element={
                <>
                  <h1 className="text-2xl text-center font-bold my-5">
                     We Can not Recognize You, Please Login !!!
                  </h1>
                </>
              }
            />
          </>
        )}

        <Route
          path="*"
          element={
            <>
              <h1 className="text-2xl text-center font-bold my-5">
                404 Page Not Found...
              </h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
