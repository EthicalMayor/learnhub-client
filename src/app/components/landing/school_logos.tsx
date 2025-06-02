import Image from "next/image"
import ui from "@/app/assets/school_logos/ui.png"
import funaab from "@/app/assets/school_logos/funaab.png"
import ghana from "@/app/assets/school_logos/ghana.png"
import convenant from "@/app/assets/school_logos/convenant.png"
import redeemers from "@/app/assets/school_logos/redeemers.png"
import lome from "@/app/assets/school_logos/lome.png"
import unilorin from "@/app/assets/school_logos/unilorin.png"

export default function SchoolLogos() {
  const logos = [ui, funaab, ghana, convenant, redeemers, lome, unilorin,
    ui, funaab, ghana, convenant, redeemers, lome, unilorin
  ]

  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-x-6 animate-scroll whitespace-nowrap min-w-max">
        {[...logos].map((logo, idx) => (
          <Image
            key={idx}
            src={logo}
            alt="school logo"
            className="md:w-[12rem] w-[8rem] object-contain"
          />
        ))}
      </div>
    </div>
  )
}
