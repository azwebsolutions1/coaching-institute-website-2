'use client';

// import { useState } from 'react';
// import { Phone, Send, CircleCheck as CheckCircle2, Loader as Loader2, Calendar } from 'lucide-react';
// import { supabase } from '@/lib/supabase';

// const classOptions = [
//   'Class 8',
//   'Class 9',
//   'Class 10 (CBSE)',
//   'Class 11 (Science)',
//   'Class 12 (Science)',
//   'JEE Mains Preparation',
//   'MHT-CET Preparation',
//   'Other',
// ];

export default function EnquirySection() {
  // const [form, setForm] = useState({ name: '', phone: '', class_interested: '', message: '' });
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState('');

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');

  //   const { error: dbError } = await supabase.from('enquiries').insert([{
  //     name: form.name.trim(),
  //     phone: form.phone.trim(),
  //     class_interested: form.class_interested,
  //     message: form.message.trim(),
  //   }]);

  //   setLoading(false);
  //   if (dbError) {
  //     setError('Something went wrong. Please call us directly.');
  //   } else {
  //     setSuccess(true);
  //     setForm({ name: '', phone: '', class_interested: '', message: '' });
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  //   setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // return (
  //   <section id="enquiry" className="section-padding bg-white">
  //     <div className="container-max">
  //       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
  //         {/* Left: CTA content */}
  //         <div>
  //           <div className="inline-flex items-center gap-2 bg-orange-50 text-[#f97316] text-sm font-semibold px-4 py-2 rounded-full mb-6">
  //             <Calendar className="w-4 h-4" />
  //             Limited Seats Available
  //           </div>
  //           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
  //             Start Your Journey to{' '}
  //             <span className="text-[#1a3a8f]">Academic Excellence</span>{' '}
  //             Today
  //           </h2>
  //           <p className="text-gray-500 text-lg mb-8 leading-relaxed">
  //             Book a free demo class and experience the APT difference firsthand. Limited seats available for the 2024–25 batch — don&apos;t miss out!
  //           </p>

  //           {/* Benefits */}
  //           <div className="space-y-4 mb-8">
  //             {[
  //               'Free demo class — no commitment required',
  //               'Personal interaction with Anand Sir',
  //               'Batch timing & fee discussion',
  //               'Course roadmap for your grade',
  //             ].map((item) => (
  //               <div key={item} className="flex items-center gap-3">
  //                 <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
  //                 <span className="text-gray-700 font-medium">{item}</span>
  //               </div>
  //             ))}
  //           </div>

  //           {/* Direct contact */}
  //           <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
  //             <h3 className="font-bold text-gray-800">Prefer to call directly?</h3>
  //             <a
  //               href="tel:+919823000000"
  //               className="flex items-center gap-3 group"
  //             >
  //               <div className="w-10 h-10 rounded-xl bg-[#1a3a8f] flex items-center justify-center">
  //                 <Phone className="w-5 h-5 text-white" />
  //               </div>
  //               <div>
  //                 <div className="font-bold text-[#1a3a8f] group-hover:text-[#102462] transition-colors">+91 98230 00000</div>
  //                 <div className="text-gray-500 text-xs">Mon–Sat, 9AM–8PM</div>
  //               </div>
  //             </a>
  //             <a
  //               href="https://wa.me/919823000000"
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className="flex items-center gap-3 group"
  //             >
  //               <div className="w-10 h-10 rounded-xl bg-[#25d366] flex items-center justify-center">
  //                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
  //                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  //                 </svg>
  //               </div>
  //               <div>
  //                 <div className="font-bold text-[#25d366] group-hover:text-green-600 transition-colors">WhatsApp Us</div>
  //                 <div className="text-gray-500 text-xs">Quick response guaranteed</div>
  //               </div>
  //             </a>
  //           </div>
  //         </div>

  //         {/* Right: Form */}
  //         <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
  //           {success ? (
  //             <div className="text-center py-8 space-y-4">
  //               <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto">
  //                 <CheckCircle2 className="w-10 h-10 text-green-500" />
  //               </div>
  //               <h3 className="text-2xl font-bold text-gray-900">Enquiry Received!</h3>
  //               <p className="text-gray-600">
  //                 Thank you! Anand Sir will contact you within 24 hours to schedule your free demo class.
  //               </p>
  //               <button
  //                 onClick={() => setSuccess(false)}
  //                 className="btn-primary"
  //               >
  //                 Submit Another Enquiry
  //               </button>
  //             </div>
  //           ) : (
  //             <>
  //               <div className="mb-6">
  //                 <h3 className="text-2xl font-bold text-gray-900">Book Your Free Demo</h3>
  //                 <p className="text-gray-500 text-sm mt-1">Fill in your details and we&apos;ll get back to you within 24 hours.</p>
  //               </div>

  //               <form onSubmit={handleSubmit} className="space-y-5">
  //                 <div>
  //                   <label className="block text-sm font-semibold text-gray-700 mb-1.5">
  //                     Your Name <span className="text-red-500">*</span>
  //                   </label>
  //                   <input
  //                     type="text"
  //                     name="name"
  //                     value={form.name}
  //                     onChange={handleChange}
  //                     required
  //                     placeholder="Enter student's full name"
  //                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a8f] focus:ring-2 focus:ring-[#1a3a8f]/10 outline-none transition-all text-sm"
  //                   />
  //                 </div>

  //                 <div>
  //                   <label className="block text-sm font-semibold text-gray-700 mb-1.5">
  //                     Phone Number <span className="text-red-500">*</span>
  //                   </label>
  //                   <input
  //                     type="tel"
  //                     name="phone"
  //                     value={form.phone}
  //                     onChange={handleChange}
  //                     required
  //                     placeholder="+91 XXXXX XXXXX"
  //                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a8f] focus:ring-2 focus:ring-[#1a3a8f]/10 outline-none transition-all text-sm"
  //                   />
  //                 </div>

  //                 <div>
  //                   <label className="block text-sm font-semibold text-gray-700 mb-1.5">
  //                     Class / Course <span className="text-red-500">*</span>
  //                   </label>
  //                   <select
  //                     name="class_interested"
  //                     value={form.class_interested}
  //                     onChange={handleChange}
  //                     required
  //                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a8f] focus:ring-2 focus:ring-[#1a3a8f]/10 outline-none transition-all text-sm bg-white"
  //                   >
  //                     <option value="">Select your class / course</option>
  //                     {classOptions.map((opt) => (
  //                       <option key={opt} value={opt}>{opt}</option>
  //                     ))}
  //                   </select>
  //                 </div>

  //                 <div>
  //                   <label className="block text-sm font-semibold text-gray-700 mb-1.5">
  //                     Message <span className="text-gray-400 font-normal">(Optional)</span>
  //                   </label>
  //                   <textarea
  //                     name="message"
  //                     value={form.message}
  //                     onChange={handleChange}
  //                     placeholder="Any specific queries or preferred batch timing..."
  //                     rows={3}
  //                     className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a8f] focus:ring-2 focus:ring-[#1a3a8f]/10 outline-none transition-all text-sm resize-none"
  //                   />
  //                 </div>

  //                 {error && (
  //                   <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
  //                     {error}
  //                   </div>
  //                 )}

  //                 <button
  //                   type="submit"
  //                   disabled={loading}
  //                   className="w-full flex items-center justify-center gap-2 bg-[#1a3a8f] hover:bg-[#102462] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
  //                 >
  //                   {loading ? (
  //                     <>
  //                       <Loader2 className="w-4 h-4 animate-spin" />
  //                       Submitting...
  //                     </>
  //                   ) : (
  //                     <>
  //                       <Send className="w-4 h-4" />
  //                       Send Enquiry — It&apos;s Free!
  //                     </>
  //                   )}
  //                 </button>

  //                 <p className="text-center text-xs text-gray-400">
  //                   No spam. Your details are kept private and secure.
  //                 </p>
  //               </form>
  //             </>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return null; // Temporarily hide the enquiry section while we focus on other parts of the site
}
