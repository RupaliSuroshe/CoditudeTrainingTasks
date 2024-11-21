export const LoginForm = ({
  userInputs,
  errorMessage,
  setUserInputs,
  handleOnSignIn,
}) => {
  return (
    <>
      <div className="my-4 mx-4">
        <label htmlFor="username" className="form-label">
          Username : <label className="text-danger">*</label>
        </label>
        <div>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            required=""
            className="form-control"
            autoFocus
            placeholder="Enter Username..."
            value={userInputs.username}
            onChange={(e) =>
              setUserInputs({ ...userInputs, username: e.target.value })
            }
          />
        </div>
        <div className="text-danger ms-2 font-bold">{errorMessage.username}</div>
      </div>
      <div className="my-4 mx-4">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="form-label">
            Password : <label className="text-danger">*</label>
          </label>
        </div>
        <div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required=""
            className="form-control"
            maxLength={8}
            placeholder="Enter Password..."
            value={userInputs.password}
            onChange={(e) =>
              setUserInputs({ ...userInputs, password: e.target.value })
            }
          />
        </div>
        <div className="text-danger ms-2 font-bold">{errorMessage.password}</div>
      </div>
      <div className="text-center my-4 mx-4">
        <button className="btn btn-outline-primary" onClick={handleOnSignIn}>
          Sign in
        </button>
      </div>
    </>
  );
};
