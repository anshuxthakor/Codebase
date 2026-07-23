import React, { useRef } from "react";

const First = () => {
  console.log("First component rendered");
  let inputRef = useRef();

  return (
    <div className="center">
      <input ref={inputRef} type="text" placeholder="Enter Anything..." />
      <button className="btn"
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default First;