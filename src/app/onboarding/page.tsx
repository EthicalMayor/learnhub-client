"use client";

import OnboardingWelcome from "./components/welcome";
import ChooseYourVibe from "./components/chooseYourVibe";
import Institution from "./components/institution";
import Interest from "./components/interest";
import SetupProfile from "./components/setupProfile";
import { useState } from "react";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState("welcome");

  return (
    <div className="w-full h-full">
      {currentStep === "welcome" && (
        <OnboardingWelcome showVibe={() => setCurrentStep("vibe")} />
      )}
      {currentStep === "vibe" && (
        <ChooseYourVibe
          showInstitution={() => setCurrentStep("institution")}
          showWelcome={() => setCurrentStep("welcome")}
        />
      )}
      {currentStep === "institution" && (
        <Institution
          showInterest={() => setCurrentStep("interest")}
          showVibe={() => setCurrentStep("vibe")}
        />
      )}
      {currentStep === "interest" && (
        <Interest
          showSetupProfile={() => setCurrentStep("profile")}
          showInstitution={() => setCurrentStep("institution")}
        />
      )}
      {currentStep === "profile" && (
        <SetupProfile showInterest={() => setCurrentStep("interest")} />
      )}
    </div>
  );
}
