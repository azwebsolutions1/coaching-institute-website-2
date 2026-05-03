import { Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f2461] text-white">
      <div className="container-max py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <Image 
                  src="/logo.jpeg" 
                  alt="Anand Patwardhan Tutorials Logo" 
                  width={40} 
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="font-bold text-white text-sm">
                  Anand Patwardhan
                </div>
                <div className="text-[#f97316] text-xs font-semibold uppercase tracking-wider">
                  Tutorials
                </div>
              </div>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              Pune&apos;s most trusted Maths, Physics &amp; Chemistry coaching
              for 25+ years. VJTI alumnus, passionate educator, proven results.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+918452848451"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f97316] flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918452848451"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25d366] flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/T2f24dK1YdnKJmaH9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-400 flex items-center justify-center transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Courses</h4>
            <ul className="space-y-2.5">
              {[
                "CBSE Grade 9th & 10th",
                "CBSE Grade 11th & 12th",
                "JEE Mains Preparation",
                "MHT-CET Coaching",
                "VITEEE & Other Entrances",
              ].map((item) => (
                <li key={item}>
                  <span className="text-blue-300 hover:text-white transition-colors text-sm cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Subjects</h4>
            <ul className="space-y-2.5">
              {[
                "Mathematics (Gr. 9–12)",
                "Physics (Gr. 11–12)",
                "Chemistry (Gr. 11–12)",
                "Science (Gr. 9–10)",
              ].map((item) => (
                <li key={item}>
                  <span className="text-blue-300 text-sm cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#f97316] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+918452848451"
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    +91 8452848451
                  </a>
                  <div className="text-blue-400 text-xs">Mon–Sat, 9AM–8PM</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f97316] mt-0.5 flex-shrink-0" />
                <div className="text-blue-300 text-sm">
                  Balewadi, Pune
                  <br />
                  <span className="text-blue-400 text-xs">
                    Maharashtra 411045
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-400 text-xs">
            © 2024 Anand Patwardhan Tutorials. All rights reserved.
          </p>
          <p className="text-blue-400 text-xs">
            Balewadi, Pune · CBSE Coaching · JEE · MHT-CET
          </p>
        </div>
      </div>
    </footer>
  );
}
