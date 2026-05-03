import {
  GraduationCap,
  Target,
  Users,
  BookOpen,
  ChartBar as BarChart2,
  MessageSquare,
  Clock,
  Globe,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: GraduationCap,
    title: "VJTI Alumnus & Expert Educator",
    desc: "Anand Sir is a VJTI Mumbai alumnus with 25+ years of teaching experience and 8 years as an IT professional in London, UK — bringing world-class perspective to every lesson.",
    color: "text-[#1a3a8f]",
    bg: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Proven & Measurable Results",
    desc: "Our students consistently achieve 90%+ in board exams. Multiple students have scored 100% in Maths and cleared JEE / MHT-CET with excellent scores.",
    color: "text-[#f97316]",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Small Batches, Personal Attention",
    desc: "We deliberately keep batch sizes small to ensure every student gets individual attention, doubt-clearing, and customized guidance throughout their course.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: BookOpen,
    title: "Concept-First Teaching",
    desc: "Rather than rote learning, Anand Sir focuses on building deep conceptual clarity. Once the concept is clear, solving any problem becomes intuitive and enjoyable.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart2,
    title: "Regular Tests & Analysis",
    desc: "Frequent topic-wise tests, chapter tests, and full board exam test series help identify weak areas early and track continuous improvement.",
    color: "text-[#f97316]",
    bg: "bg-orange-50",
  },
  {
    icon: MessageSquare,
    title: "Always Available for Doubts",
    desc: "Students can clear doubts anytime. Regular doubt-clearing sessions ensure no concept is left unclear — crucial for competitive exam preparation.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Flexible Batch Timings",
    desc: "Morning and afternoon batches available to accommodate school schedules. Monday–Saturday timings designed for maximum learning efficiency.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Globe,
    title: "Online & Offline Classes",
    desc: "Seamlessly transitioned to online classes during the pandemic with great success. Hybrid learning options available for outstation students.",
    color: "text-[#1a3a8f]",
    bg: "bg-blue-50",
  },
];

export default function WhyUsSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1a3a8f] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The APT Difference —{" "}
            <span className="text-[#1a3a8f]">Why Students Excel Here</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We&apos;re not just a coaching class. We&apos;re a launchpad for
            academic excellence and life-long love for learning.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* About the tutor */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-[#1a3a8f] text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-sm">
                Meet Your Mentor
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Anand Patwardhan Sir
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A VJTI Mumbai alumnus and passionate educator, Anand Sir
                combines 25+ years of teaching excellence with 8 years of
                corporate IT experience from London, UK. This unique blend makes
                him not just a tutor, but a mentor who understands both
                academics and real-world applications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                As an academic topper himself, he knows exactly what it takes to
                crack boards and competitive exams — and teaches those
                strategies to every student.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "VJTI Mumbai Alumni",
                  "25+ Years Teaching",
                  "IT Professional London",
                  "CBSE Expert",
                  "JEE Mentor",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-[#1a3a8f] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/Anand_Patwardhan.jpg"
                  alt="Anand Patwardhan Sir"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Maths", detail: "CBSE 9–12 + Competitive" },
                  { label: "Physics", detail: "CBSE 11–12 + JEE/CET" },
                  { label: "Chemistry", detail: "CBSE 11–12 + JEE/CET" },
                  { label: "Science", detail: "CBSE 9–10 Complete" },
                ].map(({ label, detail }) => (
                  <div
                    key={label}
                    className="bg-white rounded-2xl p-5 border border-white/50 shadow-sm text-center"
                  >
                    <div className="text-base md:text-xl font-bold text-[#1a3a8f]">
                      {label}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
