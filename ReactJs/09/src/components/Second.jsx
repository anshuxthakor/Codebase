import React, { useRef } from "react";

const Second = () => {
  const productNameRef = useRef();
  const productPriceRef = useRef();
  const productCategoryRef = useRef();

  console.log("Second component rendered...");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productNameRef.current.value);
    console.log(productPriceRef.current.value);
    console.log(productCategoryRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Product Name"
          ref={productNameRef}
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          ref={productPriceRef}
        />
        <input
          type="text"
          placeholder="Enter Product Category"
          ref={productCategoryRef}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Second;
