'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, 
  Briefcase, 
  Calendar, 
  Heart, 
  Users, 
  MessageCircle, 
  Settings, 
  MapPin, 
  Clock, 
  ArrowRight,
  Phone,
  CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CateringPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    // Hero Entrance (Load Animation - Opacity is permitted here)
    gsap.from('.hero-elem', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.1
    });

    // General Slide Up Elements (Scroll Animation - Transform ONLY)
    gsap.utils.toArray('.animate-up').forEach((el: any) => {
      gsap.from(el, {
        y: 60,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      });
    });

    // Staggered Cards (Scroll Animation - Transform ONLY)
    ScrollTrigger.batch('.stagger-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 50,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    });

    // Process Steps Stagger (Scroll Animation - Transform ONLY)
    ScrollTrigger.batch('.process-step', {
      onEnter: (elements) => {
        gsap.from(elements, {
          x: -40,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    });

    // Parallax Background
    gsap.to('.parallax-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      
      {/* Breadcrumbs */}
      <div className="bg-orange-50/50 border-b border-orange-100 py-3">
        <div className="container-custom">
          <nav className="flex text-sm font-medium text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-charcoal">Catering</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="hero-elem inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold tracking-wide mb-6">
                Smulhoekie Montana
              </span>
              <h1 className="hero-elem text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal leading-tight mb-6">
                Professional Local <span className="text-orange-600">Catering</span>
              </h1>
              <p className="hero-elem text-lg md:text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                Making your events delicious and stress-free. From intimate family gatherings to large corporate lunches in Pretoria, we bring hearty, home-cooked flavor right to your table.
              </p>
              <div className="hero-elem flex flex-col sm:flex-row gap-4">
                <Link href="#inquiry-form" className="btn-primary">
                  Book Catering
                </Link>
                <Link href="/menu" className="btn-outline">
                  View Menu Options
                </Link>
              </div>
              
              <div className="hero-elem mt-10 flex items-center gap-4 text-sm text-gray-600 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-orange-200 border-2 border-white flex items-center justify-center text-orange-700 font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p>Trusted by 500+ locals for their events.</p>
              </div>
            </div>

            <div className="hero-elem relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?w=1200&auto=format&fit=crop&q=80"
                alt="A beautifully plated hearty meal"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-100 flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-charcoal">Made with Love</p>
                  <p className="text-sm text-gray-600">Authentic South African flavors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-orange-50/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">Events We Cater To</h2>
            <p className="text-lg text-gray-600 font-sans">
              No matter the occasion, our team ensures your guests are well-fed and happy. We specialize in providing high-quality, comforting meals for various gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Corporate Lunches",
                desc: "Impress clients and treat your team with our professional lunch platters and hot meal buffets tailored for the boardroom."
              },
              {
                icon: Calendar,
                title: "Birthdays",
                desc: "Celebrate another trip around the sun with food that everyone will love, from savory snacks to hearty main courses."
              },
              {
                icon: Heart,
                title: "Small Weddings",
                desc: "Intimate, beautiful, and delicious. We craft memorable, home-style menus for your special day without the extravagant price tag."
              },
              {
                icon: Users,
                title: "Family Gatherings",
                desc: "Spend less time in the kitchen and more time with loved ones. We perfectly handle the Sunday roasts and braai side dishes."
              }
            ].map((event, index) => (
              <div key={index} className="stagger-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-orange-50 group">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <event.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{event.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-xl animate-up">
              <Image 
                src="https://images.unsplash.com/photo-1610053190980-ee7ef0438949?w=1200&auto=format&fit=crop&q=80"
                alt="Cooked meat with vegetables on a plate"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="animate-up mb-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">How It Works</h2>
                <p className="text-lg text-gray-600 font-sans">
                  Booking catering with us is as comforting as our food. We've streamlined the process to ensure your event planning is completely stress-free.
                </p>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-200 before:to-transparent">
                {[
                  {
                    icon: MessageCircle,
                    title: "1. Consultation",
                    desc: "Reach out via our form or WhatsApp. We'll discuss your vision, venue, guest count, and the overall vibe of your event in Montana."
                  },
                  {
                    icon: Settings,
                    title: "2. Menu Selection",
                    desc: "Choose from our popular set menus or work with us to customize a selection that perfectly fits your dietary needs and preferences."
                  },
                  {
                    icon: CheckCircle2,
                    title: "3. Quote & Confirmation",
                    desc: "Receive a transparent, itemized quote with no hidden fees. Once approved, a deposit secures your date on our calendar."
                  },
                  {
                    icon: MapPin,
                    title: "4. Delivery & Setup",
                    desc: "On the big day, we arrive promptly, set up the food beautifully, and ensure everything is ready so you can simply enjoy."
                  }
                ].map((step, index) => (
                  <div key={index} className="process-step relative flex items-start gap-6">
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-orange-100 text-orange-600 shadow-sm shrink-0">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-heading font-bold text-charcoal mb-2">{step.title}</h3>
                      <p className="text-gray-600 font-sans">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <section className="parallax-container relative h-[400px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1767713362918-d6db856570ba?w=1200&auto=format&fit=crop&q=80"
            alt="Warm inviting local cafe interior at night"
            fill
            className="parallax-bg object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-up">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Bringing the <span className="text-orange-400">Community</span> Together
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-sans">
            Great food is the heart of every successful gathering. Let Smulhoekie handle the kitchen while you create memories.
          </p>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-24 bg-orange-50/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden animate-up">
            <div className="grid md:grid-cols-5 h-full">
              
              {/* Form Info Side */}
              <div className="md:col-span-2 bg-orange-600 p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Request a Quote</h3>
                  <p className="text-orange-100 font-sans mb-8">
                    Fill out the form with your event details, and we'll get back to you within 24 hours with menu suggestions and pricing.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-orange-200 shrink-0" />
                      <div>
                        <p className="font-semibold">Call Us</p>
                        <p className="text-orange-100">012 345 6789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-orange-200 shrink-0" />
                      <div>
                        <p className="font-semibold">Response Time</p>
                        <p className="text-orange-100">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-orange-500/50">
                  <p className="text-sm text-orange-100 italic">
                    "The catering for our office party was phenomenal. The food was hot, on time, and absolutely delicious!" - Sarah M., Pretoria
                  </p>
                </div>
              </div>

              {/* Form Fields Side */}
              <div className="md:col-span-3 p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-charcoal">Full Name</label>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-gray-50 focus:bg-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-charcoal">Phone Number</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-gray-50 focus:bg-white" placeholder="082 123 4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-semibold text-charcoal">Event Date</label>
                      <input type="date" id="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-gray-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-sm font-semibold text-charcoal">Guest Count</label>
                      <select id="guests" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-gray-50 focus:bg-white">
                        <option value="">Select an option</option>
                        <option value="10-20">10 - 20 Guests</option>
                        <option value="21-50">21 - 50 Guests</option>
                        <option value="51-100">51 - 100 Guests</option>
                        <option value="100+">100+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-semibold text-charcoal">Event Type</label>
                    <select id="type" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-gray-50 focus:bg-white">
                      <option value="">What kind of event are you hosting?</option>
                      <option value="corporate">Corporate Lunch / Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="wedding">Small Wedding</option>
                      <option value="family">Family Gathering / Braai</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-semibold text-charcoal">Dietary Needs & Additional Details</label>
                    <textarea id="details" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-gray-50 focus:bg-white resize-none" placeholder="Let us know about any allergies, specific menu ideas, or budget constraints..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg">
                    Send Inquiry
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom text-center animate-up">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-6">Need answers right away?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Skip the form and chat with us directly on WhatsApp. We're happy to discuss your catering needs instantly.
          </p>
          <a 
            href="https://wa.me/27820000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors duration-300 shadow-lg hover:shadow-xl gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
