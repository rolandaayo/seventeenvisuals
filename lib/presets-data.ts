// Sample presets data - replace with real data
export const presets = [
  {
    id: "cinematic-orange-teal",
    name: "Cinematic Orange & Teal",
    description:
      "Perfect for moody, cinematic footage with warm highlights and cool shadows.",
    price: 49.99,
    image: "/preset-1.png",
    category: "Cinematic",
    features: [
      "Enhanced warm tones",
      "Cool shadows",
      "Natural skin tones",
      "Professional color grading",
    ],
  },
  {
    id: "urban-night",
    name: "Urban Night",
    description:
      "Enhance night city shots with balanced exposure and neon highlights.",
    price: 49.99,
    image: "/preset-2.png",
    category: "Urban",
    features: [
      "Balanced exposure",
      "Neon highlight enhancement",
      "Deep blacks",
      "Urban color palette",
    ],
  },
  // Add more presets here
];

export function getPresetById(id: string) {
  return presets.find((preset) => preset.id === id);
}