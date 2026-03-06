'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, 
  Award, 
  Heart, 
  Users, 
  Shield, 
  ArrowRight,
  MessageCircle 
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    // 1. Hero Entrance (Load animation - opacity is allowed here)
    gsap.from('.hero-content', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    });

    // 2. Story Section (Scroll animation - transforms only)
    gsap.from('.story-text', {
      x: -50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.story-section',
        start: 'top 75%',
      }
    });

    gsap.from('.story-image-container', {
      x: 50,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.story-section',
        start: 'top 75%',
      }
    });

    // 3. Values Grid (Staggered scroll animation - transforms only)
    ScrollTrigger.batch('.value-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 50,
          stagger: 0.15,
          duration: 0.7,
          ease: 'back.out(1.2)'
        });
      },
      start: 'top 85%'
    });

    // 4. Team Section (Staggered scroll animation - transforms only)
    gsap.from('.team-heading', {
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top 80%',
      }
    });

    ScrollTrigger.batch('.team-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 40,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out'
        });
      },
      start: 'top 80%'
    });

    // 5. CTA Parallax Effect
    gsap.to('.cta-bg-image', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // 6. Floating WhatsApp Button Entrance
    gsap.from('.floating-whatsapp', {
      scale: 0,
      duration: 0.5,
      ease: 'back.out(1.5)',
      delay: 1.5
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#FAF8F5] text-[#2C2C2C] min-h-screen overflow-hidden font-sans">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center space-x-2 text-sm text-stone-500 relative z-10">
        <Link href="/" className="hover:text-[#C85A32] transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#C85A32] font-medium">About Us</span>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1769615020912-fded8493d75f?w=1200&auto=format&fit=crop&q=80"
            alt="Smulhoekie Montana freshly baked goods display"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto hero-content">
          <span className="inline-block py-1 px-3 rounded-full bg-[#C85A32]/20 text-white backdrop-blur-sm border border-[#C85A32]/30 text-sm font-semibold tracking-wider uppercase mb-4">
            Welcome to Smulhoekie
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 font-light drop-shadow-md">
            Serving the Montana community with passion, authentic family recipes, and unforgettable flavor.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="story-text space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2C2C2C]">
              From Our Family Kitchen to <span className="text-[#C85A32]">Montana's Heart</span>
            </h2>
            <div className="w-20 h-1 bg-[#C85A32] rounded-full"></div>
            <p className="text-lg text-stone-600 leading-relaxed">
              Smulhoekie started in 2018 as a humble family dream right here in Montana, Pretoria. We wanted to create a space where the neighborhood could gather over truly authentic, home-cooked meals and traditional South African "tuisgebak" (home-baked goods).
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              What began with a single recipe for Ouma's legendary melktert has blossomed into a beloved local eatery. Every day, our kitchen is filled with the aroma of freshly baked breads, sizzling boerewors, and sweet treats made from scratch. We don't believe in shortcuts; we believe in the kind of quality that only comes from cooking with love.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed font-medium text-[#C85A32]">
              We aren't just a business; we are your neighbors. And at Smulhoekie, you're always treated like family.
            </p>
          </div>
          
          <div className="story-image-container relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1771498637378-c5ff74b70b52?w=1200&auto=format&fit=crop&q=80"
              alt="Wooden display case filled with traditional baked goods"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2C2C2C] mb-4">Our Core Values</h2>
            <p className="text-stone-600 text-lg">The principles that bake goodness into everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="value-card bg-[#FAF8F5] p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#C85A32]/10 rounded-xl flex items-center justify-center mb-6 text-[#C85A32]">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-[#2C2C2C]">Quality Ingredients</h3>
              <p className="text-stone-600">
                We source farm-fresh produce and partner with local Pretoria suppliers to ensure every bite is packed with premium, natural flavor.
              </p>
            </div>

            {/* Value 2 */}
            <div className="value-card bg-[#FAF8F5] p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#C85A32]/10 rounded-xl flex items-center justify-center mb-6 text-[#C85A32]">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-[#2C2C2C]">Family Recipes</h3>
              <p className="text-stone-600">
                Our menu is built on cherished family secrets passed down through generations. Authentic, traditional, and made from scratch.
              </p>
            </div>

            {/* Value 3 */}
            <div className="value-card bg-[#FAF8F5] p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#C85A32]/10 rounded-xl flex items-center justify-center mb-6 text-[#C85A32]">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-[#2C2C2C]">Community First</h3>
              <p className="text-stone-600">
                Montana is our home. We pride ourselves on creating a warm, welcoming environment where neighbors become lifelong friends.
              </p>
            </div>

            {/* Value 4 */}
            <div className="value-card bg-[#FAF8F5] p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#C85A32]/10 rounded-xl flex items-center justify-center mb-6 text-[#C85A32]">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-[#2C2C2C]">Hygiene & Safety</h3>
              <p className="text-stone-600">
                A spotless kitchen is a non-negotiable. We maintain the highest food safety standards to give you complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 team-heading">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2C2C2C] mb-4">Meet the Smulhoekie Family</h2>
          <p className="text-stone-600 text-lg">The passionate people behind your favorite local meals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Team Member 1 */}
          <div className="team-card flex flex-col items-center text-center group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#C85A32] to-[#A04523] flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-heading font-bold text-white">TR</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2C2C2C] mb-1">Tannie Rina</h3>
            <p className="text-[#C85A32] font-medium mb-4">Head Baker</p>
            <p className="text-stone-600 max-w-xs">
              The master behind our famous melktert and koeksisters. Rina wakes up before the sun to ensure the display case is full of fresh, warm goodness every morning.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="team-card flex flex-col items-center text-center group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-heading font-bold text-white">JM</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2C2C2C] mb-1">Johan van der Merwe</h3>
            <p className="text-[#C85A32] font-medium mb-4">Co-founder & Chef</p>
            <p className="text-stone-600 max-w-xs">
              Johan is our grill master and savory expert. He ensures every hearty meal leaving the kitchen tastes exactly like a Sunday lunch at home.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="team-card flex flex-col items-center text-center group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#E2A054] to-[#C85A32] flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl font-heading font-bold text-white">TN</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2C2C2C] mb-1">Thandi Ndlovu</h3>
            <p className="text-[#C85A32] font-medium mb-4">Front of House Manager</p>
            <p className="text-stone-600 max-w-xs">
              The welcoming smile that greets you at the door. Thandi knows our regulars by name and makes sure every visitor leaves feeling like part of the family.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section (with Parallax Background) */}
      <section className="cta-section relative py-28 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 w-full h-[140%] -top-[20%] z-0">
          <Image 
            src="https://images.unsplash.com/photo-1572855837743-c422c1e1a4c2?w=1200&auto=format&fit=crop&q=80"
            alt="Delicious savory party platters catering"
            fill
            className="object-cover object-center cta-bg-image"
          />
          <div className="absolute inset-0 bg-stone-900/75 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to taste the love?
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Whether you're craving a quick coffee and a sweet treat, or need full catering for your next big event in Pretoria, we're here to serve you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white bg-[#C85A32] hover:bg-[#A04523] transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/menu" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white border-2 border-white hover:bg-white hover:text-stone-900 transition-colors duration-300 w-full sm:w-auto"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/27123456789" // Placeholder SA number
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1EBE5D] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-stone-800 text-sm font-medium py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>

    </main>
  );
}
