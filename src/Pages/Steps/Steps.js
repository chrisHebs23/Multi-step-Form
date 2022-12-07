import React, { useContext } from "react";
import { StepContext } from "../../Context/stepContext";
import "./Steps.css";

const Steps = () => {
  const { state } = useContext(StepContext);
  const steps = [1, 2, 3, 4];
  return (
    <div className="step-section">
      <ul className="step-list">
        {steps.map((step) => (
          <div key={step}>
            <li className={state.step === step && "active"}>{step}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
