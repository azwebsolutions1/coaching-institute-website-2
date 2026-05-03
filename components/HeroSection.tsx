'use client';

import { Phone, Calendar, Star, Users, Trophy, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(135deg, #0f2461 0%, #1a3a8f 55%, #1e4db7 100%)',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }}
      />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }}
      />

      <div className="container-max relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-white space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              <span className="text-sm font-medium text-blue-100">25+ Years of Excellence in Pune</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Achieve
              <span className="text-[#f97316]"> Academic</span>
              <br />
              Excellence with
              <br />
              <span className="text-blue-200">Expert Guidance</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
              Join Pune&apos;s most trusted Maths, Physics &amp; Chemistry coaching. CBSE 9th–12th, JEE Mains &amp; MHT-CET. Small batches, personal attention, proven results.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Users, text: '5000+ Students' },
                { icon: Trophy, text: '100% in Boards' },
                { icon: Star, text: '4.9★ Rated' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-blue-100 text-sm font-medium">
                  <Icon className="w-4 h-4 text-[#f97316]" />
                  {text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 text-base"
              >
                <Calendar className="w-5 h-5" />
                Book Free Demo Class
              </button>
              <a
                href="tel:+918452848451"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <p className="text-blue-200 text-sm">
              Limited seats available for 2024–25 batch. Enquire today!
            </p>
          </div>

          {/* Right: Stats Card */}
          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-6">
              <h3 className="text-white font-bold text-xl text-center mb-6">Our Track Record Speaks</h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '5000+', label: 'Students Trained', color: 'text-[#f97316]' },
                  { value: '25+', label: 'Years Experience', color: 'text-blue-200' },
                  { value: '100%', label: 'Board Toppers', color: 'text-green-300' },
                  { value: '4.9★', label: 'Parent Rating', color: 'text-yellow-300' },
                ].map(({ value, label, color }) => (
                  <div
                    key={label}
                    className="bg-white/10 rounded-2xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors"
                  >
                    <div className={`text-3xl font-bold ${color}`}>{value}</div>
                    <div className="text-blue-200 text-xs mt-1 font-medium">{label}</div>
                  </div>
                ))}
              </div>

              {/* About Anand sir */}
              <div className="bg-white/10 rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image 
                    src="/Anand_Patwardhan.jpg" 
                    alt="Anand Patwardhan Sir" 
                    width={48} 
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Anand Patwardhan Sir</div>
                  <div className="text-blue-200 text-xs mt-0.5">VJTI Mumbai Alumni</div>
                  <div className="text-blue-100 text-xs mt-1 leading-relaxed">
                    8 years IT experience in London, UK. Passionate Maths &amp; Science educator.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('results')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
