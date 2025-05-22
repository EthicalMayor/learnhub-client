"use client"

import Image from "next/image";
import Logo from "@/app/assets/images/Logo.png";
import landing_up_bg from "@/app/assets/images/landing_up_bg.png";
import landing_up_bg_mobile from "@/app/assets/images/landing_up_bg_mobile.png";
import SchoolLogos from "./components/landing/school_logos";
import WhatWeOffer from "./components/landing/what_we_offer";
import Footer from "./components/landing/footer";
import { useState, useEffect } from "react";


export default function Home() {
  const [bgImage, setBgImage] = useState("")

    useEffect (() => {
        const bgImageFunc = () => {
            const windowWidth = window.innerWidth
            setBgImage(windowWidth < 768 ? landing_up_bg_mobile.src : landing_up_bg.src)
        }
        bgImageFunc()
        window.addEventListener('resize', bgImageFunc)
    }, [])
  return (
    <div className="w-full  ">
      <div className="px-[1.5rem] md:px-[3rem] md:py-[1.5rem] py-[0.8rem]">
        <div className="flex flex-col gap-y-4 ">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="lg:w-[10rem] md:w-[8rem] w-[6rem] h-full">
                <Image src={Logo} alt="Logo" />
                </div>

                {/* Right */}
                <div className="flex md:gap-x-9 gap-x-2 items-center">
                    <p className="text-black md:text-[14px] text-[12px]">Log In</p>

                    <button className="px-[2rem] text-[10px] md:px-[4rem] md:text-[16px] py-1 md:py-2 bg-gradient-to-r from-[#0E76FD] from-0% to-[#9747FF] to-65% text-white rounded-full font-medium hover:from-[#0C63DB] hover:to-[#7D3FE5] transition duration-300">
                        Get LearnHub Free
                    </button>
                </div>
            </div>

            {/* After Nav Bar */}
            <div className="w-full text-black">
                <div
                className="bg-cover bg-no-repeat bg-center w-full aspect-[16/9] rounded-2xl sm:aspect-[4/3] lg:aspect-[16/9]"
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
                >
                <div className="px-3 md:px-5 lg:px-9 flex items-center h-full">
                    <div className="flex flex-col md:justify-start gap-y-5 w-full">
                        {/* DISPLAY THIS ONLY IN DESKTOP VIEW */}
                        <div className="hidden md:flex flex-col gap-y-2 ">
                            <div className="text-[#FFFFFF] text-[14px] md:text-[30px] lg:text-[40px] md:text-start text-center">
                                <p>Study Smarter, Together</p>
                                <p>Connect with Peers Who Get It</p>
                            </div>
                            <div className="text-[#D9D6DE] md:text-[15px] lg:text-[20px] md:text-start text-center">
                                <p>Join LearnHub to meet students like you</p>
                                <p>whether you need study group,</p>
                                <p>motivation, or just better notes</p>
                            </div>
                        </div>

                        {/* DISPLAY THIS WHEN IN MOBILE VIEW */}
                        <div className="text-center flex flex-col sm:gap-y-3 gap-y-2 md:hidden">
                            <p className="text-white sm:text-[30px] text-[20px] font-bold">Study. Connect. Thrive</p>
                            <div className="text-[#F3F3F3] text-center sm:text-[15px] text-[10px] ">
                                <p>From study help to real connection.</p>
                                <p>LearnHub brings students like you</p>
                                <p>together.</p>
                            </div>
                        </div>

                        <div className="flex md:justify-start justify-center md:mt-5">
                            <button className="  sm:text-[14px] sm:px-[3.5rem] px-[2.5rem] md:px-[4rem] md:text-[16px] py-1 md:py-2 bg-gradient-to-r from-[#0E76FD] from-0% to-[#9747FF] to-65% text-white rounded-full font-medium hover:from-[#0C63DB] hover:to-[#7D3FE5] transition duration-300">
                                Sign up
                            </button>
                        </div>


                        
                        <div className="flex md:justify-start justify-center">
                            <div className="flex mt-4 md:mt-8">
                                {/* left */}
                                <div className="flex text-white items-center gap-x-2 md:pr-8 md:mr-8 pr-4 mr-4 border-r-2 border-solid border-[#606060]">
                                    <p className="lg:text-[49px] md:text-[39px] sm:text-[30px] text-[25px]">+</p>
                                    <p className="lg:text-[49px] md:text-[39px] sm:text-[30px] text-[25px]">60</p>
                                    <div className="flex flex-col lg:text-[16px] md:text-[12px] text-[11px]">
                                        <p>Universities</p>
                                        <p className="-mt-1">across Africa</p>
                                    </div>
                                </div>

                                {/* right */}
                                <div className="flex text-white items-center gap-x-2">
                                    <p className="lg:text-[49px] md:text-[39px] sm:text-[30px] text-[25px]">+</p>
                                    <p className="lg:text-[49px] md:text-[39px] sm:text-[30px] text-[25px]">100</p>
                                    <div className="flex flex-col lg:text-[16px] md:text-[12px] text-[11px]">
                                        <p>Community</p>
                                        <p className="-mt-1">Groups</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* SCHOOLS LOGOS */}
                <div className="md:mt-6 mt-3">
                  <SchoolLogos/>
                </div>

                {/* WHAT WE OFFER */}
                <div className="md:mt-12 mt-6">
                    <WhatWeOffer/>
                </div>

                
            </div>
        </div>
      </div>

        {/* FOOTER */}
        <div className="md:mt-[20rem] mt-[13rem]">
            <Footer/>
        </div>
    </div>
  );
}
