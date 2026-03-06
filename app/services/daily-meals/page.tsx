'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, 
  Calendar, 
  MessageCircle, 
  MapPin, 
  Check, 
  Heart, 
  Clock,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function DailyMealsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    // 1. Hero Entrance (Uses opacity because it's on load, not scroll)
    gsap.from('.hero-element', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.1
    });

    // 2. How It Works - Scroll Triggered (Transforms ONLY, NO opacity:0)
    gsap.from('.step-card', {
      y: 50,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.steps-section',
        start: 'top 80%',
      }
    });

    // 3. Weekly Menu - Scroll Triggered (Transforms ONLY)
    gsap.from('.menu-day-card', {
      x: -40,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.menu-section',
        start: 'top 75%',
      }
    });

    gsap.from('.menu-image', {
      scale: 0.95,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.menu-image-container',
        start: 'top 80%',
      }
    });

    // 4. CTA Section - Scroll Triggered (Transforms ONLY)
    gsap.from('.cta-content', {
      scale: 0.95,
      y: 30,
      duration: 0.7,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%',
      }
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#FFFDFB] min-h-screen overflow-hidden">
      
      {/* Breadcrumbs */}
      <div className="bg-[#FFFDFB] pt-8 pb-4 border-b border-orange-100">
        <div className="container-custom">
          <nav className="flex text-sm text-stone-500 font-sans hero-element">
            <Link href="/" className="hover:text-[#C84C21] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <Link href="/services" className="hover:text-[#C84C21] transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <span className="text-stone-800 font-medium">Daily Meals</span>
          </nav>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#C84C21] font-semibold text-sm mb-6 hero-element">
                <Heart className="w-4 h-4" />
                <span>Made with love in Montana</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-stone-900 leading-tight mb-6 hero-element">
                Delicious <span className="text-[#C84C21]">Daily Meals</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-stone-600 font-medium mb-4 hero-element">
                Skip the cooking, not the quality.
              </p>
              
              <p className="text-base md:text-lg text-stone-500 mb-8 leading-relaxed hero-element font-sans">
                Enjoy wholesome, home-cooked dinners prepared fresh daily. Perfect for busy families and professionals who want a hearty, nutritious meal without the hassle of prep and cleanup.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 hero-element">
                <a href="#weekly-menu" className="btn-primary bg-[#C84C21] hover:bg-[#A63D1A] border-none text-white">
                  View This Week's Menu
                </a>
                <a href="#how-it-works" className="btn-outline border-[#C84C21] text-[#C84C21] hover:bg-[#C84C21] hover:text-white">
                  How It Works
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-stone-500 hero-element font-sans">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-orange-200 border-2 border-white flex items-center justify-center text-[#C84C21]">
                      <Heart className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                <p>Trusted by 200+ Montana families</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl hero-element">
              <Image 
                src="https://images.unsplash.com/photo-1648970198229-b7c89fc0e2a5?w=1200&auto=format&fit=crop&q=80"
                alt="A wooden table topped with hearty home-cooked bowls of food"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-[#C84C21]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-stone-900">Fresh Every Day</p>
                  <p className="text-sm text-stone-500 font-sans">Prepared daily for optimal taste</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. How It Works Section */}
      <section id="how-it-works" className="py-20 bg-stone-50 steps-section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 mb-4">
              Dinner Made <span className="text-[#C84C21]">Simple</span>
            </h2>
            <p className="text-lg text-stone-600 font-sans">
              Three easy steps to get a delicious, home-cooked meal on your table tonight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-orange-200 -z-0"></div>

            {/* Step 1 */}
            <div className="step-card relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-[#C84C21] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                <Calendar className="w-8 h-8 -rotate-3" />
              </div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-[#C84C21] text-xs font-bold rounded-full mb-4">STEP 1</div>
              <h3 className="text-xl font-heading font-bold text-stone-900 mb-3">Check the Menu</h3>
              <p className="text-stone-600 font-sans">
                We post our new weekly menu every Sunday. Browse the delicious daily options to see what catches your eye.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-[#C84C21] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg -rotate-3">
                <MessageCircle className="w-8 h-8 rotate-3" />
              </div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-[#C84C21] text-xs font-bold rounded-full mb-4">STEP 2</div>
              <h3 className="text-xl font-heading font-bold text-stone-900 mb-3">Order by 10 AM</h3>
              <p className="text-stone-600 font-sans">
                Send us a quick WhatsApp message with your order and portion sizes before 10:00 AM on the day.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-orange-100 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-[#C84C21] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                <MapPin className="w-8 h-8 -rotate-3" />
              </div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-[#C84C21] text-xs font-bold rounded-full mb-4">STEP 3</div>
              <h3 className="text-xl font-heading font-bold text-stone-900 mb-3">Collect & Enjoy</h3>
              <p className="text-stone-600 font-sans">
                Swing by our Montana kitchen between 16:00 and 18:00 on your way home. It's hot, packed, and ready!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Weekly Menu Section */}
      <section id="weekly-menu" className="py-20 bg-white menu-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Menu List */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 mb-4">
                  This Week's <span className="text-[#C84C21]">Menu</span>
                </h2>
                <p className="text-lg text-stone-600 font-sans">
                  Hearty, generous portions made with fresh ingredients. <br className="hidden sm:block" />
                  <span className="font-semibold text-stone-800">Only R85 per standard portion.</span>
                </p>
              </div>

              <div className="space-y-4">
                {/* Monday */}
                <div className="menu-day-card flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-orange-100 bg-orange-50/50 hover:bg-orange-50 transition-colors">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="font-heading font-bold text-[#C84C21] text-lg">Monday</div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-lg mb-1">Traditional Mac & Cheese</h4>
                    <p className="text-stone-600 font-sans text-sm">Creamy, rich macaroni and cheese topped with crispy bacon bits, served with a fresh side salad.</p>
                  </div>
                </div>

                {/* Tuesday */}
                <div className="menu-day-card flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-stone-100 hover:bg-stone-50 transition-colors">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="font-heading font-bold text-[#C84C21] text-lg">Tuesday</div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-lg mb-1">Authentic Cape Malay Bobotie</h4>
                    <p className="text-stone-600 font-sans text-sm">Sweet and savory spiced mince baked with a golden egg topping, served with yellow rice and Mrs. Ball's chutney.</p>
                  </div>
                </div>

                {/* Wednesday */}
                <div className="menu-day-card flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-stone-100 hover:bg-stone-50 transition-colors">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="font-heading font-bold text-[#C84C21] text-lg">Wednesday</div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-lg mb-1">Creamy Chicken a la King</h4>
                    <p className="text-stone-600 font-sans text-sm">Tender chicken pieces in a rich, creamy mushroom and pepper sauce, served over fluffy white rice.</p>
                  </div>
                </div>

                {/* Thursday */}
                <div className="menu-day-card flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-stone-100 hover:bg-stone-50 transition-colors">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="font-heading font-bold text-[#C84C21] text-lg">Thursday</div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-lg mb-1">Hearty Beef Stew</h4>
                    <p className="text-stone-600 font-sans text-sm">Slow-cooked beef with carrots and potatoes in a savory gravy, accompanied by green beans and buttery mashed potatoes.</p>
                  </div>
                </div>

                {/* Friday */}
                <div className="menu-day-card flex flex-col sm:flex-row gap-4 p-5 rounded-xl border border-stone-100 hover:bg-stone-50 transition-colors">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="font-heading font-bold text-[#C84C21] text-lg">Friday</div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-lg mb-1">Smulhoekie's Cottage Pie</h4>
                    <p className="text-stone-600 font-sans text-sm">Savory ground beef in a rich gravy, topped with a thick layer of cheesy, golden-baked mashed potatoes.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-100 inline-flex items-start gap-3">
                <Check className="w-5 h-5 text-[#C84C21] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700 font-sans">
                  <strong>Dietary Note:</strong> We can accommodate certain dietary requirements upon request. Please mention any allergies when ordering.
                </p>
              </div>
            </div>

            {/* Menu Image & Info */}
            <div className="lg:col-span-5 menu-image-container">
              <div className="sticky top-24">
                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl menu-image mb-6">
                  <Image 
                    src="https://images.unsplash.com/photo-1743799168436-8d09efa452f5?w=1200&auto=format&fit=crop&q=80"
                    alt="Fresh corn, salad, and hearty appetizers on a table"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="bg-stone-900 rounded-2xl p-8 text-white shadow-xl menu-image">
                  <h4 className="font-heading font-bold text-xl mb-4 text-orange-400">Portion Sizes</h4>
                  <ul className="space-y-3 font-sans text-stone-300 mb-6">
                    <li className="flex justify-between items-center border-b border-stone-700 pb-2">
                      <span>Standard Portion</span>
                      <span className="font-bold text-white">R85</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-stone-700 pb-2">
                      <span>Large / Hungry Portion</span>
                      <span className="font-bold text-white">R110</span>
                    </li>
                    <li className="flex justify-between items-center pb-2">
                      <span>Kiddies Portion</span>
                      <span className="font-bold text-white">R55</span>
                    </li>
                  </ul>
                  <p className="text-sm text-stone-400 italic">
                    * Prices subject to change. Delivery available in Montana for an additional R30.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-24 relative cta-section">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1726455414693-4323bf8cbb75?w=1200&auto=format&fit=crop&q=80"
            alt="A plate of freshly prepared food with a fork and knife"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center cta-content bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Never Ask <span className="text-orange-400">"What's For Dinner?"</span> Again
            </h2>
            <p className="text-lg md:text-xl text-stone-200 font-sans mb-10">
              Join our community of happy families in Montana. Get our weekly menu sent straight to your phone and order with a single message.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <a 
                href="https://wa.me/27123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary bg-[#25D366] hover:bg-[#1DA851] text-white border-none text-lg px-8 py-4 w-full sm:w-auto shadow-lg shadow-green-900/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Subscribe on WhatsApp
              </a>
              <Link 
                href="/contact" 
                className="btn-outline border-white text-white hover:bg-white hover:text-stone-900 text-lg px-8 py-4 w-full sm:w-auto"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
