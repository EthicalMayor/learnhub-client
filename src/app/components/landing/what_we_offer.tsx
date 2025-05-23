import campus_room from "@/app/assets/images/campus_room.png"
import explore_connection from "@/app/assets/images/explore_connection.png"
import find_your_tribe from "@/app/assets/images/find_your_tribe.png"
import inter_campus_connection from "@/app/assets/images/inter_campus_connection.png"
import Image from "next/image"
import Link from "next/link"

export default function WhatWeOffer(){
    return(
        <div className="flex flex-col md:gap-y-16 gap-y-10 pb-7 border-b border-solid border-[#9F9F9F]">
            <div className="flex justify-center">
                <p className="px-5 py-1 font-semibold border border-solid border-black text-black  md:rounded-2xl rounded-xl md:text-[30px] text-[15px]">
                    What we are offering?
                </p>
            </div>

            <div className="flex flex-wrap justify-between md:gap-y-20 gap-y-10 md:flex-row flex-col">
                {/* Campus Rooms */}
                <div className="flex md:gap-x-5 gap-x-3 items-center">
                    <Image src={campus_room} alt="campus_room" className="lg:w-[5rem] lg:h-[5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"/>
                    <div className="flex flex-col gap-2">
                        <p className="lg:text-[24px] md:text-[15px] text-[12px] font-semibold text-black">Campus Rooms</p>
                        <div className="text-[#616B78] lg:text-[16px] md:text-[12px] text-[10px] font-medium">
                            <p>Start and join rooms just for students on your campus.</p>
                            <p className="-mt-1">Create spaces for your study group, interests, or student</p>
                            <p className="-mt-1">community, and grow together.</p>
                        </div>
                    </div>
                </div>

                {/* Explore Connections */}
                <div className="flex md:gap-x-5 gap-x-3  items-center">
                    <Image src={explore_connection} alt="explore_connection" className="lg:w-[5rem] lg:h-[5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"/>
                    <div className="flex flex-col gap-2">
                        <p className="lg:text-[24px] md:text-[15px] text-[12px] font-semibold text-black">Explore Connections</p>
                        <div className="text-[#616B78] lg:text-[16px] md:text-[12px] text-[10px] font-medium">
                            <p>Discover students on your campus—find your study buddy,</p>
                            <p className="-mt-1">connect with creatives like you, or link with entrepreneurs</p>
                            <p className="-mt-1">just like yourself.</p>
                        </div>
                    </div>
                </div>

                {/* Find Your Tribe */}
                <div className="flex md:gap-x-5 gap-x-3  items-center">
                    <Image src={find_your_tribe} alt="find_your_tribe" className="lg:w-[5rem] lg:h-[5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"/>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-x-4 items-center">
                            <p className="lg:text-[24px] md:text-[15px] text-[12px] font-semibold text-black">Find Your Tribe</p>
                            <p className="text-[12px] px-2 bg-[#FFF71B] rounded-full">Coming soon</p>
                        </div>
                        <div className="text-[#616B78] lg:text-[16px] md:text-[12px] text-[10px] font-medium">
                            <p>Join exclusive school Hubs for: Creatives, Tech talents,</p>
                            <p className="-mt-1">Entrepreneurs, Marketplace sellers, Career builders and</p>
                            <p className="-mt-1">much more...</p>
                        </div>
                    </div>
                </div>

                {/* Inter Campus Connections */}
                <div className="flex md:gap-x-5 gap-x-3  items-center">
                    <Image src={inter_campus_connection} alt="inter_campus_connection" className="lg:w-[5rem] lg:h-[5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"/>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-x-4 items-center">
                            <p className="lg:text-[24px] md:text-[15px] text-[12px] font-semibold text-black">Inter Campus Connections</p>
                            <p className="text-[12px] px-2 bg-[#FFF71B] rounded-full">Coming soon</p>
                        </div>
                        <div className="text-[#616B78] lg:text-[16px] md:text-[12px] text-[10px] font-medium">
                            <p>Your network doesn&apos;t stop at your school, connect, create</p>
                            <p className="-mt-1">and collab from campuses everywhere</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sign up button */}
            <div className="flex justify-center">
                <div className="flex flex-col gap-y-2 w-full justify-center items-center">
                    <p className="text-[16px] text-black font-semibold text-center">Ready to connect?</p>
                    <Link href="/signup">
                        <button className="  sm:text-[14px] sm:px-[3.5rem] md:w-[15rem] w-full md:text-[16px] py-[0.4rem] md:py-[0.6rem] bg-gradient-to-r from-[#0E76FD] from-0% to-[#9747FF] to-65% text-white rounded-full font-medium hover:from-[#0C63DB] hover:to-[#7D3FE5] transition duration-300">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}