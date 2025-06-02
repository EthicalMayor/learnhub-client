"use client";

import OnboardingWelcome from "../components/onboarding/welcome";
import ChooseYourVibe from "../components/onboarding/chooseYourVibe";
import Institution from "../components/onboarding/institution";
import Interest from "../components/onboarding/interest";
import SetupProfile from "../components/onboarding/setupProfile";
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
