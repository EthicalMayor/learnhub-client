"use client"

import { useState } from "react";
import { Check } from "lucide-react";
import vibe from "@/app/assets/images/vibe.png"
import Image from "next/image";

const goalsList = [
  "Ace my course",
  "Build my portfolio",
  "Land an internship",
  "Network across campuses",
  "Just vibes and gist",
];

export default function ChooseYourVibe(props: any) {
    const showWelcome = props.showWelcome
    const [selectedGoals, setSelectedGoals] = useState<string[]>([
        // "Ace my course",
        // "Land an internship",
    ]);

    const toggleGoal = (goal: string) => {
        setSelectedGoals((prev) =>
        prev.includes(goal)
            ? prev.filter((g) => g !== goal)
            : [...prev, goal]
        );
    };

    return (
        <div className="min-h-screen flex w-full items-center justify-between bg-[#FAFBFB]">
            <div className="w-full flex items-center justify-center">
                <Image src={vibe} alt="vibe" className="w-[20rem] "/>
            </div>
            <div className="w-full ">
                <div className="py-8 px-12  w-full">
                    <p className="text-2xl font-medium mb-7 text-black">Choose Your Vibe</p>
                    <p className="text-xl font-medium mb-4 text-black">Pick your top goals</p>
                    <div className="space-y-3 w-full ">
                    {goalsList.map((goal) => {
                        const isSelected = selectedGoals.includes(goal);
                        return (
                        <div
                            key={goal}
                            className={`flex items-center justify-between w-full px-4 py-3 text-[0.9rem] rounded-xl border cursor-pointer transition 
                            ${isSelected ? "border-[#69ABFF]" : "border-gray-300"}`}
                            onClick={() => toggleGoal(goal)}
                        >
                            <span className="text-gray-800">{goal}</span>
                            <div
                            className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center 
                                ${isSelected ? "border-green-500" : "border-gray-300"}`}
                            >
                            {isSelected && <Check className="w-4 h-4 text-green-500" />}
                            </div>
                        </div>
                        );
                    })}
                    </div>

                    <div className="w-full flex justify-between gap-x-4 mt-[6rem]">
                        <button 
                        className="w-full font-medium border border-solid border-[#5281BE] text-[#1F2D70] rounded-xl py-[0.35rem]"
                        onClick={showWelcome}
                        >
                            Skip for now
                        </button>
                        
                        
                        <button className="w-full font-medium bg-[#082AD4] text-white rounded-xl py-[0.35rem]">Next</button>
                    </div>
                </div>
            </div>
        </div>
  );
}
