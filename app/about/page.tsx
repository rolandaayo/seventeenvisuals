import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-white/60 font-bold text-sm tracking-widest uppercase">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4">Seventeen Visuals</h1>
          </div>

          <div className="space-y-12">
            {/* Story */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Seventeen Visuals was founded with a simple mission: to create compelling visual stories that resonate
                with audiences. We believe that every brand, every creator, and every project has a unique story to
                tell. Our job is to help you tell it in the most cinematic and impactful way possible.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                With years of experience in film production, videography, and digital content creation, our team brings
                technical expertise combined with creative vision to every project we undertake.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                To deliver exceptional videography and film production services that exceed expectations, inspire
                audiences, and drive real results for our clients. We're committed to pushing creative boundaries while
                maintaining the highest production standards.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">Creativity</h3>
                  <p className="text-white/70">
                    We push creative boundaries and think outside the box to deliver unique visual solutions.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">Quality</h3>
                  <p className="text-white/70">
                    Excellence in every frame. We maintain the highest production standards in all our work.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                  <p className="text-white/70">
                    We work closely with our clients to understand their vision and bring it to life.
                  </p>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Our Team</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Our talented team consists of experienced cinematographers, directors, editors, and creative
                professionals dedicated to delivering exceptional results. Each member brings unique expertise and
                passion to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
