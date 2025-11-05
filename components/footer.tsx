"use client"

import Link from "next/link"
import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-black uppercase tracking-wide">Seventeen Visuals</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional film and videography services for brands and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/60 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <Mail size={16} />
                <a href="mailto:seventeenvisualss@gmail.com">seventeenvisualss@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <Phone size={16} />
                <a href="tel:+2348122447364">+234 812 244 7364</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold uppercase text-sm tracking-wide">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/seventeenvisuals"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              >
                <Linkedin size={18} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; 2025 Seventeen Visuals. All rights reserved.</p>
           <p>Website built by me.</p>
        </div>
      </div>
    </footer>
  )
}
