import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cinematic Orange & Teal — Preset",
  description:
    "Cinematic Orange & Teal preset — warm highlights and cool shadows for moody footage.",
};

export default function CinematicPresetPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-gray-900">
      <Navigation />

      <div className="container max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg overflow-hidden bg-gray-900">
            <div className="relative aspect-video">
              <Image
                src="/preset-1.png"
                alt="Cinematic Orange & Teal"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold">Cinematic Orange & Teal</h1>
            <p className="mt-4 text-gray-700">
              Perfect for moody, cinematic footage — boosts warm highlights
              while retaining cool, teal shadows for that classic film look.
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">What it does</h3>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>
                  Enhances warm tones in highlights for golden skin and
                  sunlight.
                </li>
                <li>Pushes shadows toward teal for cinematic contrast.</li>
                <li>
                  Preserves midtone skin detail for natural-looking portraits.
                </li>
                <li>
                  Subtle curve boost for punchier contrast without clipping.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">How to use</h3>
              <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-2">
                <li>
                  Apply the preset to a neutral-exposed clip shot in golden hour
                  or controlled lighting.
                </li>
                <li>
                  Reduce overall exposure slightly (-0.1 to -0.3 EV) if
                  highlights clip.
                </li>
                <li>
                  Use the White Balance tint slider to fine-tune warm/cool
                  balance for skin tones.
                </li>
                <li>
                  Increase Shadows slightly if you need more detail in dark
                  areas, or use Lift in color wheels for creative control.
                </li>
                <li>
                  For extreme neon scenes, lower the Vibrance slightly to avoid
                  color over-saturation.
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
            Landscape and cinematic portrait footage, music videos, and travel
            films where you want a warm, filmic mood.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
