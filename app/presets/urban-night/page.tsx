import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Urban Night — Preset",
  description:
    "Urban Night preset — balanced exposure and neon-friendly highlights for night city shots.",
};

export default function UrbanNightPresetPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-gray-900">
      <Navigation />

      <div className="container max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg overflow-hidden bg-gray-900">
            <div className="relative aspect-video">
              <Image
                src="/preset-2.png"
                alt="Urban Night"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold">Urban Night</h1>
            <p className="mt-4 text-gray-700">
              Tailored for low-light cityscapes — preserves highlights from neon
              signs and balances shadows for clean detail in dark areas.
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">What it does</h3>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>
                  Controls highlight clipping for bright neon and street lamps.
                </li>
                <li>
                  Boosts micro-contrast to reveal texture in buildings and
                  pavement.
                </li>
                <li>
                  Tints midtones slightly toward blue/teal for cinematic night
                  tones.
                </li>
                <li>
                  Noise-friendly curve adjustments to avoid amplifying grain.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">How to use</h3>
              <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-2">
                <li>
                  Shoot with native ISO if possible and avoid heavy
                  underexposure.
                </li>
                <li>
                  If noise appears, lower the Exposure slightly and use denoise
                  tools post-export.
                </li>
                <li>
                  Use the Highlights slider to tame neon intensity and keep
                  color information.
                </li>
                <li>
                  For portraits at night, raise the Shadows a bit to keep facial
                  detail while preserving mood.
                </li>
              </ol>
            </div>

            <div className="mt-8 flex gap-3">
              <Link
                href="/presets"
                className="px-5 py-3 bg-white text-black font-bold rounded"
              >
                Back to presets
              </Link>
              <a
                href="/contact"
                className="px-5 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
              >
                Need help? Contact
              </a>
            </div>
          </div>
        </div>

        <section className="mt-12 bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold">Best for</h3>
          <p className="mt-2 text-gray-700">
            Night-time cityscapes, street photography, neon-lit scenes and music
            videos shot in urban settings.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
