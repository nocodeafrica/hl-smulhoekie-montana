import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const footerStructure = {
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Our Menu", href: "/menu" },
        { label: "Gallery", href: "/gallery" },
        { label: "Customer Reviews", href: "/reviews" }
      ]
    },
    {
      title: "Our Services",
      links: [
        { label: "All Services", href: "/services" },
        { label: "Daily Meals", href: "/services/daily-meals" },
        { label: "Party Platters", href: "/services/platters" },
        { label: "Event Catering", href: "/services/catering" }
      ]
    },
    {
      title: "Legal & Contact",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" }
      ]
    }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-background pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Intro Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-3xl tracking-tight text-white">
                Smulhoekie<span className="text-primary">Montana</span>
              </span>
            </Link>
            <p className="text-background-alt/80 mb-8 max-w-sm leading-relaxed">
              Your trustworthy local favorite in South Africa. We bring warm, appetizing, and community-focused meals straight to your table.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="tel:+27125485665" className="flex items-center gap-3 text-background-alt hover:text-primary transition-colors">
                <Phone size={20} className="text-primary" />
                <span>+27 12 548 5665</span>
              </a>
              <div className="flex items-start gap-3 text-background-alt">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>Montana, Pretoria<br/>South Africa</span>
              </div>
            </div>
          </div>

          {/* Dynamic Links Columns */}
          {footerStructure.columns.map((column, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="font-heading font-semibold text-xl mb-6 text-white border-b border-white/10 pb-3 inline-block w-fit">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href}
                      className="text-background-alt/80 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background-alt/60 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Smulhoekie Montana. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
