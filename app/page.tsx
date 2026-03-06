'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Star, ChevronRight, ArrowRight, Leaf, Clock, Users } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    title: 'Daily Meals',
    description: 'Home-cooked specials ready for collection every day. Skip the cooking without skipping the quality.',
    image: 'https://images.unsplash.com/photo-1648970198229-b7c89fc0e2a5?w=800&auto=format&fit=crop&q=80',
    href: '/services/daily-meals',
  },
  {
    title: 'Party Platters',
    description: 'Savoury & sweet platters for office events, birthdays, and family gatherings. Serves 10–50 people.',
    image: 'https://images.unsplash.com/photo-1571162497320-3d7b1636f154?w=800&auto=format&fit=crop&q=80',
    href: '/services/platters',
  },
  {
    title: 'Custom Catering',
    description: 'Full-scale catering for corporate functions, weddings, and celebrations across Pretoria.',
    image: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&auto=format&fit=crop&q=80',
    href: '/services/catering',
  },
];

const menuItems = [
  { name: 'Traditional Vetkoek', desc: 'Freshly fried, filled your way', price: 'From R15' },
  { name: 'Daily Braai Pack', desc: 'Meat, salad & pap — ready to eat', price: 'From R85' },
  { name: 'Savoury Platter (20 pax)', desc: 'Mixed finger foods & sandwiches', price: 'From R350' },
  { name: 'Homemade Rusks', desc: 'Buttermilk baked the traditional way', price: 'From R60' },
  { name: 'Bobotie Special', desc: 'Wednesday favourite — order by 10am', price: 'From R70' },
  { name: 'Sweet Treat Platter', desc: 'Koeksisters, melktert & more', price: 'From R280' },
];

const testimonials = [
  { name: 'Angie V.', review: 'Best vetkoek in Montana, hands down. My team orders platters every Friday — never disappointed!', rating: 5 },
  { name: 'Pieter M.', review: 'Used Smulhoekie for our year-end function. The food was incredible and they handled everything professionally.', rating: 5 },
  { name: 'Lebo S.', review: 'The daily meal special is my lunch every Wednesday. Feels like Mom cooked it herself.', rating: 5 },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Hero entrance — load-based, opacity allowed
    gsap.from('.hero-element', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2,
    });

    // Hero parallax
    gsap.to('.hero-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true },
    });

    // Service cards — transforms only
    gsap.set('.service-card', { y: 60 });
    ScrollTrigger.batch('.service-card', {
      onEnter: (els) => gsap.to(els, { y: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out' }),
    });

    // Menu items
    gsap.set('.menu-item', { y: 40 });
    ScrollTrigger.batch('.menu-item', {
      onEnter: (els) => gsap.to(els, { y: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out' }),
    });

    // Testimonials
    gsap.set('.testimonial-card', { y: 50 });
    ScrollTrigger.batch('.testimonial-card', {
      onEnter: (els) => gsap.to(els, { y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }),
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#fff8f5] min-h-screen font-sans">

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/27125485665"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center justify-center group"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 text-sm font-medium py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Order via WhatsApp
        </span>
      </a>

      {/* ─── HERO ─── */}
      <section className="hero-section relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <div
            className="hero-bg absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1769615020912-fded8493d75f?w=1920&auto=format&fit=crop&q=80')` }}
          />
          <div className="absolute inset-0 bg-slate-900/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <p className="hero-element text-[#d95a2b] font-semibold text-sm uppercase tracking-widest mb-4">Montana, Pretoria</p>
          <h1 className="hero-element text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
            Your Local <span className="text-[#d95a2b]">Taste of Home</span>
          </h1>
          <p className="hero-element text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
            Freshly prepared daily meals, delicious baked goods, and custom platters for any occasion. Made with love in Montana.
          </p>
          <div className="hero-element flex flex-wrap gap-4">
            <a
              href="https://wa.me/27125485665"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 hover:border-white/50 transition-all"
            >
              View Menu
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-16 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Leaf, title: 'Fresh Ingredients', desc: 'Sourced locally every morning for the best flavour.' },
              { icon: Clock, title: 'Daily Specials', desc: 'New menu items every day — order by 10am for lunch.' },
              { icon: Users, title: 'Community Favourite', desc: 'Proudly serving Montana families for years.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8 text-[#d95a2b]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">What We Offer</h2>
            <div className="w-16 h-1.5 bg-[#d95a2b] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="service-card group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed flex-1">{s.description}</p>
                  <div className="mt-5 flex items-center text-[#d95a2b] font-semibold group-hover:gap-2 transition-all gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MENU PREVIEW ─── */}
      <section className="py-20 bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Popular Items</h2>
            <div className="w-16 h-1.5 bg-[#d95a2b] mx-auto rounded-full mb-6" />
            <p className="text-slate-500 text-lg max-w-xl mx-auto">A taste of what's waiting for you. Full menu available on request.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="menu-item bg-[#fff8f5] rounded-2xl p-6 border border-orange-100 flex items-start gap-4 hover:border-[#d95a2b]/30 hover:shadow-sm transition-all"
              >
                <div className="w-3 h-3 rounded-full bg-[#d95a2b] flex-shrink-0 mt-1.5" />
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <span className="text-[#d95a2b] font-semibold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-[#d95a2b] text-[#d95a2b] font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#d95a2b] hover:text-white transition-all duration-300"
            >
              View Full Menu <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">What Montana is Saying</h2>
            <div className="w-16 h-1.5 bg-[#d95a2b] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d95a2b] text-[#d95a2b]" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{t.review}"</p>
                <p className="font-bold text-slate-900">{t.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="text-[#d95a2b] font-semibold hover:underline">
              Read all reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Craving Something <span className="text-[#d95a2b]">Delicious?</span>
            </h2>
            <p className="text-white/80 text-xl mb-10">
              Message us on WhatsApp to place an order, ask about today's specials, or book catering for your next event.
            </p>
            <a
              href="https://wa.me/27125485665"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-10 py-5 rounded-2xl text-xl hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
