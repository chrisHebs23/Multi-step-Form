import React, { lazy, Suspense, useState } from "react";
import StepChange from "./components/StepChange";
import { StepProvider } from "./Context/stepContext";
import Steps from "./Pages/Steps/Steps";

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
      <StepProvider>
        <div>
          {/* Step section */}
          <div>
            <Steps pagesSteps={pagesSteps} />
          </div>

          {/* forms */}
          <div>
            {pagesSteps.map(
              (page) => page.step === step && <div>{page.page}</div>
            )}
          </div>

          <StepChange
            step={step}
            handleGoBack={handleGoBack}
            handleNext={handleNext}
          />
        </div>
      </StepProvider>
    </Suspense>
  );
};

export default App;
