'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Check, Users, Heart, ArrowRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PlattersPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Respect reduced motion preference
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // 1. Hero Entrance (Load animation - opacity allowed here)
      gsap.from('.hero-elem', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1,
      });

      // 2. Section Headings (Scroll animation - NO opacity, transform only)
      gsap.utils.toArray('.animate-heading').forEach((heading: any) => {
        gsap.from(heading, {
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
          },
        });
      });

      // 3. Staggered Platter Cards (Scroll animation - NO opacity, transform only)
      ScrollTrigger.batch('.platter-card', {
        onEnter: (elements) => {
          gsap.from(elements, {
            y: 50,
            stagger: 0.15,
            duration: 0.7,
            ease: 'back.out(1.2)',
          });
        },
        start: 'top 85%',
      });

      // 4. Customization Section (Slide in from sides - NO opacity, transform only)
      gsap.from('.custom-img', {
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.custom-section',
          start: 'top 75%',
        },
      });

      gsap.from('.custom-text', {
        x: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.custom-section',
          start: 'top 75%',
        },
      });

      // 5. CTA Scale Up (Scroll animation - NO opacity, transform only)
      gsap.from('.cta-box', {
        scale: 0.95,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 85%',
        },
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  const platterTypes = [
    {
      title: 'Meat Lover’s Platter',
      description: 'A carnivore’s delight featuring sticky BBQ ribs, savory meatballs, marinated chicken wings, and tender beef skewers.',
      serves: 'Serves 10-12',
      image: 'https://images.unsplash.com/photo-1646809156467-6e825869b29f?w=1200&auto=format&fit=crop&q=80',
      popular: true,
    },
    {
      title: 'Artisan Sandwich Platter',
      description: 'Freshly baked breads filled with premium cold cuts, mature cheeses, egg mayo, and crisp fresh greens.',
      serves: 'Serves 10-12',
      image: 'https://images.unsplash.com/photo-1609016580259-e04ddc09a850?w=1200&auto=format&fit=crop&q=80',
      popular: false,
    },
    {
      title: 'Mixed Savory Platter',
      description: 'The ultimate crowd-pleaser. Crispy spring rolls, traditional samosas, mini quiches, and juicy cheese grillers.',
      serves: 'Serves 10-12',
      image: 'https://images.unsplash.com/photo-1646809156467-6e825869b29f?w=1200&auto=format&fit=crop&q=80',
      popular: true,
    },
    {
      title: 'Sweet Treats Platter',
      description: 'Decadent chocolate brownies, traditional koeksisters, mini milk tarts, and a selection of fresh seasonal fruit.',
      serves: 'Serves 10-12',
      image: 'https://images.unsplash.com/photo-1753918525897-d7f4038f5a5f?w=1200&auto=format&fit=crop&q=80',
      popular: false,
    },
  ];

  return (
    <main ref={containerRef} className="bg-[#FAFAF9] min-h-screen overflow-hidden">
      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/27123456789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1EBE5D] hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out font-medium">
          Order via WhatsApp
        </span>
      </a>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li>
                <Link href="/services" className="hover:text-orange-600 transition-colors">Services</Link>
              </li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-orange-600 font-medium" aria-current="page">Platters</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1609016580259-e04ddc09a850?w=1200&auto=format&fit=crop&q=80"
            alt="Delicious catering platter spread"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-zinc-900/70"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <span className="hero-elem inline-block py-1 px-3 rounded-full bg-orange-600/20 text-orange-400 font-semibold tracking-wide text-sm mb-6 border border-orange-500/30 backdrop-blur-sm">
            Smulhoekie Montana Catering
          </span>
          <h1 className="hero-elem text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg font-heading">
            Perfect Platters for <br className="hidden md:block" />
            <span className="text-orange-500">Any Occasion</span>
          </h1>
          <p className="hero-elem text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow">
            Freshly prepared savory and sweet selections to make your next meeting, party, or family gathering in Pretoria an absolute hit.
          </p>
          <div className="hero-elem flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-md bg-orange-600 text-white font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-600/30 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Order Your Platter Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Platter Types Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-heading">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 font-heading">
              Our Signature Selections
            </h2>
            <p className="text-gray-600 text-lg">
              Generously portioned and beautifully presented. Each platter is crafted on the day of your event using the freshest local ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {platterTypes.map((platter, index) => (
              <div 
                key={index} 
                className="platter-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group flex flex-col sm:flex-row"
              >
                <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                  <Image
                    src={platter.image}
                    alt={platter.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {platter.popular && (
                    <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Heart className="w-3 h-3" /> Popular
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8 w-full sm:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-orange-600 mb-3 text-sm font-semibold bg-orange-50 inline-flex w-fit px-3 py-1 rounded-full">
                    <Users className="w-4 h-4" />
                    {platter.serves}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3 font-heading group-hover:text-orange-600 transition-colors">
                    {platter.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {platter.description}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 group/link"
                    >
                      Request Pricing 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden custom-section">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative custom-img">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1753918525897-d7f4038f5a5f?w=1200&auto=format&fit=crop&q=80"
                  alt="Custom dessert and savory platter setup"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-zinc-100 rounded-full -z-10"></div>
            </div>

            <div className="w-full lg:w-1/2 custom-text">
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Tailored to Your Taste</span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 font-heading">
                Custom Platters & Dietary Requirements
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Every event is unique, and so are your guests. If our signature platters don't perfectly match your needs, we are more than happy to create a custom selection just for you. 
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Vegetarian & Vegan options available',
                  'Halaal-friendly ingredient sourcing upon request',
                  'Gluten-free and allergy-conscious preparation',
                  'Mix-and-match from our different platter styles'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-orange-100 text-orange-600 rounded-full p-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-zinc-900 text-base font-medium rounded-md text-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white transition-colors duration-300"
              >
                Discuss Your Custom Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden cta-section">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#FAFAF9]">
          <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="cta-box max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-2xl overflow-hidden relative">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1609016580259-e04ddc09a850?w=1200&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                Ready to Impress Your Guests?
              </h2>
              <p className="text-zinc-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Place your order at least 48 hours in advance to ensure we can source the freshest ingredients for your platters.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-8 py-4 rounded-md bg-orange-600 text-white font-bold text-lg hover:bg-orange-500 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Order Online Now
                </Link>
                <a 
                  href="https://wa.me/27123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-md bg-transparent border-2 border-zinc-700 text-white font-bold text-lg hover:bg-zinc-800 hover:border-zinc-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>
              <p className="text-zinc-500 text-sm mt-6">
                Delivery available in Montana, Pretoria and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
