import { createContext, useReducer } from "react";

const StepContext = createContext();

const stepReducer = (state, action) => {
  switch (action.type) {
    case "next":
      return { count: state.count + 1 };
    case "back":
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const StepProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stepReducer, { step: 0 });

  const value = { state, dispatch };
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

export { StepContext, StepProvider };
