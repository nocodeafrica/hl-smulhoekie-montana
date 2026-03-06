'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Daily Meals', href: '/services/daily-meals' },
      { label: 'Platters', href: '/services/platters' },
      { label: 'Catering', href: '/services/catering' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const isActive = (href: string) => {
    if (href === '/' && pathname !== '/') return false;
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-surface py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-heading font-bold text-2xl tracking-tight text-primary">
            Smulhoekie<span className="text-charcoal">Montana</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <div className="flex items-center gap-1 cursor-pointer py-2 text-charcoal hover:text-primary transition-colors font-medium">
                  <Link href={item.href} className={isActive(item.href) ? 'text-primary' : ''}>
                    {item.label}
                  </Link>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                  
                  {/* Desktop Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-surface rounded-md shadow-dropdown opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left border border-background-alt">
                    <div className="py-2 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`px-4 py-2 text-sm hover:bg-background hover:text-primary transition-colors ${
                            pathname === child.href ? 'text-primary bg-background' : 'text-charcoal'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`py-2 font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-charcoal'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+27125485665" className="flex items-center gap-2 text-charcoal hover:text-primary transition-colors font-medium">
            <Phone size={18} />
            <span>012 548 5665</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 text-charcoal p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-surface z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-background-alt pb-4">
                {item.children ? (
                  <div className="flex flex-col gap-4">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <Link 
                        href={item.href}
                        className={`text-xl font-heading font-medium ${isActive(item.href) ? 'text-primary' : 'text-charcoal'}`}
                        onClick={(e) => {
                          // Prevent closing if they just want to toggle dropdown by clicking the row
                          // but allow navigation if they click exactly on the link.
                          // For simplicity in mobile, we'll let the link navigate.
                        }}
                      >
                        {item.label}
                      </Link>
                      <ChevronDown
                        size={24}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180 text-primary' : 'text-charcoal'
                        }`}
                      />
                    </div>
                    {/* Mobile Dropdown */}
                    <div
                      className={`flex flex-col gap-3 pl-4 border-l-2 border-primary/20 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.label ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`text-lg ${pathname === child.href ? 'text-primary' : 'text-charcoal-light'}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-xl font-heading font-medium block ${
                      isActive(item.href) ? 'text-primary' : 'text-charcoal'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-auto pt-8">
            <a href="tel:+27125485665" className="flex items-center justify-center gap-3 bg-background-alt p-4 rounded-lg text-charcoal font-medium">
              <Phone size={20} className="text-primary" />
              <span>Call us: +27 12 548 5665</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
