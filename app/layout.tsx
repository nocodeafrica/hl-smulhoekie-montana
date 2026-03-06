import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Smulhoekie Montana | Local Meals, Platters & Catering',
  description: 'Your trustworthy local favorite in South Africa for daily meals, platters, and catering services. Warm, appetizing, and community-focused.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} flex flex-col min-h-screen`}>
        <Header />
        
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        
        <Footer />

        {/* Prominent Floating WhatsApp CTA */}
        <a
          href="https://wa.me/27125485665"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center hover:-translate-y-1 transform group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={32} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute right-full mr-4 bg-white text-charcoal px-3 py-1 rounded-md shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Order via WhatsApp
          </span>
        </a>
      </body>
    </html>
  );
}
