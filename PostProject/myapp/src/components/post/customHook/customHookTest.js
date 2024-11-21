import { useState } from "react";
import { useFetch } from "./useFetch";

export const CustomeHookTest = () => {
  const [urlInput,setUrlInput] = useState("https://fakestoreapi.com/products");

  console.log(urlInput);
  const { data, loading } = useFetch(urlInput);
  // https://fakestoreapi.com/products
  // https://fakestoreapi.com/carts
  console.log(data);



  if (loading) {
    return (
      <div className="text-center mt-10">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Your adventure is about to begin
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex ms-10 mt-10">
        <div className="col-md-3">
          <label className="form-label">URL :</label>
          <input className="form-control" type="text" value={urlInput} onChange={(e) => setUrlInput(e.target.value)}/>
        </div>
        {/* <div className="ms-3 mt-8">
           <button className="btn btn-outline-primary">
              Fetch
           </button>
        </div> */}
      </div>
      <div className="pt-10">
        {data.map((user) => (
          <ul className="mx-3" key={user.id}>
            <li>{user.id}</li>
            <li>{user.category}</li>
            <li>{user.description}</li>
            <li>{user.price}</li>
            <li>{user.title}</li>
            <hr className="my-3"></hr>
          </ul>
        ))}
      </div>
    </>
  );
};
