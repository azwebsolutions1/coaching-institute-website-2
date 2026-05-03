import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ResultsSection from '@/components/ResultsSection';
import CoursesSection from '@/components/CoursesSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
// import CtaBanner from '@/components/CtaBanner';
// import EnquirySection from '@/components/EnquirySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyUsSection />
        <CoursesSection />
        <ResultsSection />
        <TestimonialsSection />
        {/* <CtaBanner /> */}
        {/* <EnquirySection /> */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
