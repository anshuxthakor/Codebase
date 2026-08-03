import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Component4 = () => {

  let {span1, h1, span2} = useContext(MyStore);

  return (
    <div className="c4 comp">
      <div className="box box4">
        <span>{span1}</span>
        <h1 className="h1">{h1}</h1>
        <span>{span2}</span>
      </div>
    </div>
  );
};

export default Component4;