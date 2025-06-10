"use client"

import { useRef, useState } from "react";
import setup_profile_pic from "@/app/assets/images/setup_profile_pic.png";
import setup_profile_bg from "@/app/assets/images/setup_profile_bg.png";
import select_camera_icon from "@/app/assets/images/select_camera_icon.png";
import back_icon from "@/app/assets/images/back_icon.png"
import skip_icon from "@/app/assets/images/skip_icon.png"
import { useRouter } from "next/navigation";
import Image from "next/image";

type SetupProfileProps = {
    showInterest: () => void;
}

export default function SetupProfile({showInterest}: SetupProfileProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = useState<string>(setup_profile_pic.src);

    const router = useRouter()

    const handleCameraClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
        }
    };

    return (
        <section 
            className="min-h-screen flex w-full text-black 
                     justify-center bg-[#FAFBFB]
                    bg-cover bg-no-repeat bg-center px-5"
            style={{
                backgroundImage: `url(${setup_profile_bg.src})`
            }}
        >
            <article className="flex flex-col justify-between md:w-[30rem]">
                <section className="space-y-6 w-full">
                    <header className="flex md:hidden justify-between items-center my-7 w-full">
                        <button 
                            className="w-fit flex gap-x-2 font-medium text-white rounded-lg h-fit py-2"
                            onClick={showInterest}
                        >
                            <Image src={back_icon} alt="back_icon" className="w-3 "/>
                            <p className="text-black">Back</p>
                        </button>
                        <h1 className="text-xl font-semibold text-black" style={{fontFamily: "sans-serif"}}>Set up Profile</h1>
                        <button 
                            className="w-fit flex gap-x-2 font-medium text-white rounded-lg h-fit py-2"
                            onClick={() => router.push('/final_onboarding')}
                        >
                            <p className="text-black">Skip</p>
                            <Image src={skip_icon} alt="back_icon" className="w-3"/>
                        </button>
                    </header>

                    <header className="hidden md:flex justify-between items-center my-7">
                            <button 
                                className="w-fit px-5 font-medium bg-[#082AD4] text-white rounded-lg h-fit py-2"
                                onClick={showInterest}
                            >
                                Back
                            </button>
                            <h1 className="text-2xl font-semibold text-black" style={{fontFamily: "sans-serif"}}>Set up Profile</h1>
                        </header>
                    <figure className="flex flex-col gap-y-2 items-center">
                        <div className="relative">
                            <Image 
                                src={previewImage} 
                                alt="setup_profile_pic" 
                                className="w-[10rem] h-[10rem] rounded-full object-cover" 
                                width={160}
                                height={160}
                            />
                            {/* Select Picture */}
                            <button 
                                type="button" 
                                className="absolute bottom-[0.7rem] right-3"
                                onClick={handleCameraClick}
                            >
                                <Image src={select_camera_icon} alt="select_camera_icon" className="w-7 h-7 rounded-full"/>
                            </button>
                            <input 
                                hidden 
                                ref={fileInputRef} 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <figcaption>Ademokoya Adedoyin Michael</figcaption>
                    </figure>

                    {/* inputs */}
                    <div className="space-y-3 w-full text-[#474747] text-[15px] mt-4">
                        <input 
                            type="text" 
                            className="py-3 px-5 w-full border border-solid border-[#9eb8da] rounded-xl" 
                            placeholder="Name / Nickname"
                        />
                        <textarea 
                            className="py-3 px-5 w-full border border-solid border-[#9eb8da] rounded-xl h-[7rem]"
                            placeholder="Short bio (what you are you learning? A fun fact?)" 
                        />
                    </div>
                </section>

                {/* Navigation Buttons */}
                <div className="w-full flex justify-center md:justify-between gap-x-4 my-7">
                    <button
                        className="w-full font-medium border border-solid border-[#5281BE] text-[#1F2D70] rounded-xl py-2 hidden md:block"
                        onClick={() => router.push('/final_onboarding')}
                    >
                        Skip for now
                    </button>

                    <button
                        className="w-[60%] md:w-full font-medium bg-[#082AD4] text-white rounded-xl py-2"
                        onClick={() => router.push('/final_onboarding')}
                    >
                        Create My Account
                    </button>
                </div>
            </article>
        </section>
    );
}
