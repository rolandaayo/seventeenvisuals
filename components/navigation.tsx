"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-white hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
            >
              About
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Book Now!
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-white text-black font-bold hover:bg-white/90 transition-all text-sm uppercase tracking-wide"
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
        </div>

        {isOpen && (
          <div className="md:hidden fixed top-20 right-0 bottom-0 w-full max-w-sm bg-black/98 backdrop-blur-sm animate-slide-in-right z-50">
            <div className="flex flex-col space-y-1 p-4">
              <button
                onClick={() => handleNavigation("/")}
                className="block px-4 py-3 text-white hover:text-accent transition-colors uppercase text-sm tracking-wide text-left hover:bg-white/5"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/portfolio")}
                className="block px-4 py-3 text-white hover:text-accent transition-colors uppercase text-sm tracking-wide text-left hover:bg-white/5"
              >
                Portfolio
              </button>
              <button
                onClick={() => handleNavigation("/services")}
                className="block px-4 py-3 text-white hover:text-accent transition-colors uppercase text-sm tracking-wide text-left hover:bg-white/5"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="block px-4 py-3 text-white hover:text-accent transition-colors uppercase text-sm tracking-wide text-left hover:bg-white/5"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="block px-4 py-3 bg-white text-black font-bold hover:bg-white/90 transition-all uppercase text-sm tracking-wide mt-4"
              >
                Contact
              </button>
            </div>
          </div>
        )}

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
