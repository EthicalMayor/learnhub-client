import campus_room from "@/app/assets/images/campus_room.png"
import explore_connection from "@/app/assets/images/explore_connection.png"
import find_your_tribe from "@/app/assets/images/find_your_tribe.png"
import inter_campus_connection from "@/app/assets/images/inter_campus_connection.png"
import Image from "next/image"


export default function WhatWeOffer(){
    return(
        <div className="flex flex-col md:gap-y-16 gap-y-10 py-10 border-y border-solid border-[#b1b0b0]">
            <div className="flex justify-center">
                <p className="px-5 py-1 font-semibold border border-solid border-black text-black  md:rounded-2xl rounded-xl md:text-[30px] text-[15px]">
                    What we are offering?
                </p>
            </div>

            <div className="flex flex-wrap justify-between md:gap-y-20 gap-y-10 md:flex-row flex-col">
                {/* Campus Rooms */}
                <div className="flex md:gap-x-5 gap-x-3 items-center offer_div w-full md:w-[46%]  md:px-4 py-2 rounded-lg px-2">
                    <Image src={campus_room} alt="campus_room" className="lg:w-[5rem] lg:h-[5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"/>
                    <div className="flex flex-col gap-2">
                        <p className="lg:text-[24px] md:text-[15px] text-[12px] font-semibold text-black">Campus Rooms</p>
                        <div className="text-[#616B78] lg:text-[16px] md:text-[12px] text-[10px] font-medium">
                            <p>
                                Start and join rooms just for students on your campus.
                                Create spaces for your study group, interests, or student
                                community, and grow together.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Explore Connections */}
                <div className="flex md:gap-x-5 gap-x-3  items-center offer_div w-full md:w-[46%]  md:px-4 py-2 rounded-lg px-2">
                    <Image src={explore_connection} alt="explore_connection" className="lg:w-[5rem] lg:h-[5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"/>
                    <div className="flex flex-col gap-2">
                        <p className="lg:text-[24px] md:text-[15px] text-[12px] font-semibold text-black">Explore Connections</p>
                        <div className="text-[#616B78] lg:text-[16px] md:text-[12px] text-[10px] font-medium">
                            <p>
                                Discover students on your campus—find your study buddy,
                                connect with creatives like you, or link with entrepreneurs
                                just like yourself.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Find Your Tribe */}
                <div className="flex md:gap-x-5 gap-x-3  items-center offer_div w-full md:w-[46%]  md:px-4 py-2 rounded-lg px-2">
                    <Image src={find_your_tribe} alt="find_your_tribe" className="lg:w-[5rem] lg:h-[5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"/>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-x-4 items-center">
                            <p className="lg:text-[24px] md:text-[15px] text-[12px] font-semibold text-black">Find Your Tribe</p>
                            <p className="text-[8px] md:text-[12px] px-2 bg-[#FFF71B] rounded-full">Coming soon</p>
                        </div>
                        <div className="text-[#616B78] lg:text-[16px] md:text-[12px] text-[10px] font-medium">
                            <p>Join exclusive school Hubs for: Creatives, Tech talents,
                                Entrepreneurs, Marketplace sellers, Career builders and
                                much more...
                            </p>
                        </div>
                    </div>
                </div>

                {/* Inter Campus Connections */}
                <div className="flex md:gap-x-5 gap-x-3  items-center offer_div w-full md:w-[46%]  md:px-4 py-2 rounded-lg px-2">
                    <Image src={inter_campus_connection} alt="inter_campus_connection" className="lg:w-[5rem] lg:h-[5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem]"/>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-x-4 items-center">
                            <p className="lg:text-[24px] md:text-[15px] text-[12px] font-semibold text-black">Inter Campus Connections</p>
                            <p className="text-[8px] md:text-[12px] px-2 bg-[#FFF71B] rounded-full">Coming soon</p>
                        </div>
                        <div className="text-[#616B78] lg:text-[16px] md:text-[12px] text-[10px] font-medium">
                            <p>
                                Your network doesn&apos;t stop at your school, connect, create
                                and collab from campuses everywhere
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}