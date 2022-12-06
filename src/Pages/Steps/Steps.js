import React from "react";

const Steps = ({ pagesSteps }) => {
  return (
    <div className="step-section">
      <ul>
        {pagesSteps.map((step) => (
          <li>{step.step}</li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
