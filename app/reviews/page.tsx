'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MessageCircle, Heart, ChevronRight, ArrowRight, ThumbsUp } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Realistic South African review data
const reviews = [
  {
    id: 1,
    name: "Johan van der Merwe",
    location: "Montana Park",
    date: "2 weeks ago",
    rating: 5,
    text: "Absolutely the best home-cooked meals in Pretoria! We order their daily family meals twice a week. The bobotie and yellow rice reminds me of my grandmother's cooking. Highly recommend Smulhoekie to anyone looking for proper boerekos.",
    highlight: "Daily Meals"
  },
  {
    id: 2,
    name: "Thandi Nkosi",
    location: "Doornpoort",
    date: "1 month ago",
    rating: 5,
    text: "Ordered a mixed savory platter for my son's birthday party. The mini vetkoekies and meatballs were the first to disappear! So fresh, beautifully presented, and the service from the team was incredibly friendly from start to finish.",
    highlight: "Platters"
  },
  {
    id: 3,
    name: "Pieter & Sanet Louw",
    location: "Magalieskruin",
    date: "3 weeks ago",
    rating: 5,
    text: "Smulhoekie saved our anniversary dinner! We ordered the premium meat platter and some sweet treats. The quality of the ingredients is top-notch. It's so wonderful having such a reliable and high-quality caterer right here in the Moot.",
    highlight: "Event Catering"
  },
  {
    id: 4,
    name: "Lerato Mokoena",
    location: "Montana",
    date: "2 months ago",
    rating: 5,
    text: "I pop in almost every morning for my coffee and a fresh muffin. The staff always greet me by name. It's not just a shop; it feels like a little community hub. Keep up the amazing work, guys!",
    highlight: "Friendly Service"
  },
  {
    id: 5,
    name: "Sannie Bezuidenhout",
    location: "Sinoville",
    date: "Just now",
    rating: 4,
    text: "Delicious food as always. The chicken pie is out of this world—flaky pastry and packed with filling. Sometimes they get very busy on Friday afternoons, so it's best to order ahead, but it's always worth the wait.",
    highlight: "Baked Goods"
  },
  {
    id: 6,
    name: "Sipho Dlamini",
    location: "Annlin",
    date: "3 months ago",
    rating: 5,
    text: "We used Smulhoekie for an office function (about 30 people). The sandwich and wrap platters were fresh, varied, and catered perfectly to our vegetarian colleagues too. Very professional service and on-time delivery.",
    highlight: "Corporate Platters"
  },
  {
    id: 7,
    name: "Annetjie Venter",
    location: "Montana Park",
    date: "4 months ago",
    rating: 5,
    text: "Their Sunday lunches are a lifesaver. Roast beef, crispy potatoes, pumpkin fritters... it's a feast! Generous portions that usually leave us with leftovers for Monday. Thank you for making weekends easier.",
    highlight: "Sunday Lunch"
  },
  {
    id: 8,
    name: "Willem de Klerk",
    location: "Zambezi Country Estate",
    date: "5 months ago",
    rating: 5,
    text: "Best melktert in Gauteng, hands down. I buy one every time we have guests over and pretend I baked it myself! Jokes aside, the quality of their sweet treats is consistently excellent.",
    highlight: "Sweet Treats"
  },
  {
    id: 9,
    name: "Zanele Ndlovu",
    location: "Kameeldrift",
    date: "6 months ago",
    rating: 5,
    text: "What a warm and inviting place. The ladies behind the counter are always smiling and ready to help. It's the little touches, like an extra smile or remembering your favorite order, that makes Smulhoekie special.",
    highlight: "Atmosphere"
  }
];

