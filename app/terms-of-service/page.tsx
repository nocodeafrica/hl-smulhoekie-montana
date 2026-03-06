'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, FileText, Check, AlertCircle, MessageCircle } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TermsOfServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Hero entrance
    gsap.from('.hero-elem', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Content sections (NO OPACITY, transforms only)
    ScrollTrigger.batch('.legal-section', {
      onEnter: (els) => gsap.from(els, { 
        y: 40, 
        stagger: 0.15, 
        duration: 0.7, 
        ease: 'power2.out' 
      }),
      start: 'top 85%',
    });

    // Decorative image parallax
    gsap.to('.parallax-img', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    // CTA section (NO OPACITY, transforms only)
    gsap.from('.cta-content', {
      scale: 0.95,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-stone-50 min-h-screen text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1759147877000-1ff5530da05b?w=1200&auto=format&fit=crop&q=80" 
            alt="Smulhoekie Montana dining experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <nav className="hero-elem flex items-center space-x-2 text-sm text-stone-300 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-orange-400 font-medium">Terms of Service</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="hero-elem inline-flex items-center space-x-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full mb-6 border border-orange-500/30">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Legal Agreement</span>
            </div>
            <h1 className="hero-elem text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="hero-elem text-lg text-stone-300 mb-8 max-w-2xl leading-relaxed">
              Welcome to Smulhoekie Montana. By accessing our website or utilizing our services, you agree to comply with the following terms and conditions.
            </p>
            <p className="hero-elem text-sm text-stone-400">
              Effective Date: January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Sidebar */}
            <div className="hidden lg:block w-1/4">
              <div className="sticky top-32 bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="font-heading font-semibold text-lg mb-4 text-slate-900">Contents</h3>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li><a href="#acceptance" className="hover:text-orange-600 transition-colors">1. Acceptance of Terms</a></li>
                  <li><a href="#orders" className="hover:text-orange-600 transition-colors">2. Orders & Reservations</a></li>
                  <li><a href="#intellectual-property" className="hover:text-orange-600 transition-colors">3. Intellectual Property</a></li>
                  <li><a href="#liability" className="hover:text-orange-600 transition-colors">4. Limitation of Liability</a></li>
                  <li><a href="#changes" className="hover:text-orange-600 transition-colors">5. Changes to Terms</a></li>
                </ul>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-3/4 max-w-3xl">
              <div className="prose prose-lg prose-stone max-w-none">
                
                <div id="acceptance" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                      <Check className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-slate-900 m-0">1. Acceptance of Terms</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    By accessing and using the Smulhoekie Montana website, mobile applications, and physical premises, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
                  </p>
                </div>

                <div id="orders" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">2. Orders & Reservations</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We strive to provide accurate descriptions and pricing for all menu items. However, errors may occasionally occur. Smulhoekie Montana reserves the right to:
                  </p>
                  <ul className="text-slate-600 space-y-2 list-disc pl-5">
                    <li>Refuse or cancel any orders placed for items listed at an incorrect price.</li>
                    <li>Modify menu items, ingredients, or pricing without prior notice based on seasonal availability and market conditions.</li>
                    <li>Require a minimum of 24 hours notice for large group reservations or catering cancellations. Deposits may be non-refundable if canceled late.</li>
                  </ul>
                </div>

                {/* Mid-content Image */}
                <div className="legal-section parallax-container relative h-80 rounded-2xl overflow-hidden mb-12 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1772329375454-ac4f170e57a0?w=1200&auto=format&fit=crop&q=80" 
                    alt="Smulhoekie Montana interior details" 
                    className="parallax-img absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
                  />
                  <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply"></div>
                </div>

                <div id="intellectual-property" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
                  <p className="text-slate-600 leading-relaxed">
                    All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, and data compilations is the property of Smulhoekie Montana or its content suppliers and protected by international copyright laws. Unauthorized use, reproduction, or distribution of our materials is strictly prohibited.
                  </p>
                </div>

                <div id="liability" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-slate-900 m-0">4. Limitation of Liability</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Smulhoekie Montana and its affiliates will not be liable for any damages of any kind arising from the use of this site or from any information, content, materials, products, or services included on or otherwise made available to you through this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
                  </p>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    Regarding food consumption: While we take extreme care in food preparation and note common allergens, we cannot guarantee a 100% allergen-free environment due to the potential for cross-contamination.
                  </p>
                </div>

                <div id="changes" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">5. Changes to Terms</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Smulhoekie Montana reserves the right to modify these terms at any time. We do so by posting and drawing attention to the updated terms on this site. Your decision to continue to visit and make use of the site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1762944081311-e0a1a62e5fb7?w=1200&auto=format&fit=crop&q=80" 
            alt="Contact Smulhoekie Montana team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="cta-content max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-white/20 shadow-2xl">
            <MessageCircle className="w-12 h-12 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Need clarification on our terms?
            </h2>
            <p className="text-stone-300 text-lg mb-8">
              If you have any questions regarding our Terms of Service, reservations policies, or anything else, we are just a message away.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-600/30 group"
            >
              Contact Us
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
