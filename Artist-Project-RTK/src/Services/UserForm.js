export const UserForm = ({ userDetails, setUserDetails, handleOnAdd }) => {
  return (
    <div className="container">
      <div className="content">
        <h3 className="text-center mt-4">User Page</h3>
        <div className="d-flex justify-content-center">
          <form>
            <div
              className="card p-5 mb-5 shadow bg-body-tertiary rounded"
              style={{ width: "400px" }}
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter User's name"
                  value={userDetails.userName}
                  onChange={(e) => setUserDetails({ ...userDetails, userName: e.target.value })
                  }
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-success"
                  id="addButton"
                  onClick={handleOnAdd}
                >
                  Add user's
                </button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
