import Image from "next/image"
import ui from "@/app/assets/school_logos/ui.png"
import funaab from "@/app/assets/school_logos/funaab.png"
import ghana from "@/app/assets/school_logos/ghana.png"
import convenant from "@/app/assets/school_logos/convenant.png"
import redeemers from "@/app/assets/school_logos/redeemers.png"
import lome from "@/app/assets/school_logos/lome.png"
import unilorin from "@/app/assets/school_logos/unilorin.png"

export default function SchoolLogos(){
    return(
        <div>
            <div className="flex md:gap-x-5 gap-x-3 w-full overflow-x-scroll items-center custom_scroll">
                <Image src={ui} alt="ui" className="md:w-[12rem] w-[8rem]" />
                <Image src={funaab} alt="funaab" className="md:w-[12rem] w-[8rem]" />
                <Image src={ghana} alt="ghana" className="md:w-[12rem] w-[8rem]" />
                <Image src={convenant} alt="convenant" className="md:w-[12rem] w-[8rem]" />
                <Image src={redeemers} alt="redeemers" className="md:w-[12rem] w-[8rem]" />
                <Image src={lome} alt="lome" className="md:w-[12rem] w-[8rem]" />
                <Image src={unilorin} alt="unilorin" className="md:w-[12rem] w-[8rem]" />
            </div>
        </div>
    )
}