export default function ReviewsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    // Hero Entrance (Opacity allowed only on initial load)
    gsap.from('.hero-element', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    });

    // Sub-headings slide up (Transform only)
    gsap.utils.toArray('.section-heading').forEach((heading: any) => {
      gsap.from(heading, {
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
        }
      });
    });

    // Review Cards Stagger (Transform only)
    ScrollTrigger.batch('.review-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 60,
          stagger: 0.1,
          duration: 0.7,
          ease: 'back.out(1.2)',
        });
      },
      once: true
    });

    // Banner Image Parallax
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

    // CTA Section Scale up (Transform only)
    gsap.from('.cta-box', {
      scale: 0.95,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      }
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-background pb-0">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-charcoal">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1771830916812-28b912eac957?w=1200&auto=format&fit=crop&q=80"
            alt="Warm inviting cafe interior"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-background"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <nav className="hero-element flex items-center space-x-2 text-sm text-gray-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Reviews</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-element inline-flex items-center space-x-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full mb-6 border border-primary/30 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">Community Love</span>
            </div>
            <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              What Montana is <span className="text-primary">Saying</span>
            </h1>
            <p className="hero-element text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-sans leading-relaxed">
              Real feedback from our wonderful customers. We pour our hearts into every meal, platter, and interaction, and nothing makes us happier than hearing about your experiences.
            </p>
            
            <div className="hero-element flex flex-wrap gap-4">
              <a href="#reviews-grid" className="btn-primary">
                Read Reviews
              </a>
              <a href="#leave-review" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/20 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-300">
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID SECTION */}
      <section id="reviews-grid" className="py-20 lg:py-28 bg-background relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background-alt to-transparent opacity-50"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 section-heading">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
              Trusted by Locals
            </h2>
            <p className="text-gray-600 font-sans text-lg">
              Don't just take our word for it. Here is what your neighbors in Montana and surrounding areas have to say about Smulhoekie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="review-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
              >
                {/* Accent line top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  <span className="inline-block px-3 py-1 bg-background-alt text-charcoal text-xs font-semibold rounded-full border border-gray-100">
                    {review.highlight}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-700 font-sans italic mb-6 leading-relaxed relative z-10">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal text-sm">{review.name}</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-0.5">
                      <span>{review.location}</span>
                      <span className="mx-2">•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative quote icon background */}
                <MessageCircle className="absolute bottom-4 right-4 w-24 h-24 text-gray-50 opacity-50 -z-0 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERSTITIAL BANNER */}
      <section className="parallax-container relative py-24 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1769605767803-870d15e0bc19?w=1200&auto=format&fit=crop&q=80"
            alt="Cozy cafe storefront"
            fill
            className="parallax-bg object-cover opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-charcoal/70"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center section-heading">
          <ThumbsUp className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Quality You Can Taste
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-sans mb-0">
            Every review is a testament to our commitment to fresh ingredients, traditional recipes, and genuine hospitality. Thank you for making us a part of your daily lives and special celebrations.
          </p>
        </div>
      </section>

      {/* LEAVE A REVIEW / CTA SECTION */}
      <section id="leave-review" className="cta-section py-20 lg:py-28 bg-background-alt relative">
        <div className="container-custom">
          <div className="cta-box bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row">
            
            {/* Left side - Leave Review */}
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <h3 className="text-3xl font-heading font-bold text-charcoal mb-4 relative z-10">
                Had a great experience?
              </h3>
              <p className="text-gray-600 font-sans mb-8 text-lg relative z-10">
                Your feedback helps us grow and continue serving the Montana community with the best meals and platters. We'd love it if you could take a minute to leave us a review on Google.
              </p>
              
              <div className="relative z-10">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                >
                  <Star className="w-5 h-5 mr-2 fill-current" />
                  Review us on Google
                </a>
                <p className="text-xs text-gray-400 mt-4">Opens in a new tab</p>
              </div>
            </div>

            {/* Right side - Contact / Order */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto flex flex-col justify-center p-10 lg:p-16">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1762922425202-2e65559c047f?w=1200&auto=format&fit=crop&q=80"
                  alt="Restaurant storefront evening"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/70"></div>
              </div>
              
              <div className="relative z-10 text-white">
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Ready to taste the difference?
                </h3>
                <p className="text-gray-200 font-sans mb-8 text-lg">
                  Whether you need a quick daily meal, catering for an event, or just a friendly chat over coffee, we're here for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary flex-1 justify-center">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a 
                    href="https://wa.me/27123456789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-charcoal transition-colors duration-300 flex-1"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
