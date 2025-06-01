"use client"

import { useRef, useState } from "react";
import { Check } from "lucide-react";
import setup_profile_pic from "@/app/assets/images/setup_profile_pic.png";
import setup_profile_bg from "@/app/assets/images/setup_profile_bg.png";
import select_camera_icon from "@/app/assets/images/select_camera_icon.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SetupProfile(props: any) {
    const createAccount = props.createAccount;
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
                    items-center justify-center bg-[#FAFBFB]
                    bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url(${setup_profile_bg.src})`
            }}
        >
            <article className="space-y-6 w-[30rem]">
                <h1 className="font-bold text-[20px]" style={{fontFamily: "sans-serif"}}>Set up Profile</h1>
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

                {/* Navigation Buttons */}
                <div className="w-full flex justify-between gap-x-4 mt-4">
                    <button
                        className="w-full font-medium border border-solid border-[#5281BE] text-[#1F2D70] rounded-xl py-2"
                    >
                        Skip for now
                    </button>

                    <button
                        className="w-full font-medium bg-[#082AD4] text-white rounded-xl py-2"
                        onClick={() => router.push('/final_onboarding')}
                    >
                        Create My Account
                    </button>
                </div>
            </article>
        </section>
    );
}
