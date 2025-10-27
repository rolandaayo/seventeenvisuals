"use client"

import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-6xl font-black text-black leading-tight">
          Ready to Create Something Extraordinary?
        </h2>
        <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate and bring your vision to life with professional videography and cinematic storytelling.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-black text-white font-bold hover:bg-black/80 transition-all uppercase text-sm tracking-wide"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  )
}
