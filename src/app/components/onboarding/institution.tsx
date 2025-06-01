"use client"

import { useState } from "react";
import { Check } from "lucide-react";
import vibe from "@/app/assets/images/institution.png"
import Image from "next/image";



export default function Institution(props: any) {
    const showInterest = props.showInterest
    

    return (
        <div className="min-h-screen flex w-full items-center justify-between bg-[#FAFBFB]">
            <div className="w-full flex items-center justify-center">
                <Image src={vibe} alt="vibe" className="w-[20rem] "/>
            </div>
            <div className="w-full ">
                <div className="py-8 px-12  w-[90%]">
                    <p className="text-2xl font-medium mb-7 text-black">Institution & Course</p>
                    
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

                    <div className="w-full flex justify-between gap-x-4 mt-[6rem]">
                        <button 
                        className="w-full font-medium border border-solid border-[#5281BE] text-[#1F2D70] rounded-xl py-2"
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
        </div>
  );
}
