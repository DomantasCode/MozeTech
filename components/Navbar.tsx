
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Apie', href: '#about' },
    { name: 'Paslaugos', href: '#services' },
    { name: 'Darbai', href: '#portfolio' },
    { name: 'Kontaktai', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-1 shadow-sm border-b border-gray-100' : mobileMenuOpen ? 'bg-white py-2 border-b border-moze-gold/20' : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center group -ml-2">
            <img
                src="mozetech-logo.png"
                alt="MOZETECH Logo"
                className={`w-auto transition-all duration-500 group-hover:scale-105 mix-blend-multiply ${
                    scrolled ? 'h-14' : 'h-28'
                }`}
            />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-xs uppercase tracking-widest transition-colors relative group py-2 ${scrolled ? 'text-moze-dark hover:text-moze-gold' : 'text-moze-dark hover:text-moze-gold'}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-moze-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-moze-green text-moze-bg rounded-full font-bold text-xs uppercase tracking-wider hover:bg-moze-gold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Gauti Pasiūlymą
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-moze-green p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-moze-gold/20 shadow-xl transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-8 space-y-6 text-center">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-serif text-2xl text-moze-dark hover:text-moze-gold transition-colors py-2 border-b border-transparent hover:border-moze-gold/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-4 bg-moze-green text-white rounded-full font-bold uppercase tracking-widest shadow-lg mx-auto inline-block"
          >
            Gauti Pasiūlymą
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
