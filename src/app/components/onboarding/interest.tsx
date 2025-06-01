"use client"

import { useState } from "react";
import { Check } from "lucide-react";
import vibe from "@/app/assets/images/interest.png"
import search_icon from "@/app/assets/images/search_icon.png"
import Image from "next/image";

const goalsList = [
  "Art", "Science", "Design", "UI/UX Design", "News", "Business", "Entrepreneur",
  "Development", "Freelance", "Fashion", "Marketing", "Sport", "Politics", "Family",
  "Learn", "Cars", "Product Management", "Content Writing", "Photography", "AI",
  "Music", "Engineering"
];

export default function Interest(props: any) {
    const showSetupProfile = props.showSetupProfile;
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const toggleGoal = (goal: string) => {
        setSelectedGoals((prev) =>
            prev.includes(goal)
                ? prev.filter((g) => g !== goal)
                : [...prev, goal]
        );
    };

    const filteredGoals = goalsList.filter(goal =>
        goal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen flex w-full items-center justify-between bg-[#FAFBFB]">
            <div className="w-full flex items-center justify-center">
                <Image src={vibe} alt="vibe" className="w-[20rem]" />
            </div>
            <div className="w-full">
                <div className="py-8 px-12 w-[90%]">
                    <p className="text-2xl font-semibold mb-7 text-black" style={{ fontFamily: "sans-serif" }}>
                        Tell us what you love
                    </p>

                    {/* Search Bar */}
                    <div className="flex items-center gap-x-2 mb-5 text-[#474747] text-[15px] bg-[#f3f4fd] py-3 px-4 rounded-full">
                        <Image src={search_icon} alt="search_icon" className="w-6" />
                        <input
                            type="text"
                            placeholder="Search Hobbies"
                            className="w-full bg-transparent outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Goals List */}
                    <div className="flex gap-x-3 flex-wrap gap-y-4 w-full pt-5 border-t-2 border-solid border-[#ececec]">
                        {filteredGoals.length > 0 ? (
                            filteredGoals.map((goal) => {
                                const isSelected = selectedGoals.includes(goal);
                                return (
                                    <div
                                        key={goal}
                                        className={`flex items-center justify-between w-fit px-4 py-3 text-[0.9rem] rounded-full cursor-pointer transition 
                                        ${isSelected ? "bg-[#DAEAFF] text-[#000625]" : "bg-[#EFF6FF] text-[#252938]"}`}
                                        onClick={() => toggleGoal(goal)}
                                    >
                                        <span>{goal}</span>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-gray-400">No matches found.</p>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="w-full flex justify-between gap-x-4 mt-[6rem]">
                        <button
                            className="w-full font-medium border border-solid border-[#5281BE] text-[#1F2D70] rounded-xl py-2"
                        >
                            Skip for now
                        </button>

                        <button
                            className="w-full font-medium bg-[#082AD4] text-white rounded-xl py-2"
                            onClick={showSetupProfile}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
