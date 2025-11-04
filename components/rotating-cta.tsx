"use client";

import { useState } from "react";
import Link from "next/link";

export default function RotatingCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 animate-bounce-gentle">
      <Link
        href="/book"
        className="relative block w-20 h-20 md:w-24 md:h-24 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Rotating Text Circle */}
        <div className="absolute inset-0 animate-spin-slow">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="fill-white/70 group-hover:fill-white text-[7px] md:text-[8px] font-bold tracking-wider">
              <textPath href="#circle" startOffset="0%">
                BOOK NOW • BOOK NOW • BOOK NOW •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Glassmorphism Center Circle */}
        <div
          className={`absolute inset-3 md:inset-4 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 ${
            isHovered
              ? "bg-white/20 scale-110 shadow-2xl border-white/40"
              : "bg-white/10 shadow-lg"
          }`}
        >
          <div className="text-white font-bold text-[10px] md:text-xs text-center leading-tight drop-shadow-sm">
            BOOK
            <br />
            NOW
          </div>
        </div>

        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-30 group-hover:opacity-50"></div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-white/5 blur-md group-hover:bg-white/15 transition-all duration-300"></div>

        {/* Extra Glow for Glass Effect */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      </Link>
    </div>
  );
}
