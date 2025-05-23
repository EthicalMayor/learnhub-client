import React from 'react'
import Image from 'next/image'
import Google_Icon from "@/app/assets/images/Google_Icon.png"
import signup_banner_new from "@/app/assets/images/signup_banner_new.jpeg"
import Link from 'next/link'

// type Props = {}

export default function Page() {
  return (
    <div className='h-[100dvh] w-full flex text-black overflow-hidden flex-col md:flex-row'>
      {/* Left Section - Image with overlay (hidden on mobile) */}
      <div className='hidden md:flex flex-1 relative items-center justify-center'>
        <Image
          className='object-contain'
          src={signup_banner_new}
          alt="Signup Visual"
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center'>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className='flex flex-col items-center justify-center gap-10 flex-1 py-8 px-4 sm:px-6 overflow-auto'>
        <h3 className='font-bold text-[40px] mt-[40px]'>Join Learnhub</h3>
        {/* Header */}
        <div className='flex flex-col gap-4 items-center text-center'>
          <p className='text-base max-w-[400px] text-gray-600'>
            By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
          </p>
        </div>

        {/* Google Button */}
        <button className='flex w-full max-w-[350px] items-center justify-center border py-2 rounded-xl gap-4 shadow-sm hover:shadow-md transition'>
          <Image className='h-6 w-6' src={Google_Icon} alt='Google Icon' />
          <p className='text-sm font-medium'>Continue with Google</p>
        </button>

        <div className="flex items-center w-full max-w-[350px] gap-4">
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
          <div className='w-full max-w-[350px]'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full max-w-[350px] bg-black text-white py-2 rounded-xl hover:bg-black transition font-medium">
            Sign Up
          </button>

          {/* Login Link */}
          <span className="text-sm text-black text-center">
            Have an account?{' '}
            <Link href="/login" className="text-black hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
