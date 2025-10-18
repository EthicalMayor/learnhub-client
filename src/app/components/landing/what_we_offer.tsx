import Image from "next/image";
import campus_room from "@/app/assets/images/campus_room.png";
import explore_connection from "@/app/assets/images/explore_connection.png";
import find_your_tribe from "@/app/assets/images/find_your_tribe.png";
import inter_campus_connection from "@/app/assets/images/inter_campus_connection.png";

export default function WhatWeOffer() {
  const offers = [
    {
      title: "Campus Rooms",
      desc: "Start or join campus-only rooms to study, chat, and collaborate with classmates.",
      img: campus_room,
    },
    {
      title: "Explore Connections",
      desc: "Meet students with similar goals or passions, and grow your campus circle.",
      img: explore_connection,
    },
    {
      title: "Find Your Tribe",
      desc: "Join special hubs for creatives, techies, entrepreneurs, and more.",
      img: find_your_tribe,
      tag: "Coming soon",
    },
    {
      title: "Inter Campus Connections",
      desc: "Connect and collaborate with students from other universities.",
      img: inter_campus_connection,
      tag: "Coming soon",
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Title */}
        <div className="flex justify-center mb-10">
          <p className="inline-block text-lg md:text-2xl font-semibold">
            What We Are Offering
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative group flex items-start gap-4 sm:gap-6 bg-white rounded-2xl p-5 sm:p-7 shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              {/* Coming Soon Tag */}
              {offer.tag && (
                <span className="absolute top-0 left-0 rounded-tl-2xl rounded-br-xl bg-yellow-300 text-gray-800 text-[10px] sm:text-xs font-medium px-3 py-1 shadow-sm">
                  {offer.tag}
                </span>
              )}

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={offer.img}
                    alt={offer.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                  {offer.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {offer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
