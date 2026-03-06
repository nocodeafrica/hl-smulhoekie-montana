'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Shield, Lock, Eye, Mail } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Hero entrance (on load - opacity is allowed here)
    gsap.from('.hero-elem', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Content sections (scroll triggered - NO OPACITY, transforms only)
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

    // CTA section (scroll triggered - NO OPACITY, transforms only)
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
            src="https://images.unsplash.com/photo-1628520726830-c71624b86536?w=1200&auto=format&fit=crop&q=80" 
            alt="Warm inviting restaurant atmosphere" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <nav className="hero-elem flex items-center space-x-2 text-sm text-stone-300 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-orange-400 font-medium">Privacy Policy</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="hero-elem inline-flex items-center space-x-2 bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full mb-6 border border-orange-500/30">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Data Protection</span>
            </div>
            <h1 className="hero-elem text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="hero-elem text-lg text-stone-300 mb-8 max-w-2xl leading-relaxed">
              At Smulhoekie Montana, we value your trust. This policy outlines how we handle your personal information while you enjoy our culinary offerings and community space.
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
            
            {/* Left Sidebar - Quick Links (Optional but good for layout) */}
            <div className="hidden lg:block w-1/4">
              <div className="sticky top-32 bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="font-heading font-semibold text-lg mb-4 text-slate-900">Contents</h3>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li><a href="#information-collection" className="hover:text-orange-600 transition-colors">Information We Collect</a></li>
                  <li><a href="#how-we-use" className="hover:text-orange-600 transition-colors">How We Use Your Data</a></li>
                  <li><a href="#data-security" className="hover:text-orange-600 transition-colors">Data Security</a></li>
                  <li><a href="#cookies" className="hover:text-orange-600 transition-colors">Cookies & Tracking</a></li>
                  <li><a href="#contact" className="hover:text-orange-600 transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-3/4 max-w-3xl">
              <div className="prose prose-lg prose-stone max-w-none">
                
                <div id="information-collection" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                      <Eye className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-slate-900 m-0">1. Information We Collect</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    When you visit Smulhoekie Montana, make a reservation, or place an order online, we may collect certain personal information to ensure a seamless and delightful experience. This includes:
                  </p>
                  <ul className="text-slate-600 mt-4 space-y-2 list-disc pl-5">
                    <li><strong>Contact Details:</strong> Your name, email address, phone number, and physical address (for deliveries).</li>
                    <li><strong>Transaction Information:</strong> Details about payments (processed securely through our third-party payment providers) and your order history.</li>
                    <li><strong>Technical Data:</strong> IP addresses, browser types, and device information collected automatically when you browse our website.</li>
                  </ul>
                </div>

                {/* Mid-content Image */}
                <div className="legal-section parallax-container relative h-80 rounded-2xl overflow-hidden mb-12 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1772329329618-0091534f015b?w=1200&auto=format&fit=crop&q=80" 
                    alt="Smulhoekie Montana fresh ingredients" 
                    className="parallax-img absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
                  />
                  <div className="absolute inset-0 bg-slate-900/20"></div>
                </div>

                <div id="how-we-use" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">2. How We Use Your Data</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The information we collect is used strictly to enhance your experience with Smulhoekie Montana. We utilize your data to:
                  </p>
                  <ul className="text-slate-600 space-y-2 list-disc pl-5">
                    <li>Process and fulfill your orders and table reservations.</li>
                    <li>Communicate with you regarding your bookings or inquiries.</li>
                    <li>Send promotional materials and newsletters, provided you have explicitly opted in.</li>
                    <li>Improve our website functionality, menu offerings, and customer service based on feedback and usage trends.</li>
                  </ul>
                </div>

                <div id="data-security" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-slate-900 m-0">3. Data Security</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While no online platform can guarantee 100% security, we work diligently with trusted technology partners to ensure your data remains safe. We do not sell, trade, or rent your personal identification information to others.
                  </p>
                </div>

                <div id="cookies" className="legal-section mb-12 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">4. Cookies & Tracking</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Our website uses "cookies" to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about your interaction with our site. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. Note that some parts of the site may not function properly if cookies are disabled.
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
            src="https://images.unsplash.com/photo-1765267642339-e6e1c8ed5b88?w=1200&auto=format&fit=crop&q=80" 
            alt="Contact Smulhoekie Montana" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="cta-content max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-white/20 shadow-2xl">
            <Mail className="w-12 h-12 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Questions about your privacy?
            </h2>
            <p className="text-stone-300 text-lg mb-8">
              We believe in complete transparency. If you have any concerns about how we handle your data, our team is here to help.
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
