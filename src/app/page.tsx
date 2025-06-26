"use client";

import Image from "next/image";
import Logo from "@/app/assets/images/Logo.png";
import landing_up_bg from "@/app/assets/images/landing_up_bg.png";
import landing_up_bg_2 from "@/app/assets/images/landing_up_bg_2.png";
import landing_up_bg_3 from "@/app/assets/images/landing_up_bg_3.png";
import landing_up_bg_4 from "@/app/assets/images/landing_up_bg_4.png";
import landing_up_bg_mobile from "@/app/assets/images/landing_up_bg_mobile.png";
import landing_up_bg_mobile_2 from "@/app/assets/images/landing_up_bg_mobile_2.png";
import landing_up_bg_mobile_3 from "@/app/assets/images/landing_up_bg_mobile_3.png";
import landing_down_img from "@/app/assets/images/landing_down_img.png"
import SchoolLogos from "./components/landing/school_logos";
import WhatWeOffer from "./components/landing/what_we_offer";
import UnlockYourPotential from "./components/landing/unlock_your_potential";
import Footer from "./components/landing/footer";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Image sets
const bg_desktop = [
  landing_up_bg.src,
  landing_up_bg_2.src,
  landing_up_bg_3.src,
  landing_up_bg_4.src,
];
const bg_mobile = [
  landing_up_bg_mobile.src,
  landing_up_bg_mobile_2.src,
  landing_up_bg_mobile_3.src,
];

