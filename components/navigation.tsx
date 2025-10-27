"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    setIsLoading(true);
    setIsOpen(false);

    // Simulate loading delay for visual feedback
    setTimeout(() => {
      router.push(href);
      setIsLoading(false);
    }, 300);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-black border-b border-white/10">
      {isLoading && (
        <div className="absolute top-0 left-0 h-1 bg-white animate-page-loading" />
      )}

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* smaller on mobile, keep user's large size on md+ screens */}
            <div className="relative w-24 h-10 sm:w-12 sm:h-12 md:w-50 md:h-32">
              <Image
                src="/logo.png"
                alt="Seventeen Visuals"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-white hover:text-accent transition-colors font-medium text-[13px] uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-accent transition-colors font-medium text-[13px] uppercase tracking-wide"
            >
              Portfolio
            </Link>
            <Link
              href="/presets"
              className="text-white hover:text-accent transition-colors font-medium text-[13px] uppercase tracking-wide"
            >
              Presets
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-accent transition-colors font-medium text-[13px] uppercase tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent transition-colors font-medium text-[13px] uppercase tracking-wide"
            >
              About
            </Link>
            <Link
              href="/book"
              className={`text-white hover:text-accent transition-colors font-medium text-[13px] uppercase tracking-wide ${
                pathname === "/" ? "motion-safe:animate-bounce" : ""
              }`}
            >
              Book Now!
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-white text-black font-bold hover:bg-white/90 transition-all text-[13px] uppercase tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Panel */}
          {isOpen && (
            <div className="md:hidden fixed top-20 right-0 bottom-0 w-full max-w-sm bg-black/95 backdrop-blur-sm animate-slide-in-right z-50">
              <div className="flex flex-col h-full">
                {/* header: small logo + close */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <div className="relative w-28 h-8">
                      <Image
                        src="/logo.png"
                        alt="Seventeen Visuals"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-white hover:text-accent"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* nav items */}
                <nav className="flex-1 px-4 py-6 space-y-3 overflow-auto">
                  <button
                    onClick={() => handleNavigation("/")}
                    className="w-full text-left px-6 py-4 rounded-lg text-white hover:bg-white/5 transition-colors text-base font-medium"
                  >
                    Home
                  </button>

                  <button
                    onClick={() => handleNavigation("/portfolio")}
                    className="w-full text-left px-6 py-4 rounded-lg text-white hover:bg-white/5 transition-colors text-base font-medium"
                  >
                    Portfolio
                  </button>

                  <button
                    onClick={() => handleNavigation("/presets")}
                    className="w-full text-left px-6 py-4 rounded-lg text-white hover:bg-white/5 transition-colors text-base font-medium"
                  >
                    Presets
                  </button>

                  <button
                    onClick={() => handleNavigation("/services")}
                    className="w-full text-left px-6 py-4 rounded-lg text-white hover:bg-white/5 transition-colors text-base font-medium"
                  >
                    Services
                  </button>

                  <button
                    onClick={() => handleNavigation("/about")}
                    className="w-full text-left px-6 py-4 rounded-lg text-white hover:bg-white/5 transition-colors text-base font-medium"
                  >
                    About
                  </button>

                  <button
                    onClick={() => handleNavigation("/book")}
                    className={`w-full text-left px-6 py-4 rounded-lg text-white hover:bg-white/5 transition-colors text-base font-semibold ${
                      pathname === "/" ? "motion-safe:animate-bounce" : ""
                    }`}
                  >
                    Book Now!
                  </button>

                  <div className="pt-3">
                    <button
                      onClick={() => handleNavigation("/contact")}
                      className="w-full px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all"
                    >
                      Contact
                    </button>
                  </div>
                </nav>

                {/* footer inside menu for quick links / copyright */}
                <div className="px-4 py-4 border-t border-white/6 text-sm text-white/60">
                  <div className="mb-2">Follow us on Instagram</div>
                  <div className="opacity-80">
                    &copy; 2025 Seventeen Visuals
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {isOpen && (
          <div
            className="md:hidden fixed inset-0 top-20 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
