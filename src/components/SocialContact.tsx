'use client';

import { BiPhoneCall } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

export default function SocialContact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-black text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-4">
        {/* Phone Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#fde047] flex items-center justify-center">
            <BiPhoneCall className="w-6 h-6 text-black" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Call Us</div>
            <div className="text-lg font-bold">+91 9181xxxxxx</div>
          </div>
        </div>

        {/* Center Text */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Stay connected with
            <br />
            Witty Mavericks
          </h3>
        </div>

        {/* Instagram Section */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-medium">@wittymavericks</div>
          <div className="w-12 h-12 rounded-full bg-[#fde047] flex items-center justify-center">
            <FaInstagram className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
} 