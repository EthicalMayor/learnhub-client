"use client"; // Required if using in app directory (Next.js 13+)

import Image from "next/image";
import onboardng_welcome_bg from "@/app/assets/images/onboardng_welcome_bg.png";
import React, { useRef, useState  } from "react";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

export default function OnbordingWelcome(props: any) {
    const showVibe = props.showVibe
    const [phone, setPhone] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.showPicker?.(); // Trigger native picker if available
    };

    return (
        <div className="bg-[#FAFBFB] flex gap-x-[4rem] justify-between w-full h-screen">
        <div
            className="h-full w-full bg-cover bg-no-repeat bg-center hidden md:block"
            style={{ backgroundImage: `url(${onboardng_welcome_bg.src})` }}
        ></div>

        <div className="h-full w-full text-black flex  items-center-safe  justify-center">
            <div className="w-[80%] h-[80%] max-w-md flex flex-col justify-between">
                <article className="space-y-5">
                    <p className="font-semibold text-[25px] InstrumentSans_Regular mb-10">
                        Basic Info
                    </p>
                    <div className="">
                        <label htmlFor="dob" className="block mb-1 font-medium text-[16px]">
                        Date of Birth
                        </label>
                        <input
                        id="dob"
                        type="date"
                        className="w-full py-2 border border-solid border-[#69ABFF] rounded-2xl px-3 "
                        placeholder="12/05/2005" // won't show on most browsers for type="date"
                        onFocus={handleFocus}
                        ref={inputRef}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block mb-1 font-medium text-[16px]">Gender</label>
                        <div className="font-medium text-[12px] flex gap-4">
                            <button className="bg-[#EEF5FF] text-[#595B66] hover:text-[#000625] focus:text-[#000625] hover:bg-[#DAEAFF] focus:bg-[#DAEAFF] w-[6rem] py-3 rounded-full">Male</button>
                            <button className="bg-[#EEF5FF] text-[#595B66] hover:text-[#000625] focus:text-[#000625] hover:bg-[#DAEAFF] focus:bg-[#DAEAFF] w-[6rem] py-3 rounded-full">Female</button>
                            <button className="bg-[#EEF5FF] text-[#595B66] hover:text-[#000625] focus:text-[#000625] hover:bg-[#DAEAFF] focus:bg-[#DAEAFF] w-[6rem] py-3 rounded-full">Others</button>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="phone" className="block mb-1 font-medium text-[16px]">
                            Phone Number
                        </label>
                        <PhoneInput
                            country={'ng'}
                            value={phone}
                            onChange={setPhone}
                            inputClass="!w-full !py-[1.17rem] !pl-16 !rounded-2xl !border !border-[#69ABFF] !text-[#242424] !font-medium"
                            buttonClass="!border !border-[#69ABFF] !bg-white !rounded-l-2xl !px-3 !py-2"
                            containerClass="!w-full"
                            dropdownClass="!text-black !bg-white !rounded-md !shadow-lg !border !border-gray-300 !text-[12px]"
                            searchClass=""
                            enableSearch
                            inputProps={{
                                name: 'phone',
                                required: true,
                            }}
                        />

                    </div>
                </article>
                <div className="w-full flex justify-center mt-[8rem]">
                    <button 
                    className="w-[80%] bg-[#082AD4] text-white rounded-lg py-2"
                    onClick={showVibe}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}
