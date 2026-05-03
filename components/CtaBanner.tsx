'use client';

import { Phone, Calendar, ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20"
      style={{ background: 'linear-gradient(135deg, #0f2461 0%, #1a3a8f 55%, #1e4db7 100%)' }}
    >
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Orange accent */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }}
      />

      <div className="container-max relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/30 text-[#f97316] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              Limited Seats — Hurry!
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Don&apos;t Wait. Your{' '}
              <span className="text-[#f97316]">Dream Score</span>{' '}
              Is Just One Step Away.
            </h2>
            <p className="text-blue-200 text-lg">
              Enroll now for 2024–25 batch. Limited seats fill up fast — secure your spot today!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('enquiry')}
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Calendar className="w-5 h-5" />
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919823000000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
