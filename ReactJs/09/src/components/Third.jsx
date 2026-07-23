import React, { useRef } from "react";

const Third = () => {
  console.log("Third component rendered...");

  let formRef = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.productName.value);
    console.log(formRef.current.productPrice.value);
    console.log(formRef.current.productCategory.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={(e) => (formRef.current.productName = e)}
          type="text"
          placeholder="Enter Product Name"
        />
        <input
          ref={(e) => (formRef.current.productPrice = e)}
          type="text"
          placeholder="Enter Product Price"
        />
        <input
          ref={(e) => (formRef.current.productCategory = e)}
          type="text"
          placeholder="Enter Product Category"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Third;
