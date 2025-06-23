import TikTok from "@/app/assets/images/TikTok.png"
import Instagram from "@/app/assets/images/Instagram.png"
import X from "@/app/assets/images/X.png"
import Image from "next/image"

export default function Footer (){
    return (
        <div className="bg-[#1A232F] text-white lg:text-[16px] md:text-[14px] text-[8px] w-full flex md:justify-center md:py-[2rem] py-[1rem]">
            <div className="flex items-end md:items-center mx-4">
                {/* Left */}
                <div 
                    className="flex flex-col md:flex-row gap-y-1 lg:gap-x-4 lg:pr-12 lg:mr-12 md:border-r border-solid border-[#9C9C9C]
                                md:gap-x-3 md:pr-9 md:mr-9 gap-x-2 pr-6 mr-6 opacity-80 "
                    >
                    <p className="hidden md:block">&copy; 2025 LearnHub</p>
                    <p >Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Community</p>
                    <p>Jobs</p>
                    <p>FAQs</p>

                    <p className=" md:hidden mt-2">&copy; 2025 LearnHub</p>
                </div>

                {/* Right */}
                <div className="flex lg:gap-x-4 md:gap-x-3 gap-x-2">
                    <Image src={TikTok} alt="TikTok" className="lg:w-[37.5px] lg:h-[37.5px] md:w-[30px] md:h-[30px] w-[4vw] h-[4vw]"/>
                    <Image src={Instagram} alt="Instagram" className="lg:w-[37.5px] lg:h-[37.5px] md:w-[30px] md:h-[30px] w-[4vw] h-[4vw]"/>
                    <Image src={X} alt="X" className="lg:w-[37.5px] lg:h-[37.5px] md:w-[30px] md:h-[30px] w-[4vw] h-[4vw]"/>
                </div>
            </div>
        </div>
    )
}