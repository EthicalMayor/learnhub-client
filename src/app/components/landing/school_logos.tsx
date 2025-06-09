import Image from "next/image"

import unilorin from "@/app/assets/school_logos/unilorin.png"
import uniben from "@/app/assets/school_logos/uniben.png"
import uniosun from "@/app/assets/school_logos/uniosun.png"
import ui from "@/app/assets/school_logos/ui.png"
import igbinedion from "@/app/assets/school_logos/igbinedion.png"
import unijos from "@/app/assets/school_logos/unijos.png"
import caleb from "@/app/assets/school_logos/caleb.png"
import funaab from "@/app/assets/school_logos/funaab.png"
import redeemers from "@/app/assets/school_logos/redeemers.png"
import adeleke from "@/app/assets/school_logos/adeleke.png"
import unn from "@/app/assets/school_logos/unn.png"
import fuoye from "@/app/assets/school_logos/fuoye.png"
import oau from "@/app/assets/school_logos/oau.png"
import bells from "@/app/assets/school_logos/bells.png"
import medicine from "@/app/assets/school_logos/medicine.png"
import covenant from "@/app/assets/school_logos/covenant.png"
import unilag from "@/app/assets/school_logos/unilag.png"
import lasu from "@/app/assets/school_logos/lasu.png"
import babcock from "@/app/assets/school_logos/babcock.png"
import lasucom from "@/app/assets/school_logos/lasucom.png"

export default function SchoolLogos() {
  const logos = [unilorin, uniben, uniosun, ui, igbinedion, unijos, caleb, funaab, redeemers,
    adeleke, unn, fuoye, oau, bells, medicine, covenant, unilag, lasu, babcock, lasucom
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
