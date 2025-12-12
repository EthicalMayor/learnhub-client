"use client";

import { usePathname } from "next/navigation";
import { Home, Users, LayoutDashboard, Bell, MessageSquare } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <footer className="fixed bottom-0 z-50 bg-white w-full py-3 px-3 text-[12px] flex justify-around shadow-md md:hidden">
      {/* HOME */}
      <button className="flex flex-col justify-center items-center">
        <Home
          className={`h-6 w-6 ${isActive("/home") ? "text-blue-600" : "text-black fill-black"}`}
        />
        <p className={`${isActive("/home") ? "text-blue-600" : "text-black"}`}>Home</p>
      </button>

      {/* EXPLORE */}
      <button className="flex flex-col justify-center items-center">
        <Users
          className={`h-6 w-6 ${isActive("/explore") ? "text-blue-600" : "text-black fill-black"}`}
        />
        <p className={`${isActive("/explore") ? "text-blue-600" : "text-black"}`}>Explore</p>
      </button>

      {/* ROOMS */}
      <button className="flex flex-col justify-center items-center">
        <LayoutDashboard
          className={`h-6 w-6 ${isActive("/rooms") ? "text-blue-600" : "text-black fill-black"}`}
        />
        <p className={`${isActive("/rooms") ? "text-blue-600" : "text-black"}`}>Rooms</p>
      </button>

      {/* NOTIFICATIONS */}
      <button className="flex flex-col justify-center items-center">
        <Bell
          className={`h-6 w-6 ${isActive("/notifications") ? "text-blue-600" : "text-black fill-black"}`}
        />
        <p className={`${isActive("/notifications") ? "text-blue-600" : "text-black"}`}>
          Notification
        </p>
      </button>

      {/* CHATS */}
      <button className="flex flex-col justify-center items-center">
        <MessageSquare
          className={`h-6 w-6 ${isActive("/chats") ? "text-blue-600" : "text-black fill-black"}`}
        />
        <p className={`${isActive("/chats") ? "text-blue-600" : "text-black"}`}>Chats</p>
      </button>
    </footer>
  );
}
