"use client";

import { usePathname } from "next/navigation";

import logo from "@/app/assets/images/Learnhub_Logo.png";
import profile_pic from "@/app/assets/images/dashboard_profile_pic.png";
import Image from "next/image";

import { Home, Users, LayoutDashboard, Bell, MessageSquare } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  // Helper to check if a route is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 z-50 bg-white w-full px-4 py-3 shadow-sm">
      <div className="flex justify-between items-center md:px-10 lg:px-16">
        {/* Logo */}
        <div className="md:w-10 md:h-10 w-8 h-8">
          <Image src={logo} alt="logo" className="w-full h-full" />
        </div>

        <div className="flex gap-x-24 items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 text-sm font-medium">
            {/* HOME */}
            <button className="flex flex-col items-center">
              <Home
                className={`h-6 w-6 ${
                  isActive("/home") ? "text-blue-600" : "text-black fill-black"
                }`}
              />
              <p className={`${isActive("/home") ? "text-blue-600" : "text-black"}`}>Home</p>
            </button>

            {/* EXPLORE */}
            <button className="flex flex-col items-center">
              <Users
                className={`h-6 w-6 ${
                  isActive("/explore") ? "text-blue-600" : "text-black fill-black"
                }`}
              />
              <p className={`${isActive("/explore") ? "text-blue-600" : "text-black"}`}>Explore</p>
            </button>

            {/* ROOMS */}
            <button className="flex flex-col items-center">
              <LayoutDashboard
                className={`h-6 w-6 ${
                  isActive("/rooms") ? "text-blue-600" : "text-black fill-black"
                }`}
              />
              <p className={`${isActive("/rooms") ? "text-blue-600" : "text-black"}`}>Rooms</p>
            </button>

            {/* NOTIFICATIONS */}
            <button className="flex flex-col items-center">
              <Bell
                className={`h-6 w-6 ${
                  isActive("/notifications") ? "text-blue-600" : "text-black fill-black"
                }`}
              />
              <p className={`${isActive("/notifications") ? "text-blue-600" : "text-black"}`}>
                Notifications
              </p>
            </button>

            {/* CHATS */}
            <button className="flex flex-col items-center">
              <MessageSquare
                className={`h-6 w-6 ${
                  isActive("/chats") ? "text-blue-600" : "text-black fill-black"
                }`}
              />
              <p className={`${isActive("/chats") ? "text-blue-600" : "text-black"}`}>Chats</p>
            </button>
          </div>

          {/* Profile Button */}
          <button className="flex flex-col items-center text-black font-medium">
            <Image
              src={profile_pic}
              alt="profile pic"
              className="w-9 h-9 rounded-full border border-gray-300"
            />

            <span className="hidden md:flex items-center gap-1">
              Me
              <span className="text-xs">▼</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
