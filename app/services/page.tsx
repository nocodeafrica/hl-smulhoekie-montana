'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Home, 
  ChevronRight, 
  ArrowRight, 
  MessageCircle, 
  Check, 
  Heart, 
  Star, 
  Users 
} from 'lucide-react';


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 1. Hero Entrance Animation
    gsap.from('.hero-element', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.1
    });

    // 2. Hero Background Parallax
    gsap.to('.hero-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // 3. Services List Staggered Entrance (TRANSFORMS ONLY - NO OPACITY)
    gsap.set('.service-card', { y: 80 });
    ScrollTrigger.batch('.service-card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out'
        });
      }
    });

    // 4. Features Section Slide In (TRANSFORMS ONLY)
    gsap.set('.feature-item', { y: 40 });
    ScrollTrigger.batch('.feature-item', {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out'
        });
      }
    });

    // 5. CTA Scale Up (TRANSFORMS ONLY)
    gsap.set('.cta-box', { scale: 0.95, y: 30 });
    gsap.to('.cta-box', {
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%'
      }
    });

  }, { scope: containerRef });

  const services = [
    {
      id: 'daily-meals',
      title: 'Daily Meals & Bakery',
      description: 'Stop by Smulhoekie Montana for your daily fix of home-style goodness. From our famous traditional vetkoek and hearty daily specials to freshly baked artisanal breads and sweet treats. Perfect for a quick lunch, a family dinner solution, or your morning coffee run.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80',
      imageAlt: 'Freshly baked buns and bread in our bakery display',
      link: '/services/daily-meals',
      highlights: ['Freshly baked daily', 'Traditional South African recipes', 'Quick & convenient']
    },
    {
      id: 'platters',
      title: 'Custom Platters',
      description: 'Elevate your next office meeting or family gathering with our beautifully arranged platters. We offer a wide variety of options including savoury bites, traditional biltong and droëwors selections, sandwich assortments, and decadent sweet treat platters tailored to your needs.',
      image: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=1200&auto=format&fit=crop&q=80',
      imageAlt: 'Beautifully arranged food platter',
      link: '/services/platters',
      highlights: ['Savoury & sweet options', 'Perfect for 10-50 people', 'Custom dietary requests']
    },
    {
      id: 'event-catering',
      title: 'Event Catering',
      description: 'Hosting a birthday party, corporate function, or a weekend braai in the Pretoria area? Let Smulhoekie handle the food. We provide comprehensive catering services with a focus on generous portions, high-quality local ingredients, and flavors that feel like home.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&auto=format&fit=crop&q=80',
      imageAlt: 'Catering event setup with various dishes',
      link: '/services/event-catering',
      highlights: ['Full event menus', 'Hot & cold buffets', 'Reliable local delivery']
    }
  ];

  return (
    <main ref={containerRef} className="relative bg-[#fff8f5] min-h-screen overflow-hidden font-sans">
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/27123456789" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 text-sm font-medium py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>

      {/* Hero Section */}
      <section className="hero-section relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div 
            className="hero-bg absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&auto=format&fit=crop&q=80')` }}
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
        </div>


        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-white/80 mb-8 hero-element">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Services</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="hero-element text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
              More Than Just a <span className="text-[#d95a2b]">Quick Bite</span>
            </h1>
            <p className="hero-element text-lg md:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed font-light drop-shadow-md">
              Explore our full range of food services. From our famous daily bakery to custom platters and full-scale event catering in Montana, Pretoria.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">Our Services</h2>
            <div className="w-24 h-1.5 bg-[#d95a2b] mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Whether you're craving a fresh vetkoek for lunch, need platters for a corporate meeting, or want fully catered meals for an event, Smulhoekie has you covered with authentic, mouth-watering food.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              
              return (
                <div 
                  key={service.id} 
                  className={`service-card flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500 group`}
                >
                  {/* Image Half */}
                  <div className="lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content Half */}
                  <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50 rounded-bl-full opacity-50 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">{service.title}</h3>
                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-4 mb-10">
                        {service.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-center text-slate-700 font-medium text-lg">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-4">
                              <Check className="w-5 h-5 text-[#d95a2b]" />
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-4">
                        <Link 
                          href={service.link}
                          className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#d95a2b] text-lg font-semibold rounded-xl text-[#d95a2b] bg-transparent hover:bg-[#d95a2b] hover:text-white transition-all duration-300 group/btn"
                        >
                          Read More
                          <ArrowRight className="ml-3 w-5 h-5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features Section */}
      <section className="features-section py-24 bg-white border-y border-orange-100">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="feature-item text-center">
              <div className="w-20 h-20 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-8 transform rotate-3 hover:rotate-6 transition-transform">
                <Heart className="w-10 h-10 text-[#d95a2b]" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Made with Love</h4>
              <p className="text-slate-600 text-lg leading-relaxed">Authentic recipes passed down and prepared fresh daily in our Montana kitchen.</p>
            </div>
            <div className="feature-item text-center">
              <div className="w-20 h-20 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-8 transform -rotate-3 hover:-rotate-6 transition-transform">
                <Star className="w-10 h-10 text-[#d95a2b]" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Premium Quality</h4>
              <p className="text-slate-600 text-lg leading-relaxed">We source the best local ingredients to ensure every bite is mouth-wateringly good.</p>
            </div>
            <div className="feature-item text-center">
              <div className="w-20 h-20 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-8 transform rotate-3 hover:rotate-6 transition-transform">
                <Users className="w-10 h-10 text-[#d95a2b]" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Community Focused</h4>
              <p className="text-slate-600 text-lg leading-relaxed">Proudly serving the Pretoria community with friendly service and a welcoming smile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 lg:py-32 relative">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-box bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#d95a2b] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                Have a Special Request?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                Whether you need a custom menu for an upcoming event, dietary-specific platters, or just want to place a large order, our team is ready to help make it perfect.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-slate-900 bg-white hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Contact Us for Custom Requests
                </Link>
                <a 
                  href="https://wa.me/27123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-lg font-bold rounded-xl text-white bg-transparent hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
