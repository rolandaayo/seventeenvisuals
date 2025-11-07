"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { PurchaseForm } from "@/components/ui/purchase-form";
import { presets } from "@/lib/presets-data";

export default function PresetsPage() {
  const [selectedPreset, setSelectedPreset] = useState<
    (typeof presets)[0] | null
  >(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loadingPresetId, setLoadingPresetId] = useState<string | null>(null);

  const handlePurchaseSuccess = () => {
    setShowPurchaseModal(false);
    setShowSuccessModal(true);
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-white/60 font-bold text-sm tracking-widest uppercase">
              Color Grading
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Professional Presets
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Transform your footage with our carefully crafted color grading
              presets.
            </p>
          </div>

          {/* Presets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presets.map((preset) => (
              <div
                key={preset.id}
                className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all group"
              >
                {/* Preset Preview - Links to detail page */}
                <Link href={`/presets/${preset.id}`}>
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                    <Image
                      src={preset.image}
                      alt={preset.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                {/* Preset Info */}
                <div className="p-6">
                  <div className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                    {preset.category}
                  </div>
                  <Link href={`/presets/${preset.id}`}>
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-white/80">
                      {preset.name}
                    </h3>
                  </Link>
                  <p className="text-white/70 text-sm mb-4">
                    {preset.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">
                      ₦{preset.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => {
                        setLoadingPresetId(preset.id);
                        setTimeout(() => {
                          setSelectedPreset(preset);
                          setShowPurchaseModal(true);
                          setLoadingPresetId(null);
                        }, 600);
                      }}
                      disabled={loadingPresetId === preset.id}
                      className="px-4 py-2 bg-white text-black text-sm font-bold rounded hover:bg-white/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loadingPresetId === preset.id ? (
                        <span className="flex items-center gap-2">
                          <div className="w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                          Loading...
                        </span>
                      ) : (
                        "Buy Now"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <p className="text-white/60 mb-6">
              Need a custom preset? Contact us to discuss your specific needs.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      {selectedPreset && (
        <Modal
          isOpen={showPurchaseModal}
          onClose={() => {
            setShowPurchaseModal(false);
            setSelectedPreset(null);
          }}
          title="Purchase Preset"
        >
          <PurchaseForm
            presetName={selectedPreset.name}
            price={selectedPreset.price}
            onSuccess={handlePurchaseSuccess}
          />
        </Modal>
      )}

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          setSelectedPreset(null);
        }}
        title="Purchase Successful! 🎉"
      >
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Payment Successful!
          </h3>
          <p className="text-gray-600">
            Thank you for your purchase! An email has been sent to you with the
            download link for your preset.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              📧 Check your inbox for the download link and installation
              instructions.
            </p>
          </div>
          <button
            onClick={() => {
              setShowSuccessModal(false);
              setSelectedPreset(null);
            }}
            className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-all font-semibold"
          >
            Close
          </button>
        </div>
      </Modal>
    </main>
  );
}
