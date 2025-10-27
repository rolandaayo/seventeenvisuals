"use client"

import Link from "next/link"

export default function FeaturedWorks() {
  const works = [
    {
      id: 1,
      title: "Brand Campaign",
      category: "Commercial",
      media: "/dls.MP4",
    },
    {
      id: 2,
      title: "Behind The Scenes",
      category: "Editorial",
      media: "/stills.MP4",
    },
    // {
    //   id: 3,
    //   title: "Music Video",
    //   category: "Music",
    // },
    // {
    //   id: 4,
    //   title: "Documentary",
    //   category: "Documentary",
    // },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Featured Works</p>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">Our Latest Projects</h2>
          <div className="w-12 h-1 bg-black" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative aspect-video bg-black overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300"
            >
              {work.media ? (
                // preview video (no autoplay). Users can play/pause via controls.
                <video
                  src={work.media}
                  controls
                  preload="metadata"
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black to-black/80">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto border-2 border-white/30 flex items-center justify-center group-hover:border-accent transition-colors">
                      <svg
                        className="w-8 h-8 text-white/50 group-hover:text-accent transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{work.title}</p>
                      <p className="text-accent text-sm uppercase tracking-wide">{work.category}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Title overlay */}
              <div className="absolute inset-0 flex items-end p-6 z-10 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-sm rounded-md px-4 py-2">
                  <p className="text-white font-bold text-lg">{work.title}</p>
                  <p className="text-accent text-sm uppercase tracking-wide">{work.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-black text-white font-bold hover:bg-black/80 transition-all uppercase text-sm tracking-wide"
          >
            View All Projects
          </Link>
          
        </div>
      </div>
    </section>
  )
}
