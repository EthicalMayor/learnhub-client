"use client";
import React, { useState } from "react";
import Image from "next/image";
import signup_banner_new from "@/app/assets/images/signup_banner_new.jpeg";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

type Props = {};

export default function Page({ }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row text-black bg-white">

      {/* Left Section - Image */}
      <div className="hidden md:flex flex-1 relative">
        <Image
          src={signup_banner_new}
          alt="Signup Visual"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 sm:px-10 overflow-y-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Join Learnhub</h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
            By continuing, you agree to our User Agreement and acknowledge our Privacy Policy.
          </p>
        </div>

        {/* Google Button */}
        <button className="flex items-center justify-center gap-3 w-full max-w-sm py-2 px-4 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition">
          <Image src="/assets/images/Google_Icon.png" alt="Google Icon" width={20} height={20} />
          <span className="text-sm font-medium">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6 w-full max-w-sm">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Form Inputs */}
        <form className="flex flex-col gap-5 w-full max-w-sm">
          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-gray-500 hover:text-black"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="text-sm text-center text-black mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
