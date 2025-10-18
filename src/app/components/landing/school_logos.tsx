"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

import unilorin from "@/app/assets/school_logos/unilorin.png";
import uniben from "@/app/assets/school_logos/uniben.png";
import uniosun from "@/app/assets/school_logos/uniosun.png";
import ui from "@/app/assets/school_logos/ui.png";
import igbinedion from "@/app/assets/school_logos/igbinedion.png";
import unijos from "@/app/assets/school_logos/unijos.png";
import caleb from "@/app/assets/school_logos/caleb.png";
import funaab from "@/app/assets/school_logos/funaab.png";
import redeemers from "@/app/assets/school_logos/redeemers.png";
import adeleke from "@/app/assets/school_logos/adeleke.png";
import unn from "@/app/assets/school_logos/unn.png";
import fuoye from "@/app/assets/school_logos/fuoye.png";
import oau from "@/app/assets/school_logos/oau.png";
import bells from "@/app/assets/school_logos/bells.png";
import medicine from "@/app/assets/school_logos/medicine.png";
import covenant from "@/app/assets/school_logos/covenant.png";
import unilag from "@/app/assets/school_logos/unilag.png";
import lasu from "@/app/assets/school_logos/lasu.png";
import babcock from "@/app/assets/school_logos/babcock.png";
import lasucom from "@/app/assets/school_logos/lasucom.png";

export default function SchoolLogos() {
  const logos = [
    unilorin,
    uniben,
    uniosun,
    ui,
    igbinedion,
    unijos,
    caleb,
    funaab,
    redeemers,
    adeleke,
    unn,
    fuoye,
    oau,
    bells,
    medicine,
    covenant,
    unilag,
    lasu,
    babcock,
    lasucom,
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollLeft = 0;
    const speed = 1.2; // slightly faster — adjust between 1.0 and 2.0 for taste

    const scroll = () => {
      if (!container) return;

      scrollLeft += speed;
      if (scrollLeft >= container.scrollWidth / 2) {
        scrollLeft = 0; // Reset to start
      }
      container.scrollLeft = scrollLeft;
      requestAnimationFrame(scroll);
    };

    // Duplicate content for seamless looping
    container.innerHTML += container.innerHTML;

    requestAnimationFrame(scroll);
  }, []);

  return (
    <section className="w-full py-10 md:py-14 px-0 bg-gray-100 md:rounded-2xl overflow-hidden">
      <h2 className="text-center text-lg md:text-xl font-semibold text-gray-700 mb-6">
        Trusted by Students from Top Universities
      </h2>

      <div
        ref={scrollRef}
        className="flex items-center gap-8 md:gap-12 px-4 md:px-8 overflow-x-auto scrollbar-hide whitespace-nowrap cursor-grab active:cursor-grabbing"
      >
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="inline-flex flex-shrink-0 w-20 h-20 md:w-28 md:h-28 items-center justify-center"
          >
            <Image
              src={logo}
              alt={`school logo ${idx + 1}`}
              className="object-contain w-full h-full opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
