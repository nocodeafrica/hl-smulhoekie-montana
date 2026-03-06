'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, 
  MessageCircle, 
  Clock, 
  Star, 
  ArrowRight,
  MapPin,
  Check
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Menu Data (South African Context) ---
const menuCategories = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    description: 'Start your morning right with our hearty, home-style breakfasts served until 11:30 AM.',
    items: [
      { name: 'Farmhouse Breakfast', description: 'Two eggs, crispy spek (bacon), traditional boerewors, grilled tomato, and fresh roosterbrood.', price: 'R 85', popular: true },
      { name: 'Smulhoekie Flapjacks', description: 'Stack of three fluffy flapjacks served with butter, golden syrup, and fresh cream.', price: 'R 65', popular: false },
      { name: 'Boerewors & Egg Roll', description: 'A fresh bakery roll loaded with traditional boerewors, a fried egg, and caramelized onions.', price: 'R 55', popular: false },
      { name: 'Healthy Start Bowl', description: 'Double cream plain yoghurt topped with homemade granola, seasonal fruit, and local honey.', price: 'R 60', popular: false },
    ]
  },
  {
    id: 'light-lunches',
    title: 'Light Lunches',
    description: 'Perfect midday meals made with fresh, locally sourced ingredients.',
    items: [
      { name: 'Biltong & Cheese Tramazzini', description: 'Toasted mozzarella and premium beef biltong, served with a side salad or chips.', price: 'R 95', popular: true },
      { name: 'Traditional Bobotie', description: 'Sweet and savoury minced meat baked with an egg topping, served with yellow rice and chutney.', price: 'R 110', popular: true },
      { name: 'Chicken Mayo Toasty', description: 'Shredded chicken breast in creamy tangy mayonnaise on your choice of white, brown, or low-GI bread.', price: 'R 60', popular: false },
      { name: 'Montana Farm Salad', description: 'Fresh greens, cherry tomatoes, cucumber, feta cheese, and roasted butternut with a balsamic glaze.', price: 'R 75', popular: false },
    ]
  },
  {
    id: 'baked-goods',
    title: 'Freshly Baked Goods',
    description: 'Our pride and joy. Baked fresh every morning right here in Montana.',
    items: [
      { name: 'Traditional Melktert', description: 'A slice of creamy, cinnamon-dusted milk tart with a buttery sweet crust.', price: 'R 45', popular: true },
      { name: 'Sticky Koeksisters', description: 'Half-dozen crispy, syrupy braided pastries. A true South African classic.', price: 'R 40', popular: true },
      { name: 'Savoury Scones', description: 'Two large cheese and biltong scones served with real butter and grated cheddar.', price: 'R 55', popular: false },
      { name: 'Giant Chocolate Chip Cookie', description: 'Soft on the inside, crispy on the edges, packed with Belgian chocolate chunks.', price: 'R 25', popular: false },
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks & Beverages',
    description: 'Quench your thirst or warm up with our selection of hot and cold drinks.',
    items: [
      { name: 'Moerakoffie (Filter Coffee)', description: 'Strong, traditional filter coffee. Refills at half price.', price: 'R 28', popular: true },
      { name: 'Rooibos Tea', description: 'Local organic Rooibos tea served with hot milk and honey on the side.', price: 'R 22', popular: false },
      { name: 'Gourmet Milkshakes', description: 'Thick and creamy. Choose from Vanilla, Strawberry, Chocolate, or Bar-One.', price: 'R 45', popular: true },
      { name: 'Freshly Squeezed Juice', description: '100% pure orange or apple juice, squeezed to order.', price: 'R 35', popular: false },
    ]
  }
];

