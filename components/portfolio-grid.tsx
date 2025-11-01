"use client";

import { useState } from "react";
import PhotoGallery from "./photo-gallery";

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("videos");

  const videoProjects = [
    {
      id: 1,
      title: "Commercial Project",
      category: "videos",
      description: "High-end commercial production",
      media: "/dls.MP4",
    },
    {
      id: 2,
      title: "Editorial Piece",
      category: "videos",
      description: "Creative editorial content",
      media: "/stills.mp4",
    },
    // Add more video projects here
  ];

  const photoProjects = [
    {
      id: 1,
      title: "Studio Portrait",
      category: "photography",
      description: "Professional portrait photography",
      image: "/photography/work-01.jpg",
    },
    {
      id: 2,
      title: "Event Coverage",
      category: "photography",
      description: "Event photography and documentation",
      image: "/placeholder-user.jpg",
    },
    {
      id: 3,
      title: "Commercial Shoot",
      category: "photography",
      description: "Product and commercial photography",
      image: "/preset.png",
    },
    {
      id: 4,
      title: "Creative Editorial",
      category: "photography",
      description: "Editorial and fashion photography",
      image: "/preset.png",
    },
    {
      id: 5,
      title: "Brand Photography",
      category: "photography",
      description: "Brand and lifestyle photography",
      image: "/log.jpg",
    },
    {
      id: 6,
      title: "Behind the Scenes",
      category: "photography",
      description: "BTS and production photography",
      image: "/placeholder.jpg",
    },
  ];

  const categories = ["videos", "photography"];

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-lg font-medium transition-all capitalize text-sm border ${
              selectedCategory === cat
                ? "bg-white text-black border-white"
                : "bg-transparent text-white border-white/20 hover:border-white/40 hover:bg-white/5"
            }`}
          >
            {cat === "videos" ? "Cinematography" : "Photography"}
          </button>
        ))}
      </div>

      {/* Content based on selected category */}
      {selectedCategory === "videos" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-96 bg-linear-to-br from-primary/5 to-accent/5 rounded-xl overflow-hidden border border-border hover:border-accent transition-all cursor-pointer"
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
                    <svg
                      className="w-12 h-12 text-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              )}

              {/* Title overlay */}
              <div className="absolute inset-0 flex items-end p-6 z-10 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-sm rounded-md px-4 py-2">
                  <h3 className="text-2xl font-bold text-foreground mb-0">
                    {project.title}
                  </h3>
                  <p className="text-accent text-sm uppercase tracking-wide">
                    Cinematography
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <PhotoGallery projects={photoProjects} />
      )}
    </div>
  );
}
