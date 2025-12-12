"use client";

import Image from "next/image";
import friend_pic from "@/app/assets/images/friend_pic.png";
import friend1 from "@/app/assets/images/friend1.png";
import friend2 from "@/app/assets/images/friend2.png";
import edit_room from "@/app/assets/images/edit_room.png";
import join_room from "@/app/assets/images/join_room.png";
import dashoard_tech_gang from "@/app/assets/images/dashoard_tech_gang.png";
import blue_arrow_right from "@/app/assets/images/blue_arrow_right.png";
import dashboard_ambassador from "@/app/assets/images/dashboard_ambassador.png";
import { Dot } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRef, useState, useEffect } from "react";

export default function Explore() {
  const recommended = ["Recommended", "Based on Interests"];
  const categories = ["All", "Suggested", "Joined"];

  // Connections scroll container ref
  const connectionsRef = useRef<HTMLDivElement>(null);

  // Visibility states for arrows
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleConnectionsScroll = () => {
    const container = connectionsRef.current;
    if (!container) return;

    const atStart = container.scrollLeft <= 10;
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;

    setShowLeft(!atStart);
    setShowRight(!atEnd);
  };

  useEffect(() => {
    handleConnectionsScroll(); // initial check
  }, []);

  // Rooms scroll ref
  const roomsRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (roomsRef.current) {
      roomsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-[5rem] text-black md:pt-[7rem] pb-[5rem] px-3 md:px-10 lg:px-16 space-y-8">
      {/* Header */}
      <div className="text-black space-y-4">
        <h2 className="text-[20px] md:text-[25px] font-semibold">Explore Connections</h2>

        {/* Filters */}
        <div className="flex gap-4 mt-4 text-[10px] md:text-[15px]">
          {recommended.map((item, idx) => (
            <button
              key={idx}
              className="bg-gray-200 hover:bg-blue-100 px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Connections List with Auto-Hiding Arrow Controls */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeft && (
            <button
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
              onClick={() => connectionsRef.current?.scrollBy({ left: -300, behavior: "smooth" })}
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Right Arrow */}
          {showRight && (
            <button
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
              onClick={() => connectionsRef.current?.scrollBy({ left: 300, behavior: "smooth" })}
            >
              <ChevronRight size={18} />
            </button>
          )}

          {/* Scrollable Connections */}
          <div
            ref={connectionsRef}
            onScroll={handleConnectionsScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full scroll-smooth px-6"
          >
            {[...Array(10)].map((_, idx) => (
              <div
                key={idx}
                className="w-[11rem] md:w-[15rem] shrink-0 space-y-3 bg-gray-100 px-3 py-3 rounded-xl shadow-sm snap-start hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <Image
                    src={friend_pic}
                    alt="friend_pic"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                  />
                  <button className="bg-black text-white px-3 py-1 h-fit rounded-full text-[10px] md:text-[13px] hover:bg-gray-800 transition-colors">
                    Connect
                  </button>
                </div>

                <div>
                  <p className="font-medium">Ajayi Kunle</p>

                  <div className="flex items-center mt-2">
                    <div className="relative flex -space-x-2">
                      <Image
                        src={friend1}
                        className="w-5 h-5 md:w-7 md:h-7 rounded-full border-2 border-white"
                        alt=""
                      />
                      <Image
                        src={friend2}
                        className="w-5 h-5 md:w-7 md:h-7 rounded-full border-2 border-white"
                        alt=""
                      />
                    </div>
                    <Dot className="-mx-1" />
                    <p className="text-gray-600 text-[9px] md:text-[12px]">2 mutual connections</p>
                  </div>

                  <div className="flex gap-3 mt-3 text-gray-600 text-[9px] md:text-[11px]">
                    <p>Medicine</p>
                    <p>Mobile Design</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Rooms */}
      <section className="space-y-6">
        <h2 className="text-[20px] md:text-[25px] font-semibold">Campus Rooms</h2>

        {/* Create / Join Room */}
        <div className="flex gap-4 flex-wrap">
          <button className="flex gap-2 py-2 px-3 border border-gray-700 rounded-lg hover:bg-gray-100 transition-colors items-center">
            <Image src={edit_room} alt="edit_room" className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-gray-900 text-[12px] md:text-[15px]">Create Campus Room</p>
          </button>

          <button className="flex gap-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg items-center transition-colors">
            <Image src={join_room} alt="join_room" className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-[12px] md:text-[15px]">Join Campus Room</p>
          </button>
        </div>

        {/* Room Categories */}
        <div className="flex gap-4 mt-4 text-[10px] md:text-[13px]">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="bg-gray-200 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Room Cards */}
        <div
          ref={roomsRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth mt-4"
        >
          {[...Array(10)].map((_, idx) => (
            <div
              key={idx}
              className="w-[8rem] md:w-[12rem] shrink-0 snap-start hover:scale-105 transition-transform cursor-pointer"
            >
              <Image
                src={dashoard_tech_gang}
                alt="tech_gang"
                className="w-full h-[6rem] md:h-[10rem] rounded-lg object-cover shadow-sm"
              />
              <div className="mt-2 flex justify-between items-center">
                <div className="w-[70%]">
                  <p className="font-semibold text-[10px] md:text-[13px]">Tech Gang</p>
                  <p className="text-gray-600 text-[9px] md:text-[10px] line-clamp-2">
                    Tobi, Emma and 15 others are members
                  </p>
                </div>
                <button>
                  <Image src={blue_arrow_right} alt="arrow" className="w-2 md:w-3 h-auto" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Button */}
        <div className="flex justify-center mt-3">
          <button
            onClick={handleScrollRight}
            className="text-blue-700 text-[10px] md:text-[12px] hover:underline"
          >
            More Rooms...
          </button>
        </div>
      </section>

      {/* Ambassador Section */}
      <section className="flex justify-center mt-10">
        <div className="w-[90%] md:w-[80%] py-6 px-4 flex flex-col md:flex-row items-center bg-gray-100 rounded-2xl shadow-md gap-4">
          <Image
            src={dashboard_ambassador}
            alt="ambassador"
            className="w-24 h-20 md:w-28 md:h-24 rounded-lg object-cover"
          />
          <div className="text-center  space-y-2 flex-1">
            <p className="text-gray-800 text-[10px] md:text-[15px]">
              Join us, become our ambassador and help us grow in your campus.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 md:text-[12px] rounded-full hover:bg-blue-700 transition-colors">
              Become an Ambassador
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
