'use client'

import React from 'react'
import Image from 'next/image'
import Learnhub_Logo from "@/app/assets/images/Learnhub_Logo.png"

export default function ResetPassword() {
  return (
    <div className="h-[100dvh] bg-zinc-100 flex flex-col">

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-md w-full max-w-md">
        <div className="flex items-center justify-center text-2xl font-bold text-black mb-[20px]">
          <Image className='h-[40px] w-auto' src={Learnhub_Logo} alt='Learnhub'/>
        </div>
          <h1 className="text-xl sm:text-2xl font-bold !text-black text-center mb-2">Reset Your Password</h1>
          <p className="text-gray-600 text-sm text-center mb-6">
            Enter your email address and we’ll send you a link to resetting your password
          </p>

          <form className="flex flex-col gap-4">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-zinc-500 text-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              placeholder="you@example.com"
            />

            <button
              type="submit"
              className="bg-black text-white py-2 rounded-full transition font-semibold"
            >
              Send reset link
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-black hover:underline">
              Need Help?
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
