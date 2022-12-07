import { createContext, useReducer } from "react";

const StepContext = createContext();

const stepReducer = (state, action) => {
  switch (action.type) {
    case "next":
      return { step: state.step + 1 };
    case "back":
      return { step: state.step - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const StepProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stepReducer, { step: 1 });

  const value = { state, dispatch };
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

export { StepContext, StepProvider };
