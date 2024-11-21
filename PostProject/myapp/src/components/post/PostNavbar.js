import React from "react";
import { Link } from "react-router-dom";
import { usePrefetch as usePostPrefetch } from "./post/postApi";
import { usePrefetch as useUserPrefetch } from "./user/userApi";

export const PostNavbar = ({ isLoggedIn, handleLogout }) => {
  var data = {};

  if (isLoggedIn) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    data = userData[0];
  } else {
    data = {};
  }

  const prefetchPost = usePostPrefetch('getPost');
  const prefetchUser = useUserPrefetch("getUsers");

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Conditionally render links based on userData */}
                {isLoggedIn ? (
                  <>
                    <Link
                      to={"/home"}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      onMouseEnter={() => prefetchPost()}
                    >
                      Home
                    </Link>
                    {/* <Link
                      to={"/user"}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      onMouseEnter={() => prefetchUser()}
                    >
                      User
                    </Link> */}
                    <Link
                      to={"/post"}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      onMouseEnter={() => prefetchPost()}
                    >
                      Post
                    </Link>
                  </>
                ) : (
                  <Link
                    to={"/"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            {isLoggedIn && (
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <span className="text-white text-sm font-medium"></span>
                  </button>
                </div>
                <div className="float-end">
                  <div className="py-1 flex" role="none">
                    <div className="w-full h-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-xl text-sm font-medium">
                      <label>Username :</label>
                      <span> {data.username}</span>
                    </div>
                    <button
                      className=" ms-2 btn btn-outline-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