export default function Home() {
  const [bgImages, setBgImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const router = useRouter();

  // Load and switch images based on screen size
  useEffect(() => {
    const updateImages = () => {
      const isMobile = window.innerWidth < 768;
      const imagesToUse = isMobile ? bg_mobile : bg_desktop;
      setBgImages(imagesToUse);

      // Preload
      const preload = async () => {
        const promises = imagesToUse.map(
          (src) =>
            new Promise<void>((resolve, reject) => {
              const img = new window.Image();
              img.src = src;
              img.onload = () => resolve();
              img.onerror = () => reject();
            })
        );

        try {
          await Promise.all(promises);
          setImagesLoaded(true);
        } catch (err) {
          console.error("Image preload failed", err);
          setImagesLoaded(true); // still render
        }
      };

      preload();
    };

    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  // Rotate backgrounds
  useEffect(() => {
    if (!imagesLoaded || bgImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [bgImages, imagesLoaded]);

  // Show spinner until ready
  if (!imagesLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-around relative text-black ">
      <div className=" md:py-[1.5rem] py-[0.8rem]">
        <div className="flex flex-col gap-y-4">
          {/* Navbar */}
          <div className="flex justify-between items-center mx-[1.5rem] md:mx-[3rem]">
            <div className="lg:w-[10rem] md:w-[8rem] w-[6rem] h-full">
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="flex md:gap-x-9 gap-x-2 items-center">
              <button
                className="px-[1rem] text-[10px] md:px-[4rem] md:text-[16px] py-1 md:py-2 bg-gradient-to-r from-[#0E76FD] to-[#9747FF] text-white rounded-full font-medium hover:from-[#0C63DB] hover:to-[#7D3FE5] transition duration-300"
                onClick={() => router.push("/signup")}
              >
                Join for Free now
              </button>
            </div>
          </div>

          {/* Hero Section with Fade Background */}
          <div className="md:mx-[3rem]">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/9] md:rounded-2xl overflow-hidden">
              {bgImages.map((src, i) => (
                <div
                  key={i}
                  className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                    i === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}

              <div className="relative z-10 h-full flex items-center px-3 md:px-5 lg:px-9">
                <div className="flex flex-col gap-y-4 sm:gap-y-3 md:gap-y-5 w-full">
                  {/* Desktop */}
                  <div className="hidden md:flex flex-col gap-y-2 text-white">
                    <div className="text-[30px] lg:text-[40px] text-start">
                      <p>Study Smarter, Together</p>
                      <p className="mt-1">Connect with Peers Who Get It</p>
                    </div>
                    <div className="text-[#D9D6DE] text-[15px] lg:text-[20px] text-start">
                      <p>Join LearnHub to meet students like you</p>
                      <p>whether you need study group,</p>
                      <p>motivation, or just better notes</p>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden h-fit text-white text-center w-[70%] mx-auto flex flex-col gap-y-1 sm:gap-y-3">
                    
                  </div>

                  <div className="hidden md:flex md:justify-start justify-center mt-4">
                    <Link
                      href="/signup"
                      className="text-center sm:text-[14px] text-[12px] px-[3rem] md:px-[4rem] md:text-[16px] py-1 md:py-2 bg-gradient-to-r from-[#0E76FD] to-[#9747FF] text-white rounded-full font-medium hover:from-[#0C63DB] hover:to-[#7D3FE5] transition duration-300"
                    >
                      Sign up
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="hidden md:flex md:justify-start justify-center">
                    <div className="flex sm:mt-4 md:mt-8">
                      <div className="flex text-white items-center gap-x-2 md:pr-8 md:mr-8 pr-4 mr-4 border-r-2 border-[#606060]">
                        <p className="text-[25px] sm:text-[30px] md:text-[39px] lg:text-[49px]">+25</p>
                        <div className="flex flex-col text-[8px] md:text-[12px] lg:text-[16px]">
                          <p>Universities</p>
                          <p className="-mt-1">across Africa</p>
                        </div>
                      </div>
                      <div className="flex text-white items-center gap-x-2">
                        <p className="text-[25px] sm:text-[30px] md:text-[39px] lg:text-[49px]">+100</p>
                        <div className="flex flex-col text-[8px] md:text-[12px] lg:text-[16px]">
                          <p>Campus</p>
                          <p className="-mt-1">Rooms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* For Mobile Only */}
          <div className="md:hidden mx-[1.5rem] md:mx-[3rem]">
            <div className="h-fit text-black text-center w-[90%] mx-auto flex flex-col gap-y-1 sm:gap-y-3" >
                <p className=" text-[32px] font-bold"  style={{ fontFamily: "WixMadeforDisplay", fontWeight: "900", lineHeight: "2rem" }}>
                Learn. Connect. Collaborate.
                </p>
                <p className="text-[20px] text-[#323232] font-semibold">
                Campus is full of opportunities. 
                </p>
                <p className="text-[12px] text-[#4A4A4A] font-medium">
                    Find Friends, network smarter, join rooms, <br/> and grow with other students
                </p>
            </div>

            <div className="flex md:justify-start justify-center mt-4 mx-[1.5rem] md:mx-[3rem]">
                <Link
                href="/signup"
                className="text-center sm:text-[14px] text-[12px] px-[3rem] md:px-[4rem] md:text-[16px] py-1 md:py-2 bg-gradient-to-r from-[#0E76FD] to-[#9747FF] text-white rounded-full font-medium hover:from-[#0C63DB] hover:to-[#7D3FE5] transition duration-300"
                >
                Sign up
                </Link>
            </div>

            <div className="flex md:justify-start justify-center text-black font-semibold mt-[2rem] mx-[1.5rem] md:mx-[3rem]">
                <div className="flex sm:mt-4 md:mt-8">
                <div className="flex  items-center gap-x-2 md:pr-8 md:mr-8 pr-4 mr-4 border-r-2 border-[#606060]">
                    <p className="text-[25px] sm:text-[30px] md:text-[39px] lg:text-[49px]">+25</p>
                    <div className="flex flex-col text-[8px] md:text-[12px] lg:text-[16px]">
                    <p>Universities</p>
                    <p className="-mt-1">across Africa</p>
                    </div>
                </div>
                <div className="flex  items-center gap-x-2">
                    <p className="text-[25px] sm:text-[30px] md:text-[39px] lg:text-[49px]">+100</p>
                    <div className="flex flex-col text-[8px] md:text-[12px] lg:text-[16px]">
                    <p>Campus</p>
                    <p className="-mt-1">Rooms</p>
                    </div>
                </div>
                </div>
            </div>
          </div>

          {/* Remaining Sections */}
          <div className="md:mt-6 mt-3 mx-[1.5rem] md:mx-[3rem]">
            <SchoolLogos />
          </div>

          <div className="md:mt-12 mt-6 mx-[1.5rem] md:mx-[3rem]">
            <WhatWeOffer />
          </div>

          <section className="flex text-black justify-center my-3 mx-[1.5rem] md:mx-[3rem]">
            <article className="flex flex-col text-center w-[90%]">
              <Image src={landing_down_img} alt="landing_down_img" style={{width: "100%"}}/>
              <div className="flex justify-center">
                <div className="w-[90%] md:w-[60%]">
                  <p className="text-[18px] md:text-[30px] mt-6 font-semibold">Help us launch in your University</p>
                  <button
                    className="mt-2 px-[1rem] text-[12px] md:px-[2rem] w-full md:text-[20px] py-2 md:py-2 bg-gradient-to-r from-[#0E76FD] to-[#9747FF] text-white rounded-full font-medium hover:from-[#0C63DB] hover:to-[#7D3FE5] transition duration-300"
                    onClick={() => router.push("/signup")}
                  >
                    Become a LearnHub campus ambassador
                  </button>
                </div>
              </div>
            </article>
          </section>

          <div className="md:mt-6 mt-3 border-t border-solid border-[#9F9F9F] md:mb-[20rem] mb-[7rem] mx-[1.5rem] md:mx-[3rem]">
            <UnlockYourPotential />
          </div>
          
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
