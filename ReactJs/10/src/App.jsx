import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  console.log("App component rendered...");

  let {register, handleSubmit, reset} = useForm();

  return (
    <div>
      <h1 className="text">React Hook Form</h1>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
        reset();
      })}>
        <input
          {...register("productName")}
          type="text"
          placeholder="Enter Product Name"
        />
        <input
          {...register("productPrice")}
          type="text"
          placeholder="Enter Product Price"
        />
        <input
          {...register("productCategory")}
          type="text"
          placeholder="Enter Product Category"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default App;
