export const UserFrom = ({
  setUserInput,
  userInput,
  handleOnAdd,
  isEdit,
  handleOnUpdate,
}) => {
 
  return (
    <div className="row mx-3 ">
      <div className="col-md-12 my-3">
        <label className="form-label font-bold" htmlFor="firstName">
          User's Name: <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          type="text"
          name="first_name"
          id="firstName"
          placeholder="Enter name..."
          value={userInput.name}
          onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
          required
        />
        <div className="font-bold text-red-600"></div>
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
