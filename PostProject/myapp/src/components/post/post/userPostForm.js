export const UserPostForm = ({
  username,
  postInput,
  setPostInput,
  handleOnAdd,
  isEdit,
  handleOnUpdate,
}) => {
  return (
    <div className="row mx-3">
      <div className="col-md-12 my-3">
        <label className="form-label font-bold">
          Username: <span className="text-danger">*</span>
        </label>

        <input className="form-control" autoFocus readOnly value={username} />
      </div>

      <div className="col-md-12 my-3">
        <label className="form-label font-bold">
          Description: <span className="text-danger">*</span>
        </label>
        <textarea
          className="form-control"
          placeholder="Enter description..."
          value={postInput.description}
          onChange={(e) =>
            setPostInput({ ...postInput, description: e.target.value })
          }
        ></textarea>
      </div>

      <div className="text-center my-3">
        {isEdit ? (
          <button className="btn btn-outline-warning" onClick={handleOnUpdate}>
            Update
          </button>
        ) : (
          <button className="btn btn-outline-primary" onClick={handleOnAdd}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};