export default function MenuPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);

  // Handle active tab highlighting based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuCategories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200; // Offset for sticky header

      sections.forEach(section => {
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveTab(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 1. Hero Entrance (Opacity allowed ONLY here on page load)
    gsap.from('.hero-element', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // 2. Parallax Background (Transform only)
    gsap.to('.hero-bg', {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // 3. Menu Categories Headings (Transform only)
    ScrollTrigger.batch('.menu-category-header', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 40,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out'
        });
      }
    });

    // 4. Menu Cards (Transform only)
    ScrollTrigger.batch('.menu-card', {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out'
        });
      }
    });

    // 5. Ordering Info Slide In (Transform only)
    gsap.from('.ordering-info-block', {
      x: -40,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.ordering-section',
        start: 'top 80%'
      }
    });

    // 6. Download Banner Scale (Transform only)
    gsap.from('.download-content', {
      scale: 0.95,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.download-section',
        start: 'top 85%'
      }
    });

  }, { scope: containerRef });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Account for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className="bg-stone-50 min-h-screen relative">
      
      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/27821234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-medium">
          Order Now
        </span>
      </a>

      {/* --- Breadcrumb --- */}
      <div className="absolute top-0 left-0 w-full z-20 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-white/80 font-medium hero-element">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 mt-0.5" />
            <span className="text-white">Our Menu</span>
          </nav>
        </div>
      </div>

      {/* --- Hero Section --- */}
      <section className="hero-section relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-900">
        <div 
          className="hero-bg absolute inset-0 w-full h-[130%] -top-[15%] opacity-60 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1763141180228-78f21f192a3c?w=1200&auto=format&fit=crop&q=80')` }}
          aria-label="Freshly baked goods bakery display"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="hero-element text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Our Menu
          </h1>
          <p className="hero-element text-xl md:text-2xl text-stone-200 font-sans max-w-2xl mx-auto">
            Freshly made to order. From hearty farm breakfasts to our famous traditional baked goods.
          </p>
        </div>
      </section>

      {/* --- Main Content Area --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col lg:flex-row gap-12">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:w-1/4 relative">
          <div className="sticky top-24 bg-white rounded-2xl shadow-sm p-6 border border-stone-100">
            <h3 className="text-lg font-heading font-bold text-stone-800 mb-4">Categories</h3>
            <nav className="flex flex-col space-y-2">
              {menuCategories.map((category) => (
                <button
                  key={`nav-${category.id}`}
                  onClick={() => scrollToSection(category.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium flex items-center justify-between ${
                    activeTab === category.id 
                      ? 'bg-orange-600 text-white shadow-md' 
                      : 'text-stone-600 hover:bg-orange-50 hover:text-orange-700'
                  }`}
                >
                  {category.title}
                  {activeTab === category.id && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-stone-100">
              <h4 className="font-heading font-bold text-stone-800 mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-orange-600" />
                Kitchen Hours
              </h4>
              <ul className="text-sm text-stone-600 space-y-2">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>08:00 - 16:00</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>08:00 - 14:00</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Menu Sections */}
        <div className="lg:w-3/4 space-y-20">
          {menuCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              <div className="menu-category-header mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-800 mb-3">
                  {category.title}
                </h2>
                <p className="text-stone-600 text-lg max-w-2xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="menu-card bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full relative overflow-hidden group"
                  >
                    {/* Hover accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    
                    <div>
                      <div className="flex justify-between items-start mb-3 gap-4">
                        <h3 className="text-xl font-heading font-bold text-stone-800 flex items-center gap-2">
                          {item.name}
                          {item.popular && (
                            <span title="Popular Item">
                              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                            </span>
                          )}
                        </h3>
                        <span className="text-lg font-bold text-orange-600 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* --- Download PDF Banner --- */}
      <section className="download-section relative py-20 overflow-hidden bg-stone-900 my-12">
        <div 
          className="absolute inset-0 w-full h-full opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1769615020959-8a17bd77e849?w=1200&auto=format&fit=crop&q=80')` }}
          aria-label="Assortment of pastries displayed in a bakery case"
        />
        <div className="absolute inset-0 bg-stone-900/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center download-content">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Take Our Menu With You
          </h2>
          <p className="text-lg text-stone-200 mb-10 max-w-2xl mx-auto">
            Planning a gathering or just want to keep our offerings handy? Download our full menu in PDF format.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Download PDF Menu
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* --- Ordering Info Section --- */}
      <section className="ordering-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl ordering-info-block">
            <Image 
              src="https://images.unsplash.com/photo-1769138885126-701ffae94ee3?w=1200&auto=format&fit=crop&q=80"
              alt="Assortment of pastries and baked goods on trays"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-8">
              <h3 className="text-2xl font-heading font-bold text-white">
                Baked fresh daily in Montana
              </h3>
            </div>
          </div>

          <div className="space-y-10">
            <div className="ordering-info-block">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-800 mb-4">
                How to Place an Order
              </h2>
              <p className="text-lg text-stone-600">
                We make ordering your favorite meals and treats as simple as sending a message. Skip the queue and have your food ready when you arrive.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 ordering-info-block bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-stone-800 mb-2">1. WhatsApp Us</h4>
                  <p className="text-stone-600">
                    Send your order details to <strong className="text-stone-800">082 123 4567</strong>. Please include your name and preferred collection time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 ordering-info-block bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-stone-800 mb-2">2. Preparation Lead Times</h4>
                  <p className="text-stone-600">
                    Allow <strong className="text-stone-800">30 minutes</strong> for light lunches and breakfasts. For large baked goods orders (like whole milk tarts), please order <strong className="text-stone-800">24 hours</strong> in advance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 ordering-info-block bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-stone-800 mb-2">3. Collect & Enjoy</h4>
                  <p className="text-stone-600">
                    Pop into the shop at your designated time. Your order will be packed fresh and ready to go!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="bg-orange-600 py-16 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Craving Something Delicious?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us today to place your order or ask about our daily specials. We can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/27821234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-orange-600 bg-white hover:bg-stone-50 transition-colors duration-300 shadow-lg w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white border-2 border-white hover:bg-white hover:text-orange-600 transition-colors duration-300 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
