"use client";

import { useState } from "react";
import Image from "next/image";

interface PhotoProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface PhotoGalleryProps {
  projects: PhotoProject[];
}

export default function PhotoGallery({ projects }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<PhotoProject | null>(null);

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative aspect-square bg-muted rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(project)}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-16 h-16 mb-3 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            )}

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            {selectedImage.image ? (
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <div className="bg-muted rounded-lg p-8 text-center min-w-96">
                <div className="w-24 h-24 mb-4 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-12 h-12 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            )}

            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h3 className="text-white font-bold text-xl mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
