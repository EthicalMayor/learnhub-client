"use client";
import React, { useState } from "react";
import Image from "next/image";
import login_banner_new from "@/app/assets/images/login_banner_new.jpeg";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function Page({ }) {

  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row text-black bg-white">

      {/* Left Section - Image */}
      <div className="hidden md:flex flex-1 relative">
        <Image
          src={login_banner_new}
          alt="Login Visual"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Right Section - Form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 sm:px-10 overflow-y-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Learnhub</h1>
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
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
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
            Sign In
          </button>
        </form>

        {/* Links */}
        <div className="flex flex-col items-center text-sm text-black text-center gap-2 mt-6">
          <Link href="/forgotpassword" className="hover:underline">
            Forgot Password?
          </Link>
          <span>
            New to Learnhub?{" "}
            <Link href="/signup" className="text-black font-medium hover:underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}