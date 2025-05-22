"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import signup_banner_new from "@/app/assets/images/signup_banner_new.jpeg"
import Learnhub_Logo from "@/app/assets/images/Learnhub_Logo.png"
import Link from 'next/link'
import { Eye, EyeOff } from "lucide-react"

type Props = {}

export default function Page({ }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='h-[100dvh] w-full flex text-black overflow-hidden flex-col md:flex-row'>
      
      {/* Left Section - Image */}
      <div className='hidden md:flex flex-1 relative items-center justify-center'>
        <Image
          className='object-contain'
          src={signup_banner_new}
          alt="Signup Visual"
        />
        <div className='absolute inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center' />
      </div>

      {/* Right Section - Form */}
      <div className='flex flex-col items-center justify-center flex-1 py-6 px-4 sm:px-6 overflow-auto gap-6'>
        
        {/* Header */}
        <h3 className='font-bold text-3xl sm:text-[40px] mt-6 sm:mt-10'>
        <Image
          className='object-contain'
          src={Learnhub_Logo}
          alt="Learnhub"
        />
        </h3>
        <p className='text-sm sm:text-base max-w-[400px] text-center text-gray-600 px-2'>
          By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
        </p>

        {/* Google Button */}
        <button className='flex w-full max-w-[350px] items-center justify-center border py-2 rounded-xl gap-3 shadow-sm hover:shadow-md transition px-4'>
          <Image src="/assets/images/Google_Icon.png" alt='Google Icon' width={24} height={24} />
          <p className='text-sm font-medium'>Continue with Google</p>
        </button>

        {/* Divider */}
        <div className="flex items-center w-full max-w-[350px] gap-3">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-sm text-gray-500 whitespace-nowrap">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Input Fields */}
        <div className='flex flex-col w-full items-center gap-5'>
          
          {/* Full Name */}
          <div className='w-full max-w-[350px]'>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition"
            />
          </div>

          {/* Email */}
          <div className='w-full max-w-[350px]'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition"
            />
          </div>

          {/* Password */}
          <div className="w-full max-w-[350px] relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-gray-600 hover:text-black"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Sign Up Button */}
          <button className="w-full max-w-[350px] bg-black text-white py-2 rounded-xl hover:bg-black transition font-medium">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-sm text-black text-center">
            Have an account?{' '}
            <Link href="/login" className="text-black hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
