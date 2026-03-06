'use client';

import React, { useRef, useState, FormEvent } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  ChevronRight,
  Check
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Hero Entrance (Load animation - opacity is allowed here)
    gsap.from('.hero-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    });

    if (prefersReducedMotion) return;

    // 2. Contact Info Cards (Scroll animation - transforms only)
    ScrollTrigger.batch('.contact-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: true
        });
      },
      start: 'top 85%'
    });

    // 3. Map and Form Split Section (Scroll animation - transforms only)
    gsap.from('.form-col', {
      x: -40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.split-section',
        start: 'top 80%'
      }
    });

    gsap.from('.map-col', {
      x: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.split-section',
        start: 'top 80%'
      }
    });

    // 4. WhatsApp CTA Banner (Scroll animation - transforms only)
    gsap.from('.whatsapp-banner-content', {
      scale: 0.95,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.whatsapp-banner-section',
        start: 'top 85%'
      }
    });

  }, { scope: containerRef });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after a delay
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <main ref={containerRef} className="bg-background min-h-screen relative pb-0">
      
      {/* Breadcrumb Overlay (Absolute at top) */}
      <div className="absolute top-24 left-0 w-full z-20">
        <div className="container-custom">
          <nav className="flex text-sm text-white/80 font-medium" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-white">Contact Us</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-charcoal">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=1200&auto=format&fit=crop&q=80" 
            alt="Group of people eating on backyard, community feeling" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-background"></div>
        </div>

        <div className="container-custom relative z-10 hero-content text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-sans">
            We'd love to hear from you. Whether you want to place a platter order, ask about our catering options, or just say hello!
          </p>
        </div>
      </section>

      {/* 2. Contact Info Grid */}
      <section className="py-16 lg:py-24 -mt-10 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Address Card */}
            <div className="contact-card bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl mb-3">Visit Us</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Shop 4, Montana Crossing<br />
                Sefako Makgatho Dr<br />
                Montana, Pretoria, 0182
              </p>
            </div>

            {/* Phone Card */}
            <div className="contact-card bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl mb-3">Call Us</h3>
              <p className="text-gray-600 font-sans leading-relaxed mb-4">
                For general enquiries and large catering orders.
              </p>
              <a href="tel:+27125481234" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                012 548 1234
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-card bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 text-[#25D366]">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl mb-3">WhatsApp</h3>
              <p className="text-gray-600 font-sans leading-relaxed mb-4">
                Quickest way to order daily platters and specials.
              </p>
              <a href="https://wa.me/27821234567" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:text-[#1da851] transition-colors">
                082 123 4567
              </a>
            </div>

            {/* Hours Card */}
            <div className="contact-card bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl mb-3">Trading Hours</h3>
              <ul className="text-gray-600 font-sans leading-relaxed space-y-1">
                <li><span className="font-medium text-charcoal">Mon - Fri:</span> 08:00 - 17:30</li>
                <li><span className="font-medium text-charcoal">Saturday:</span> 08:00 - 14:00</li>
                <li><span className="font-medium text-charcoal">Sunday:</span> Closed</li>
                <li><span className="font-medium text-charcoal">Public Hols:</span> 08:00 - 13:00</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Map and Form Section */}
      <section className="py-16 lg:py-24 bg-white split-section overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Form Column */}
            <div className="form-col order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl mb-4">Send us a Message</h2>
                <p className="text-gray-600 font-sans">
                  Fill out the form below and our team will get back to you as soon as possible. 
                  For urgent platter orders, please use WhatsApp.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-sans bg-gray-50 focus:bg-white"
                      placeholder="e.g. Johan van der Merwe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-sans bg-gray-50 focus:bg-white"
                      placeholder="johan@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-sans bg-gray-50 focus:bg-white"
                    placeholder="082 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-sans bg-gray-50 focus:bg-white"
                  >
                    <option value="general">General Enquiry</option>
                    <option value="catering">Event Catering</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all font-sans bg-gray-50 focus:bg-white resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className={`w-full btn-primary py-4 flex items-center justify-center space-x-2 ${formStatus !== 'idle' ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                  {formStatus === 'submitting' && (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <span>Message Sent!</span>
                      <Check className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <p className="text-green-600 text-sm text-center mt-2 font-medium">
                    Thank you! We've received your message and will reply shortly.
                  </p>
                )}
              </form>
            </div>

            {/* Map Column */}
            <div className="map-col order-1 lg:order-2 h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
              <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114686.04689625345!2d28.216667!3d-25.683333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619c62b2505b%3A0xc0c89c8a98a0000!2sMontana%2C%20Pretoria!5e0!3m2!1sen!2sza!4v1710000000000!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Smulhoekie Montana Location Map"
              ></iframe>
              
              {/* Optional overlay card for map */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-charcoal">Smulhoekie Montana</h4>
                    <p className="text-sm text-gray-600">Shop 4, Montana Crossing, Pretoria</p>
                    <a href="https://maps.google.com/?q=Montana+Pretoria" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium mt-1 inline-block hover:underline">
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WhatsApp CTA Banner */}
      <section className="whatsapp-banner-section py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1771154136171-97481a26728b?w=1200&auto=format&fit=crop&q=80" 
            alt="Delicious tarts and savory platters" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85 mix-blend-multiply"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center whatsapp-banner-content bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
            <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(37,211,102,0.4)]">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl text-white mb-6">
              Craving Something Delicious?
            </h2>
            <p className="text-lg text-white/90 mb-10 font-sans max-w-xl mx-auto">
              Skip the queue and order directly via WhatsApp. Perfect for quick lunches, last-minute party platters, or weekend treats for the family.
            </p>
            <a 
              href="https://wa.me/27821234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-[#25D366] hover:bg-[#1da851] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button (Global for this page) */}
      <a 
        href="https://wa.me/27821234567" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-charcoal text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
          Quick Order?
        </span>
      </a>

    </main>
  );
}
