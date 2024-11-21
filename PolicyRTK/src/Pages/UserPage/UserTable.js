export const UserTable = ({ userData, handleOnEdit, handleOnDelete }) => {
  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-md-10">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>User's Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {userData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.userName}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleOnEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleOnDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
