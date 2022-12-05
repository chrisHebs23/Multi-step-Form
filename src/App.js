import React, { lazy, Suspense, useState } from "react";

const PersonalInfo = lazy(() =>
  import("./Pages/PersonalInfoPage/PersonalInfo")
);
const SelectPlan = lazy(() => import("./Pages/SelectPlanPage/SelectPlan"));
const AddOn = lazy(() => import("./Pages/AddOnsPage/AddOn"));
const Summary = lazy(() => import("./Pages/SummaryPage/Summary"));
const ThankYou = lazy(() => import("./Pages/ThankYouPage/ThankYou"));

const App = () => {
  const [step, setStep] = useState(1);

  const handleGoBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  const pagesSteps = [
    { step: 1, page: <PersonalInfo /> },
    { step: 2, page: <SelectPlan /> },
    { step: 3, page: <AddOn /> },
    { step: 4, page: <Summary /> },
    { step: 5, page: <ThankYou /> },
  ];
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div>
        {pagesSteps.map((page) => page.step === step && <div>{page.page}</div>)}

        {step}
        <button
          onClick={handleGoBack}
          style={step === 1 ? { display: "none" } : { display: "block" }}
        >
          go back
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </Suspense>
  );
};

export default App;
