import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, UtensilsCrossed } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Viral Posts', href: '#viral' },
    { name: 'Collab', href: '#collab' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
           <img 
             src="/logo.jpg" 
             alt="Bihari Bawarchi Logo" 
             className="w-12 h-12 rounded-full object-cover shadow-lg"
           />
           <span className={`text-xl font-serif font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
             Bihari Bawarchi
           </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-brand-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.instagram.com/bihari_bawarchi__/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 flex items-center gap-2"
          >
            <Instagram size={16} />
            Follow
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.instagram.com/bihari_bawarchi__/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-600 text-white py-3 rounded-lg text-center font-medium"
          >
            Visit Instagram
          </a>
        </div>
      )}
    </header>
  );
};