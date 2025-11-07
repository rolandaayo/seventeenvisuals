"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [bookLoading, setBookLoading] = useState(false);

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setPortfolioLoading(true);
    setTimeout(() => {
      router.push("/portfolio");
    }, 800);
  };

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setBookLoading(true);
    setTimeout(() => {
      router.push("/book");
    }, 800);
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onError={(e) => console.error("Video playback error:", e)}
        >
          <source src="/Intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
            SEVENTEEN
            <br />
            VISUALS
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Cinematic storytelling for brands that demand excellence. Film. BTS.
            Videography.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
            <button
              onClick={handlePortfolioClick}
              disabled={portfolioLoading}
              className="px-5 py-2 bg-white text-black font-bold hover:bg-white/90 transition-all duration-300 text-sm sm:text-base animate-bounce disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {portfolioLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Loading...
                </span>
              ) : (
                "View Work"
              )}
            </button>
            <button
              onClick={handleBookClick}
              disabled={bookLoading}
              className="px-5 py-2 border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {bookLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Loading...
                </span>
              ) : (
                "Book Now!"
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
