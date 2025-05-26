"use client"

import OnbordingWelcome from "../components/onboarding/welcome";
import ChooseYourVibe from "../components/onboarding/chooseYourVibe";
import { useState } from "react";

export default function Onboarding(){
    const [showOnbordingWelcome, setShowOnbordingWelcome] = useState(true)
    const [showChooseYourVibe, setShowChooseYourVibe] = useState(false)

    const showOnbordingWelcomeFunc = () => {
        setShowOnbordingWelcome(true)
        setShowChooseYourVibe(false)
    }

    const showChooseYourVibeFunc = () => {
        setShowChooseYourVibe(true)
        setShowOnbordingWelcome(false)
    }
    return(
        <div className="w-full h-full">
            {showOnbordingWelcome && 
            <div className="">
                <OnbordingWelcome showVibe={showChooseYourVibeFunc}/>
            </div>
            }
            
            {showChooseYourVibe && 
            <div className="showChooseYourVibe">
                <ChooseYourVibe showWelcome={showOnbordingWelcomeFunc}/>
            </div>
            }
            
        </div>
    )
}