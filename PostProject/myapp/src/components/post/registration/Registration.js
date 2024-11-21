import { Link, useNavigate } from "react-router-dom";
import { RegistrationForm } from "./registrationForm";
import { useSelector } from "react-redux";
import { useState } from "react";

import { useAddUserMutation, useGetUsersQuery } from "../user/userApi";
import { selectAllUsers } from "../user/userSlice";

export const Registration = () => {
  const [userInput, setUserInput] = useState({
    id: "",
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  useGetUsersQuery();
  const userData = useSelector(selectAllUsers);

  const [addUser] = useAddUserMutation();

  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Name Validation
    if (!userInput.name.trim()) {
      setErrorMessage({ ...errorMessage, name: "You Missed This Field..." });
      return;
    } else if (!/^[a-zA-Z]+$/.test(userInput.name)) {
      setErrorMessage({
        ...errorMessage,
        name: "Only characters allowed in this field.",
      });
      return;
    }

    // Email Validation
    if (!userInput.email.trim()) {
      setErrorMessage({ ...errorMessage, email: "You Missed This Field..." });
      return;
    } else if (!/\S+@\S+\.\S+/.test(userInput.email)) {
      setErrorMessage({ ...errorMessage, email: "Invalid email address." });
      return;
    }

    // Username Validation
    if (!userInput.username.trim()) {
      setErrorMessage({
        ...errorMessage,
        username: "You Missed This Field...",
      });
      return;
    }

    // Password Validation
    if (!userInput.password.trim()) {
      setErrorMessage({
        ...errorMessage,
        password: "You Missed This Field...",
      });
      return;
    }

    // Confirm Password Validation
    if (!userInput.confirmPassword.trim()) {
      setErrorMessage({
        ...errorMessage,
        confirmPassword: "You Missed This Field...",
      });
      return;
    } else if (userInput.password !== userInput.confirmPassword) {
      setErrorMessage({
        ...errorMessage,
        confirmPassword: "Passwords do not match.",
      });
      return;
    }

    // API Call
    await addUser({
      id: String(userData.length + 1),
      name: userInput.name,
      email: userInput.email,
      username: userInput.username,
      password: userInput.confirmPassword,
    });
    alert("Registration Completed Successfully...");
    setUserInput({
      id: "",
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    setErrorMessage({
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    // Use to Navigate into sign in Page
    navigate("/");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
      <div className="text-center mb-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-xl font-bold text-primary">Create a new account</h1>
      </div>
      <div className=" border border-3 border-primary drop-shadow-lg shadow-xl rounded-xl sm:mx-auto sm:w-full sm:max-w-sm">
        <RegistrationForm
          userInput={userInput}
          errorMessage={errorMessage}
          setUserInput={setUserInput}
          handleSignUp={handleSignUp}
        />
        <p class="mt-3 mb-6 text-center text-sm text-gray-500">
          have a account...
          <Link
            to={"/"}
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
