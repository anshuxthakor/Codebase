import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counterSlice";

const App = () => {
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.counter);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 border-white flex flex-col items-center justify-center px-20 py-12 rounded-2xl">
        <h1 className="text-7xl text-white font-bold">{count}</h1>
        <div className="flex space-x-4 mt-4">
          <button
            className="bg-blue-500 active:scale-95 transition-all duration-100 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-emerald-500 active:scale-95 transition-all duration-100 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={() => dispatch(decrement("Arguments"))}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
