import { Link } from "react-router-dom";
import { LoginForm } from "./loginForm";
import { useState } from "react";
import { getUser } from "../../../service/service";

export const Login = () => {
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });

 
  const handleOnSignIn = () => {
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

    getUser(userInput.username, userInput.password)
      .then((res) => {
        if (res.data.length === 1) {
          localStorage.setItem("userData", JSON.stringify(res.data));
          window.location.href = "/home";
        } else {
          localStorage.setItem("userData", []);
          alert("Credential Not Found...");
        }

        setUserInput({
          username: "",
          password: "",
        });

        setErrorMessage({
          username: "",
          password: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //  const data = JSON.parse(localStorage.getItem('userData'));
  //  console.log(data);
  // if (data) {
  //   const userData = data[0];

  //   console.log(userData.name);
  // } else {
  //   console.log('No user data found in localStorage');
  // }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
      <div className="text-center mb-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-xl font-bold text-primary">
          Sign in to your account
        </h1>
      </div>
      <div className="border border-3 border-primary drop-shadow-lg shadow-xl rounded-xl    sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm
          userInputs={userInput}
          errorMessage={errorMessage}
          setUserInputs={setUserInput}
          handleOnSignIn={handleOnSignIn}
        />
        <p class="mt-3 mb-6 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to={"/signup"}
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
