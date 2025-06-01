"use client"

import OnbordingWelcome from "../components/onboarding/welcome";
import ChooseYourVibe from "../components/onboarding/chooseYourVibe";
import Institution from "../components/onboarding/institution";
import Interest from "../components/onboarding/interest";
import SetupProfile from "../components/onboarding/setupProfile";
import { useState } from "react";

export default function Onboarding(){
    const [showOnbordingWelcome, setShowOnbordingWelcome] = useState(true)
    const [showChooseYourVibe, setShowChooseYourVibe] = useState(false)
    const [showChooseInstitution, setShowChooseInstitution] = useState(false)
    const [showChooseInterest, setShowChooseInterest] = useState(false)
    const [showSetupProfile, setShowSetupProfile] = useState(false)
    

    const showOnbordingWelcomeFunc = () => {
        setShowOnbordingWelcome(true)
        setShowChooseYourVibe(false)
        setShowChooseInstitution(false)
        setShowSetupProfile(false)
    }

    const showChooseYourVibeFunc = () => {
        setShowOnbordingWelcome(false)
        setShowChooseYourVibe(true)
        setShowChooseInstitution(false)
        setShowSetupProfile(false)
    }

    const showChooseInstitutionFunc = () => {
        setShowChooseYourVibe(false)
        setShowOnbordingWelcome(false)
        setShowChooseInstitution(true)
        setShowSetupProfile(false)
    }

    const showChooseInterestFunc = () => {
        setShowChooseYourVibe(false)
        setShowOnbordingWelcome(false)
        setShowChooseInstitution(false)
        setShowChooseInterest(true)
        setShowSetupProfile(false)
    }

    const showSetupProfileFunc = () => {
        setShowChooseYourVibe(false)
        setShowOnbordingWelcome(false)
        setShowChooseInstitution(false)
        setShowChooseInterest(false)
        setShowSetupProfile(true)
    }
    return(
        <div className="w-full h-full">
            {showOnbordingWelcome && 
            <div className="">
                <OnbordingWelcome showVibe={showChooseYourVibeFunc}/>
            </div>
            }
            
            {showChooseYourVibe && 
            <div className="">
                <ChooseYourVibe showInstitution={showChooseInstitutionFunc}/>
            </div>
            }

            {showChooseInstitution && 
            <div className="">
                <Institution showInterest={showChooseInterestFunc}/>
            </div>
            }

            {showChooseInterest && 
            <div className="">
                <Interest showSetupProfile={showSetupProfileFunc}/>
            </div>
            }

            {showSetupProfile && 
            <div className="">
                <SetupProfile/>
            </div>
            }
            
        </div>
    )
}