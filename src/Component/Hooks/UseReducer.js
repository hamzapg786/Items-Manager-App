import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCRE") {
    state = state + 1;
  }
  if (action.type === "DECR" && state > 0) {
    state = state - 1;
  }
  return state;
};
const initialValue = 0;

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "INCRE" })}>INCRE</button>
        <button onClick={() => dispatch({ type: "DECR" })}>DECR</button>
      </div>
    </>
  );
};

export default UseReducer;
