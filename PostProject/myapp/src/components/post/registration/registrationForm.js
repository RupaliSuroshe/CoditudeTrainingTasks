export const RegistrationForm = ({ userInput,errorMessage, setUserInput, handleSignUp }) => {
  return (
    <>
      <div className="my-4 mx-4">
        <label htmlFor="name" className="form-label">
          Name : <label className="text-danger">*</label>
        </label>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            required=""
            className="form-control"
            autoFocus
            placeholder="Enter Name..."
            value={userInput.name}
            onChange={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
          />
        </div>
        <div className="text-danger ms-2 font-bold">{errorMessage.name}</div>
      </div>

      <div className="my-4 mx-4">
        <label htmlFor="email" className="form-label">
          Email : <label className="text-danger">*</label>
        </label>
        <div>
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="off"
            required=""
            className="form-control"
             placeholder="Enter Email..."
            value={userInput.email}
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
          />
        </div>
        <div className="text-danger ms-2 font-bold">{errorMessage.email}</div>

      </div>

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
             placeholder="Enter Username..."
            value={userInput.username}
            onChange={(e) =>
              setUserInput({ ...userInput, username: e.target.value })
            }
            maxLength={12}
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
            value={userInput.password}
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
          />
        </div>
        <div className="text-danger ms-2 font-bold">{errorMessage.password}</div>

      </div>

      <div className="my-4 mx-4">
        <div className="flex items-center justify-between">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password : <label className="text-danger">*</label>
          </label>
        </div>
        <div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="current-password"
            required=""
            className="form-control"
            maxLength={8}
            placeholder="Confirm Your Password..."
            value={userInput.confirmPassword}
            onChange={(e) =>
              setUserInput({ ...userInput, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="text-danger ms-2 font-bold">{errorMessage.confirmPassword}</div>

      </div>

      <div className="text-center my-4 mx-4">
        <button className="  btn btn-outline-primary" onClick={handleSignUp}>
          Sign up
        </button>
      </div>
    </>
  );
};
