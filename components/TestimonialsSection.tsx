'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rishabh Gokhale',
    location: 'Pune',
    type: 'Student',
    grade: 'Class 12 (2022)',
    rating: 5,
    text: 'I wanted to personally thank Anand Sir for his guidance during my 12th standard. When I joined, I had not got enough preparation but with his help I was able to score 91% in my board examinations and join my dream college. He is highly professional yet brings a personal touch to all classes.',
    result: '91% in Boards',
    resultColor: 'text-green-600',
    resultBg: 'bg-green-50',
    avatar: 'RG',
    avatarColor: 'bg-blue-500',
  },
  {
    name: 'Abhijeet & Arati Patil',
    location: 'Balewadi, Pune',
    type: 'Parents',
    grade: 'Class 10 & 12',
    rating: 5,
    text: 'Our daughter Amruta scored 100% marks in Class X Boards Mathematics. Anand sir\'s guidance, attention and teaching methodology helped her clear all concepts in Maths, Physics and Chemistry in 11th and 12th. Sir updates us about her progress regularly and conducts subject tests which helps solidify concepts.',
    result: '100% in Maths',
    resultColor: 'text-[#f97316]',
    resultBg: 'bg-orange-50',
    avatar: 'AP',
    avatarColor: 'bg-orange-500',
  },
  {
    name: 'Ved Wagle',
    location: 'Baner, Pune',
    type: 'Student',
    grade: 'Class 10–12',
    rating: 5,
    text: 'In 10th standard I was an average student and mathematics wasn\'t my cup of tea. Until I joined Anand Sir\'s tuition. He taught me so well I couldn\'t imagine I would start loving mathematics. After 3 years I got through MHT CET 2021 with a good score and got admission in a good engineering college. The best teacher/mentor one could ever have.',
    result: 'Cleared MHT-CET',
    resultColor: 'text-[#1a3a8f]',
    resultBg: 'bg-blue-50',
    avatar: 'VW',
    avatarColor: 'bg-[#1a3a8f]',
  },
  {
    name: 'Mrs. Padhye',
    location: 'Baner, Pune',
    type: 'Parent',
    grade: 'Class 11 & 12',
    rating: 5,
    text: 'I was looking for good tuition classes in Pune for my daughter in 11th and 12th Physics and Chemistry. After joining Anand sir\'s classes her concepts became much clearer as he teaches every concept properly till it gets clear. We are very happy to find such an excellent teacher.',
    result: 'Concept Clarity',
    resultColor: 'text-purple-600',
    resultBg: 'bg-purple-50',
    avatar: 'MP',
    avatarColor: 'bg-purple-500',
  },
  {
    name: 'Mrs. Sunila Sapre',
    location: 'Balewadi, Pune',
    type: 'Parent',
    grade: 'Class 8',
    rating: 5,
    text: 'My son did not like mathematics at all. I couldn\'t make him sit and study because of the hatred for that subject. Thanks to Anand sir who agreed to take his classes. I am so happy to see that my son has started liking Maths and studies it by himself. I would recommend Anand sir for children who need to be pushed and have the subject made interesting.',
    result: 'Loves Maths Now',
    resultColor: 'text-green-600',
    resultBg: 'bg-green-50',
    avatar: 'SS',
    avatarColor: 'bg-green-500',
  },
  {
    name: 'Mrs. Sonika Arora',
    location: 'Baner, Pune',
    type: 'Parent',
    grade: 'Class 10 CBSE',
    rating: 5,
    text: 'Joining Anand sir\'s classes helped my daughter gain confidence due to personalized attention in a small group. Regular practice from reference books, tests for each topic and test series have immensely helped her to improve her performance. Online classes throughout the pandemic were conducted very smoothly.',
    result: 'Top Scores',
    resultColor: 'text-[#f97316]',
    resultBg: 'bg-orange-50',
    avatar: 'SA',
    avatarColor: 'bg-[#f97316]',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            Student & Parent Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Students &amp;{' '}
            <span className="text-[#1a3a8f]">Parents Say</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Real testimonials from students and parents who have experienced the APT difference.
          </p>
        </div>

        {/* Carousel - desktop: 3 cards, mobile: 1 card */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className={`bg-white rounded-2xl p-7 border border-gray-100 shadow-sm card-hover flex flex-col ${
                idx === 1 ? 'md:scale-105 md:shadow-lg md:border-[#1a3a8f]/20' : ''
              }`}
            >
              {/* Quote */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-[#1a3a8f]/20" />
              </div>

              {/* Result badge */}
              <span className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 ${t.resultBg} ${t.resultColor}`}>
                {t.result}
              </span>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.type} · {t.grade}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#1a3a8f] hover:bg-blue-50 flex items-center justify-center transition-all shadow-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'w-6 bg-[#1a3a8f]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#1a3a8f] hover:bg-blue-50 flex items-center justify-center transition-all shadow-sm"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Rating summary */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900">4.9</div>
            <div className="flex gap-1 justify-center mt-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-gray-500 text-sm mt-1">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900">100%</div>
            <div className="text-gray-500 text-sm mt-2">Would Recommend</div>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900">200+</div>
            <div className="text-gray-500 text-sm mt-2">Happy Families</div>
          </div>
        </div>
      </div>
    </section>
  );
}
