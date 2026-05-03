'use client';

import { BookOpen, Clock, CircleCheck as CheckCircle2, ArrowRight, Zap } from 'lucide-react';

const courses = [
  {
    grade: 'Grade 9th & 10th',
    tag: 'CBSE Foundation',
    subjects: 'Maths & Science',
    tagColor: 'bg-blue-100 text-[#1a3a8f]',
    accentColor: '#1a3a8f',
    borderColor: 'border-blue-200',
    highlights: [
      'Build strong Maths & Science foundations',
      'Regular tests and feedback',
      'Special test series for CBSE 10th boards',
      'Concept-first teaching methodology',
      'Small batch for personal attention',
    ],
    timing: 'Mon–Fri: 5:00–6:00 PM & 6:00–7:00 PM',
    seats: '8 seats remaining',
    popular: false,
  },
  {
    grade: 'Grade 11th & 12th',
    tag: 'CBSE Senior',
    subjects: 'Maths, Physics & Chemistry',
    tagColor: 'bg-orange-100 text-[#f97316]',
    accentColor: '#f97316',
    borderColor: 'border-orange-200',
    highlights: [
      'Deep concept clarity in PCM subjects',
      'Solid foundation for competitive exams',
      'Regular tests and board exam series',
      'Morning and afternoon batches available',
      'Expert guidance from VJTI alumnus',
    ],
    timing: 'Mon–Sat: 6:30–8:30 AM & 2:45–4:30 PM',
    seats: '5 seats remaining',
    popular: true,
  },
  {
    grade: 'JEE / MHT-CET',
    tag: 'Competitive Exams',
    subjects: 'Maths, Physics & Chemistry',
    tagColor: 'bg-green-100 text-green-700',
    accentColor: '#16a34a',
    borderColor: 'border-green-200',
    highlights: [
      'JEE Mains, MHT-CET, VITEEE preparation',
      'Time-saving techniques for MCQs',
      'Regular mock tests & analysis',
      'Along with 11th & 12th board prep',
      'Strategy planning for each exam',
    ],
    timing: 'Mon–Sat: 6:30–8:30 AM & 2:45–4:30 PM',
    seats: '4 seats remaining',
    popular: false,
  },
];

export default function CoursesSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#f97316] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            Our Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Courses Designed for{' '}
            <span className="text-[#1a3a8f]">Academic Success</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Carefully structured programs for every stage of your academic journey — from building foundations to cracking competitive exams.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((course) => (
            <div
              key={course.grade}
              className={`relative bg-white rounded-2xl border-2 ${course.borderColor} overflow-hidden card-hover flex flex-col`}
            >
              {/* Popular badge */}
              {course.popular && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              {/* Card top accent */}
              <div className="h-1.5" style={{ backgroundColor: course.accentColor }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Tag + Grade */}
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full w-fit mb-3 ${course.tagColor}`}>
                  {course.tag}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{course.grade}</h3>
                <p className="text-gray-500 text-sm mb-5 font-medium">{course.subjects}</p>

                {/* Highlights */}
                <ul className="space-y-3 mb-6 flex-1">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: course.accentColor }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Timing */}
                <div className="bg-gray-50 rounded-xl p-4 mb-5 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Batch Timing</div>
                    <div className="text-sm text-gray-700 font-medium">{course.timing}</div>
                  </div>
                </div>

                {/* Seats */}
                <div className="flex items-center gap-2 text-xs text-red-600 font-semibold mb-5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {course.seats}
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    backgroundColor: course.accentColor,
                    color: 'white',
                  }}
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Fees paid in 3 convenient installments. Contact Anand Sir for detailed fee structure.
        </p>
      </div>
    </section>
  );
}
