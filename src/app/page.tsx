"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Assets
import Logo from "@/app/assets/images/Logo.png";
import landingBg from "@/app/assets/images/landing_up_bg.jpg";
import landingDown from "@/app/assets/images/landing_down_img.png";

// Components
import SchoolLogos from "./components/landing/school_logos";
import WhatWeOffer from "./components/landing/what_we_offer";
import UnlockYourPotential from "./components/landing/unlock_your_potential";
import Footer from "./components/landing/footer";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full min-h-screen flex flex-col text-gray-800 bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center py-4 px-5 md:px-12 sticky top-0 z-50 transition duration-150 bg-white">
        <Image src={Logo} alt="Logo" className="w-30 md:w-35" priority />
        <button
          onClick={() => router.push("/signup")}
          className="px-10 py-3 rounded-full bg-blue-600 text-white text-md md:text-lg font-medium hover:bg-blue-700  transition-all duration-200 hover:shadow-xl"
        >
          Join for Free
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full flex items-center justify-center text-center text-white h-[50vh] md:h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${landingBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 container px-4 sm:px-6 flex flex-col items-center justify-center gap-3 sm:gap-5 mt-8 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight max-w-sm sm:max-w-2xl">
            Study Smarter, Together
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl sm:max-w-2xl leading-relaxed">
            Connect with students like you — find study groups, motivation, and better notes to help
            you learn and grow faster.
          </p>

          <div className="mt-4">
            <Link
              href="/signup"
              className="flex gap-2 items-center justify-center hover:gap-4 duration-200 px-10 py-3 sm:py-3 bg-blue-600 text-white rounded-full text-md md:text-lg sm:text-base hover:bg-blue-700 transition-all"
            >
              Get Started
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="hidden md:block"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5l6 7l-6 7"
                />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 text-gray-100">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl sm:text-6xl font-extrabold">+25</h3>
              <p className="text-sm sm:text-base text-gray-300">Universities across Africa</p>
            </div>

            {/* Divider for desktop */}
            <div className="hidden sm:block h-6 w-[1px] bg-gray-400/60" />

            <div className="flex flex-col items-center">
              <h3 className="text-4xl sm:text-6xl font-extrabold">+100</h3>
              <p className="text-sm sm:text-base text-gray-300">Campus Rooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="w-full mt-12 md:mt-20">
        <div className="md:container md:mx-auto md:px-6">
          <SchoolLogos />
        </div>
      </section>

      {/* What We Offer */}
      <section className="container mx-auto mt-16 md:mt-24 px-6">
        <WhatWeOffer />
      </section>

      {/* Ambassador CTA */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 mt-16 overflow-hidden">
  {/* Background Image */}
  <Image
    src={landingDown}
    alt="Campus Connection"
    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:rounded-3xl"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto text-center md:text-left">
    {/* Text Section */}
    <div className="text-white space-y-5 max-w-lg">
      <h2 className="text-3xl md:text-4xl font-bold leading-snug">
        Join the Movement. <br className="hidden md:block" /> Launch in Your
        University
      </h2>
      <p className="text-gray-200 text-sm md:text-base leading-relaxed">
        Become part of a growing student network connecting learners and
        changemakers across campuses. Let’s make learning more collaborative!
      </p>
      <button
        onClick={() => router.push("/signup")}
        className="inline-block px-8 py-3  text-white bg-blue-600 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      >
        Become a Campus Ambassador
      </button>
    </div>

    {/* Decorative / Secondary Image Box */}
    <div className="hidden md:block relative w-full md:w-1/2">
      <div className="bg-white/10 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20 transition-transform duration-300">
        <Image
          src={landingDown}
          alt="Campus Ambassador"
          className="w-full h-72 object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</section>


      {/* Unlock Section */}
      <section className="py-16 px-6 md:px-12">
        <UnlockYourPotential />
      </section>

      <Footer />
    </main>
  );
}

// Stat Component
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-4xl md:text-5xl font-bold text-white">{value}</p>
      <p className="text-sm md:text-base text-gray-200 mt-1 max-w-[120px]">{label}</p>
    </div>
  );
}
