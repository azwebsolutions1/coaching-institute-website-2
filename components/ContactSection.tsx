import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1a3a8f] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            Find Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Visit Us in <span className="text-[#1a3a8f]">Balewadi, Pune</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We&apos;re conveniently located in Balewadi, Pune. Walk in or call
            ahead to schedule a visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 8452848451",
                sub: "Mon–Sat, 9 AM – 8 PM",
                href: "tel:+918452848451",
                color: "bg-blue-50 text-[#1a3a8f]",
              },
              {
                icon: ({ className }: { className: string }) => (
                  <svg
                    className={className}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                label: "WhatsApp",
                value: "Chat with Us",
                sub: "Quick response guaranteed",
                href: "https://wa.me/918452848451",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: MapPin,
                label: "Address",
                value: "Balewadi, Pune",
                sub: "Maharashtra, India 411045",
                href: "https://maps.google.com/?q=Balewadi+Pune",
                color: "bg-orange-50 text-[#f97316]",
              },
              {
                icon: Clock,
                label: "Batch Timings",
                value: "5:00–7:00 PM (9th–10th)",
                sub: "6:30–8:30 AM & 2:45–4:30 PM (11th–12th)",
                href: null,
                color: "bg-purple-50 text-purple-600",
              },
            ].map(({ icon: Icon, label, value, sub, href, color }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-bold text-gray-900 hover:text-[#1a3a8f] transition-colors text-sm block"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="font-bold text-gray-900 text-sm">
                      {value}
                    </div>
                  )}
                  <div className="text-gray-500 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map embed */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8989767245534!2d73.7700546!3d18.5785927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b94797000001%3A0x8c825b7c57d2358d!2sAnand%20Patwardhan%20Tutorials!5e0!3m2!1sen!2sin!4v1777817262847!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anand Patwardhan Tutorials Location - Balewadi, Pune"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
