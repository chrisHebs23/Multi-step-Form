import React, { useContext } from "react";
import { StepContext } from "../Context/stepContext";

const StepChange = () => {
  const { state, dispatch } = useContext(StepContext);
  console.log(state.step);
  return (
    <div style={state.step > 4 ? { display: "none" } : { display: "block" }}>
      <button
        onClick={() => dispatch({ type: "back" })}
        style={state.step === 1 ? { display: "none" } : { display: "block" }}
      >
        go back
      </button>
      <button onClick={() => dispatch({ type: "next" })}>Next</button>
    </div>
  );
};

export default StepChange;
