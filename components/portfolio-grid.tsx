"use client"

import { useState } from "react"

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    { id: 1, title: "Project 1", category: "commercial", description: "", media: "/dls.MP4" },
    { id: 2, title: "Project 2", category: "editorial", description: "", media:"/stills.mp4" },
    // { id: 3, title: "Project 3", category: "music", description: "Add your video here" },
    // { id: 4, title: "Project 4", category: "documentary", description: "Add your video here" },
    // { id: 5, title: "Project 5", category: "commercial", description: "Add your video here" },
    // { id: 6, title: "Project 6", category: "bts", description: "Add your video here" },
    // { id: 7, title: "Project 7", category: "music", description: "Add your video here" },
    // { id: 8, title: "Project 8", category: "documentary", description: "Add your video here" },
  ]

  const categories = ["all", "commercial", "bts", "music", "documentary"]

  const filtered = selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
              selectedCategory === cat
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group relative h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl overflow-hidden border border-border hover:border-accent transition-all cursor-pointer"
          >
            {project.media ? (
              <video
                src={project.media}
                controls
                preload="metadata"
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 mb-4 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-accent text-sm font-semibold mb-2 capitalize">{project.category}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            )}

            {/* Title overlay */}
            <div className="absolute inset-0 flex items-end p-6 z-10 pointer-events-none">
              <div className="bg-black/40 backdrop-blur-sm rounded-md px-4 py-2">
                <h3 className="text-2xl font-bold text-foreground mb-0">{project.title}</h3>
                <p className="text-accent text-sm uppercase tracking-wide">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
