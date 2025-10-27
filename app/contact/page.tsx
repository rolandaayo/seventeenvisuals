"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-white/60 font-bold text-sm tracking-widest uppercase">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4">Contact Us</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's talk about how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:hello@seventeenvisuals.com"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    hello@seventeenvisuals.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors">
                    +234 812 244 7364
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-white/70">Lagos, Nigeria 🌍🇳🇬</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/50"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/50"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                >
                  <option value="" className="bg-black text-white">
                    Select Service
                  </option>
                  <option value="commercial" className="bg-black text-white">
                    Commercial Film
                  </option>
                  <option value="bts" className="bg-black text-white">
                    BTS & Documentary
                  </option>
                  <option value="music" className="bg-black text-white">
                    Music Video
                  </option>
                  <option value="corporate" className="bg-black text-white">
                    Corporate Video
                  </option>
                  <option value="other" className="bg-black text-white">
                    Other
                  </option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/50 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-all font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
