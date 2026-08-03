import React from "react";
import Component2 from "./Component2";

const Component1 = () => {
  return (
    <div className="c1 comp">
      <h1>Component 1</h1>
      <div className="box box1">
        <Component2 />
      </div>
    </div>
  );
};

export default Component1;