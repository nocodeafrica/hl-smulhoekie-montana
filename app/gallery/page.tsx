'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, ChevronRight, MessageCircle, Instagram } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1769615020912-fded8493d75f?w=800&auto=format&fit=crop&q=80", alt: "Display case filled with various baked goods", h: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1671162497320-3d7b1636f154?w=800&auto=format&fit=crop&q=80", alt: "Assorted foods on a platter", h: "short" },
  { id: 3, src: "https://images.unsplash.com/photo-1763141180228-78f21f192a3c?w=800&auto=format&fit=crop&q=80", alt: "Display case filled with pastries and baked goods", h: "tall" },
  { id: 4, src: "https://images.unsplash.com/photo-1755862922067-8a0135afc1bb?w=800&auto=format&fit=crop&q=80", alt: "A table with various party snacks and sandwiches", h: "short" },
  { id: 5, src: "https://images.unsplash.com/photo-1769615020959-8a17bd77e849?w=800&auto=format&fit=crop&q=80", alt: "Assortment of pastries in a bakery case", h: "tall" },
  { id: 6, src: "https://images.unsplash.com/photo-1648970198229-b7c89fc0e2a5?w=800&auto=format&fit=crop&q=80", alt: "A wooden table topped with bowls of home-cooked food", h: "short" },
  { id: 7, src: "https://images.unsplash.com/photo-1769138885126-701ffae94ee3?w=800&auto=format&fit=crop&q=80", alt: "Assortment of pastries and baked goods on trays", h: "tall" },
  { id: 8, src: "https://images.unsplash.com/photo-1690299564210-ff855826b278?w=800&auto=format&fit=crop&q=80", alt: "Fresh tomatoes and mozzarella platter", h: "short" },
  { id: 9, src: "https://images.unsplash.com/photo-1771498637378-c5ff74b70b52?w=800&auto=format&fit=crop&q=80", alt: "Wooden display case filled with baked goods", h: "tall" },
  { id: 10, src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&auto=format&fit=crop&q=80", alt: "Group of people enjoying food at a gathering", h: "short" },
  { id: 11, src: "https://images.unsplash.com/photo-1765980161513-8dc16b396634?w=800&auto=format&fit=crop&q=80", alt: "Small bakery display case with cakes and bread", h: "tall" },
  { id: 12, src: "https://images.unsplash.com/photo-1743799168436-8d09efa452f5?w=800&auto=format&fit=crop&q=80", alt: "Fresh corn, salad, and appetizers on a table", h: "short" },
];

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.from('.hero-element', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.1,
    });

    gsap.set('.gallery-item', { y: 60 });
    ScrollTrigger.batch('.gallery-item', {
      onEnter: (elements) => {
        gsap.to(elements, { y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' });
      },
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative bg-[#fff8f5] min-h-screen font-sans">

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/27125485665"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 text-sm font-medium py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Order via WhatsApp
        </span>
      </a>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <div
            className="hero-bg absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1771154136171-97481a26728b?w=1920&auto=format&fit=crop&q=80')` }}
          />
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6 hero-element">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" /><span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Gallery</span>
          </nav>
          <h1 className="hero-element text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Feast Your <span className="text-[#d95a2b]">Eyes</span>
          </h1>
          <p className="hero-element text-lg text-white/90 max-w-xl">
            A look at what we whip up daily — fresh bakes, hearty meals, and gorgeous platters straight from our Montana kitchen.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item group relative overflow-hidden rounded-2xl bg-slate-100 break-inside-avoid mb-5 inline-block w-full shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-medium translate-y-3 group-hover:translate-y-0 transition-transform duration-300">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 md:p-16">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#d95a2b] to-orange-400 rounded-2xl flex items-center justify-center mb-6">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Follow Us for Daily Specials</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
              See what's fresh out the oven every day. Follow Smulhoekie Montana on Instagram and never miss a special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d95a2b] text-white font-bold rounded-xl hover:bg-[#c04e24] transition-colors duration-300 text-lg"
              >
                <Instagram className="w-5 h-5 mr-3" />
                Follow on Instagram
              </a>
              <a
                href="https://wa.me/27125485665"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#d95a2b] text-[#d95a2b] font-bold rounded-xl hover:bg-[#d95a2b] hover:text-white transition-all duration-300 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
