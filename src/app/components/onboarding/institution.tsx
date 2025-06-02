"use client"

import { useState } from "react";
import { Check } from "lucide-react";
import vibe from "@/app/assets/images/institution.png"
import back_icon from "@/app/assets/images/back_icon.png"
import skip_icon from "@/app/assets/images/skip_icon.png"
import Image from "next/image";

export default function Institution(props: any) {
    const showInterest = props.showInterest
    const showVibe = props.showVibe
    

    return (
        <div className="min-h-screen px-5 md:px-0 flex flex-col md:flex-row w-full justify-between bg-[#FAFBFB]">
            <header className="flex md:hidden justify-between items-center my-7 w-full">
                <button 
                    className="w-fit flex gap-x-2 font-medium text-white rounded-lg h-fit py-2"
                    onClick={showVibe}
                >
                    <Image src={back_icon} alt="back_icon" className="w-3 "/>
                    <p className="text-black">Back</p>
                </button>
                <h1 className="text-xl font-semibold text-black" style={{fontFamily: "sans-serif"}}>Institution & Course</h1>
                <button 
                    className="w-fit flex gap-x-2 font-medium text-white rounded-lg h-fit py-2"
                    onClick={showInterest}
                >
                    <p className="text-black">Skip</p>
                    <Image src={skip_icon} alt="back_icon" className="w-3"/>
                </button>
            </header>
            <div className="w-full flex items-center justify-center">
                <Image src={vibe} alt="vibe" className="w-[20rem] "/>
            </div>
            <div className="w-full py-12 md:px-12  md:w-[90%] flex flex-col justify-between">
                <div className="">
                    <header className="hidden md:flex justify-between items-center mb-7">
                        <button 
                            className="w-fit px-5 font-medium bg-[#082AD4] text-white rounded-lg h-fit py-2"
                            onClick={showVibe}
                        >
                            Back
                        </button>
                        <h1 className="text-2xl font-semibold text-black" style={{fontFamily: "sans-serif"}}>Institution & Course</h1>
                    </header>
                    
                    <div className="space-y-3 w-full text-[#474747] text-[15px]">
                        <input 
                            type="text" 
                            className="py-3 px-5 w-full border border-solid border-[#5281BE] rounded-xl" 
                            placeholder="School / Institution"
                        />
                        <input 
                            type="text" 
                            className="py-3 px-5 w-full border border-solid border-[#5281BE] rounded-xl" 
                            placeholder="Major / Course"
                        />
                        <input 
                            type="text" 
                            className="py-3 px-5 w-full border border-solid border-[#5281BE] rounded-xl" 
                            placeholder="Level / Year"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between gap-x-4 mt-[6rem]">
                    <button 
                    className="w-full font-medium border border-solid border-[#5281BE] text-[#1F2D70] rounded-xl py-2"
                    onClick={showInterest}
                    >
                        Skip for now
                    </button>
                    
                    
                    <button 
                        className="w-full font-medium bg-[#082AD4] text-white rounded-xl py-2"
                        onClick={showInterest}
                        >
                            Next
                        </button>
                </div>
            </div>
        </div>
  );
}
