import React from 'react'
import Image from 'next/image'
import Google_Icon from "@/app/assets/images/Google_Icon.png"
import login_banner_new from "@/app/assets/images/login_banner_new.jpeg"
import Link from 'next/link'

// type Props = {}

export default function Page() {
  return (
    <div className='h-[100dvh] w-full flex text-black overflow-hidden flex-col md:flex-row'>
      <div className='hidden md:flex flex-1 relative items-center justify-center'>
        <Image
          className='object-contain'
          src={login_banner_new}
          alt="Login Visual"
        />
        {/* Black transparent overlay */}
        <div className='absolute inset-0 bg-black/80'></div>
      </div>

      {/* Right Section - Form */}
      <div className='flex flex-col items-center justify-center gap-10 flex-1 py-8 px-4 sm:px-6 overflow-auto'>
        {/* Header */}
        <div className='flex flex-col gap-4 items-center text-center'>
          <h3 className='text-4xl font-extrabold mt-[40px]'>LearnHub</h3>
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
        <div className='flex flex-col w-full items-center gap-8'>

          {/* Email */}
          <div className='w-full max-w-[350px]'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-1 focus:ring-blueblack-500 focus:border-black transition"
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
          <span className="flex flex-col text-sm text-black text-center">
            <Link href="/forgotpassword" className="text-black hover:underline">
              Forgot Password ?
            </Link>
            <span>
              New to Learnhub ?{' '}
              <Link href="/signup" className="text-black hover:underline">
                Signup
              </Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
