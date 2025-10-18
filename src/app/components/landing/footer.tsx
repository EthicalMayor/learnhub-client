import Image from "next/image"
import TikTok from "@/app/assets/images/TikTok.png"
import Instagram from "@/app/assets/images/Instagram.png"
import X from "@/app/assets/images/X.png"

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center text-gray-700 text-sm md:text-base gap-4 md:gap-6">
          <p className="font-medium text-gray-900">&copy; 2025 LearnHub</p>
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-gray-600">
            <p className="hover:text-gray-900 cursor-pointer transition-colors">Terms of Service</p>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">Privacy Policy</p>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">Community</p>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">Jobs</p>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">FAQs</p>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <Image
            src={TikTok}
            alt="TikTok"
            className="w-6 h-6 md:w-7 md:h-7 hover:opacity-80 cursor-pointer transition"
          />
          <Image
            src={Instagram}
            alt="Instagram"
            className="w-6 h-6 md:w-7 md:h-7 hover:opacity-80 cursor-pointer transition"
          />
          <Image
            src={X}
            alt="X"
            className="w-6 h-6 md:w-7 md:h-7 hover:opacity-80 cursor-pointer transition"
          />
        </div>
      </div>
    </footer>
  )
}
