'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Award, BookOpen, Clock, Star, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Students Trained',
    description: 'Across CBSE 9th–12th, JEE & MHT-CET',
    color: 'text-[#1a3a8f]',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Clock,
    value: 25,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Teaching & IT industry expertise',
    color: 'text-[#f97316]',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Board Exam Toppers',
    description: 'Students scoring 90%+ in boards',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    icon: Star,
    value: 49,
    suffix: '/5',
    label: 'Parent Satisfaction',
    description: 'Average rating from parents',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
  },
];

const achievements = [
  { icon: TrendingUp, text: 'Amruta scored 100% in Class X Boards Maths' },
  { icon: Award, text: 'Rishabh scored 91% in Class 12 Boards (2022)' },
  { icon: BookOpen, text: 'Ved cleared MHT-CET 2021 with a strong score' },
  { icon: Star, text: 'Multiple students admitted to top engineering colleges' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  const display = target === 49 ? (count / 10).toFixed(1) : count;

  return (
    <div ref={ref} className="text-4xl font-bold tabular-nums">
      {display}{suffix}
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section id="results" className="section-padding bg-white">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1a3a8f] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Results That Speak for{' '}
            <span className="text-[#1a3a8f]">Themselves</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Over two decades of transforming students into toppers across Pune and helping them achieve their dreams.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map(({ icon: Icon, value, suffix, label, description, color, bg, border }) => (
            <div
              key={label}
              className={`${bg} ${border} border rounded-2xl p-6 text-center card-hover`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${bg} mb-4 mx-auto`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div className={color}>
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <div className="font-semibold text-gray-800 mt-1 text-sm">{label}</div>
              <div className="text-gray-500 text-xs mt-1">{description}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-[#0f2461] to-[#1a3a8f] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Student Success Stories</h3>
              <p className="text-blue-200 mb-8">
                Real results from real students at Anand Patwardhan Tutorials
              </p>
              <div className="space-y-4">
                {achievements.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#f97316]" />
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Rishabh Gokhale', score: '91%', exam: 'Class 12 Boards', year: '2022' },
                { name: 'Amruta Patil', score: '100%', exam: 'Class 10 Maths', year: '2019' },
                { name: 'Ved Wagle', score: 'MHT-CET', exam: 'Engineering', year: '2021' },
                { name: 'Our Students', score: '95%+', exam: 'Average Boards', year: 'All Years' },
              ].map(({ name, score, exam, year }) => (
                <div key={name} className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <div className="text-2xl font-bold text-[#f97316]">{score}</div>
                  <div className="text-white font-semibold text-sm mt-1">{name}</div>
                  <div className="text-blue-300 text-xs">{exam} · {year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
