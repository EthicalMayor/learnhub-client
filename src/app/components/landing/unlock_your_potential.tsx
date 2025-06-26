import professional_profile from "@/app/assets/images/professional_profile.png"
import project from "@/app/assets/images/project.png"
import event from "@/app/assets/images/event.png"
import success from "@/app/assets/images/success.png"
import Image from "next/image"
import Link from "next/link"

export default function UnlockYourPotential(){
    return(
        <div className="flex flex-col md:gap-y-16 gap-y-10 py-10 ">
            <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center text-black w-[90%] md:w-[50%]">
                    <p className="md:text-[35px] text-[18px] text-center font-bold">Unlock Your Potential with LearnHub</p>
                    <p className="md:text-[20px] text-[12px] text-center">
                        LearnHub  offers a variety of solutions designed to help you succeed in your academic, social and professional journey.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-between md:gap-y-20 gap-y-10 ">
                {/* Campus Rooms */}
                <div className="flex md:gap-x-5 gap-x-4 offer_div justify-between items-center  w-[100%] md:w-[46%]  md:pr-4 pr-2  bg-[#E3EFFE]">
                    <Image src={professional_profile} alt="professional_profile" className=" h-[4rem] md:h-[9rem] w-fit"/>
                    <div className="flex flex-col gap-1">
                        <p className="lg:text-[20px] md:text-[15px] text-[12px] font-semibold text-black">Build Your Professional Profile</p>
                        <div className="text-[#212121] lg:text-[15px] text-[11px]">
                            <p>
                                Showcase your skills, projects and achievements 
                                to attract collaborators and potential employers.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Explore Connections */}
                <div className="flex md:gap-x-5 gap-x-4 offer_div justify-between items-center  w-[100%] md:w-[46%]  pl-8  bg-[#FFF4E2]">
                    <div className="flex flex-col gap-1">
                        <p className="lg:text-[20px] md:text-[15px] text-[12px] font-semibold text-black">Collaborate on Projects</p>
                        <div className="text-[#212121] lg:text-[15px] text-[11px]">
                            <p>
                                Find and connect with students who share your
                                interests and work together on innovative
                                projects.
                            </p>

                        </div>
                    </div>
                    <Image src={project} alt="project" className=" h-[4rem] md:h-[9rem] w-fit bg-white"/>
                </div>

                {/* Find Your Tribe */}
                <div className="flex md:gap-x-5 gap-x-4 offer_div justify-between items-center  w-[100%] md:w-[46%]  md:pr-4 pr-2  bg-[#FBEAFF]">
                    <Image src={event} alt="event" className=" h-[4rem] md:h-[9rem] w-fit bg-[#FAFAFA]"/>
                    <div className="flex flex-col gap-1">
                        <p className="lg:text-[20px] md:text-[15px] text-[12px] font-semibold text-black">Attend Networking Events</p>
                        <div className="text-[#212121] lg:text-[15px] text-[11px]">
                            <p>
                                Discover and participate in events that connect you
                                with industry professionals and fellow students.
                            </p>
                            

                        </div>
                    </div>
                </div>

                {/* Inter Campus Connections */}
                <div className="flex md:gap-x-5 gap-x-4 offer_div justify-between items-center  w-[100%] md:w-[46%]  pl-8  bg-[#E3FFDB]">
                    <div className="flex flex-col gap-1">
                        <p className="lg:text-[20px] md:text-[15px] text-[12px] font-semibold text-black">Share Your Success</p>
                        <div className="text-[#212121] lg:text-[15px] text-[11px]">
                            <p>
                                Inspire others by sharing your accomplishments and learning from the experience of your peers.
                            </p>

                        </div>
                    </div>
                    <Image src={success} alt="success" className=" h-[4rem] md:h-[9rem] w-fit "/>
                </div>
            </div>

            <section className="flex justify-center">
                <article className="text-center space-y-2 text-black">
                   
                    <p className="md:text-[35px] text-[18px] text-center font-bold" style={{lineHeight: "2rem"}}>Ready to connect, learn and grow?</p>
                    <p className="md:text-[15px] mb-5 text-[12px] text-center">
                        Hundreds of students have already taken the leap.
                    </p>
            
                    <Link href="/signup" className="text-center sm:text-[14px] text-[12px] px-[3rem] md:px-[4rem] md:text-[16px] py-1 md:py-2 bg-gradient-to-r from-[#0E76FD] from-0% to-[#9747FF] to-65% text-white rounded-lg font-medium hover:from-[#0C63DB] hover:to-[#7D3FE5] transition duration-300">
                        Join them
                    </Link>
                </article>
            </section>

        </div>
    )
}