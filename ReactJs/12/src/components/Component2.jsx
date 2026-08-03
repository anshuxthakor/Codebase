import React from "react";
import Component3 from "./Component3";

const Component2 = () => {
  return (
    <div className="c2 comp">
      <h1>Component 2</h1>
      <div className="box box2">
        <Component3 />
      </div>
    </div>
  );
};

export default Component2;
