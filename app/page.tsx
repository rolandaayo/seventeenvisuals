"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import FeaturedWorks from "@/components/featured-works";
import Services from "@/components/services";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { DarkModal } from "@/components/ui/dark-modal";

export default function Home() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [bookNowLoading, setBookNowLoading] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds on every visit
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcomeModal(false);
  };

  const handleBookNow = () => {
    setBookNowLoading(true);
    setTimeout(() => {
      handleCloseWelcome();
      window.location.href = "/book";
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedWorks />
      <Services />
      <CTA />
      <Footer />

      {/* Welcome Modal - Dark Theme */}
      <DarkModal
        isOpen={showWelcomeModal}
        onClose={handleCloseWelcome}
        title="Welcome! 👋"
      >
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4">🎥</div>
          <h3 className="text-xl font-bold text-white">
            Welcome to SEVENTEENVISUALS
          </h3>
          <p className="text-white/80 leading-relaxed">
            We're excited to have you here! We specialize in capturing beautiful
            moments through commercials, music videos, documentaries, and
            corporate photography.
          </p>
          <div className="bg-accent/20 border border-accent/30 p-4 rounded-lg">
            <p className="text-sm text-accent">
              ✨ Ready to book a session? Check out my services and let's create
              something amazing together!
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleCloseWelcome}
              className="flex-1 px-4 py-2 rounded bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Let's Explore!
            </button>
            <button
              onClick={handleBookNow}
              disabled={bookNowLoading}
              className="px-4 py-2 rounded bg-accent text-black font-semibold hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              {bookNowLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Loading...
                </span>
              ) : (
                "Book Now"
              )}
            </button>
          </div>
        </div>
      </DarkModal>
    </main>
  );
}
