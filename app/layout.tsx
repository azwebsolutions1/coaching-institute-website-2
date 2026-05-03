import '@/app/globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anandpatwardhantutorials.com'),
  title: 'Best Coaching Classes in Pune | Anand Patwardhan Tutorials',
  description:
    'Anand Patwardhan Tutorials – Expert Maths, Physics & Chemistry coaching for CBSE 9th–12th, JEE Mains & MHT-CET in Balewadi, Pune. 25+ years experience, 5000+ students trained. Book your free demo today!',
  keywords:
    'coaching classes Pune, maths tuition Pune, science tuition Pune, CBSE coaching Balewadi, JEE coaching Pune, MHT-CET classes Pune, 10th coaching Pune, 12th science coaching Pune, Anand Patwardhan Tutorials',
  openGraph: {
    title: 'Best Coaching Classes in Pune | Anand Patwardhan Tutorials',
    description:
      'Expert Maths, Physics & Chemistry coaching for CBSE 9th–12th, JEE & MHT-CET. 25+ years experience. Book a free demo today!',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
