"use client"

import { useRef, useState } from "react";
import { Check } from "lucide-react";
import final_onboarding from "@/app/assets/images/final_onboarding.png";
import setup_profile_bg from "@/app/assets/images/setup_profile_bg.png";
import select_camera_icon from "@/app/assets/images/select_camera_icon.png";
import Image from "next/image";

export default function Final(props: any) {
    const showInterest = props.showInterest;

    return (
        <div 
            className="h-screen flex w-full text-white 
                    items-center justify-center bg-[#1F1F1F]">
            <section className="flex flex-col justify-between h-[70vh]">
                <article className="space-y-[3rem] w-[20rem]">
                    <h1 className="font-bold text-[20px]  text-center" style={{fontFamily: "sans-serif"}}>You are in</h1>
                    <figure className="flex flex-col gap-y-2 items-center">
                        <div className="">
                            <Image 
                                src={final_onboarding} 
                                alt="final_onboarding" 
                                className="w-[10rem] h-[10rem] rounded-full object-cover" 
                                width={160}
                                height={160}
                            />
                        </div>
                    </figure>
                </article>

                {/* Navigation Buttons */}
                <div className="w-full flex justify-between gap-x-4 mt-4">
                    <button
                        className="w-full font-medium border border-solid border-[#002BFF] rounded-xl py-2"
                    >
                        Edit Profile
                    </button>

                    <button
                        className="w-full font-medium bg-[#082AD4] text-white rounded-xl py-2"
                        onClick={showInterest}
                    >
                        Create My Account
                    </button>
                </div>
            </section>
        </div>
    );
}
