import React from "react";

export const UserForm = ({
  userDetails,
  setUserDetails,
  isEdit,
  handleOnUpdate,
  handleOnAdd
}) => {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-5" style={{ fontSize: '2rem' }} >User Page</h2>
        <div className="row justify-content-center">
          <div className="col-md-12">
          <div className="mb-3 mt-5 text-center">
              <label htmlFor="name" className="form-label">
                <strong>User's Name</strong>
              </label>
              <input
                type="text"
                className="form-control border border-black mx-auto text-center" // Center the input field
                id="name"
                placeholder="Enter name"
                value={userDetails.userName}
                onChange={(e) => setUserDetails({ ...userDetails, userName: e.target.value })}
                style={{ width: '60%' }} // Adjust the width of the input box
              />
            
            </div>
            <div className="text-center">
              {isEdit ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleOnUpdate}
                >
                  Update
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleOnAdd}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
