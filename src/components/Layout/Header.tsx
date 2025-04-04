
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'}`}>
      {/* Top Bar with Contact Info and Social Media */}
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-gray-600 mb-2 md:mb-0 items-center">
            <a href="mailto:contato@d3sengenharia.com.br" className="flex items-center hover:text-ds3-gold transition-colors duration-300 mb-1 md:mb-0">
              <Mail size={16} className="mr-2" />
              contato@d3sengenharia.com.br
            </a>
            <a href="tel:+552221412489" className="flex items-center hover:text-ds3-gold transition-colors duration-300 whitespace-nowrap">
              <Phone size={16} className="mr-2" />
              (22) 2141-2489
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-ds3-gold transition-colors duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-ds3-gold transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-ds3-gold transition-colors duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-ds3-gold transition-colors duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center">
            <img src="/lovable-uploads/b59f931d-d236-43bf-97a4-bea078868c6b.png" alt="DS3 Engenharia" className="h-14" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#about" className="nav-link">Sobre Nós</a>
            <Link to="/linha-profissional" className="nav-link">Linha Profissional</Link>
            <Link to="/enxoval-offshore" className="nav-link">Enxoval Offshore</Link>
            <Link to="/enxoval-hospitalar" className="nav-link">Enxoval Hospitalar</Link>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-ds3-gold focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-4">
          <Link to="/" className="px-4 py-2 text-gray-700 hover:text-ds3-gold hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Início</Link>
          <a href="#about" className="px-4 py-2 text-gray-700 hover:text-ds3-gold hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Sobre Nós</a>
          <Link to="/linha-profissional" className="px-4 py-2 text-gray-700 hover:text-ds3-gold hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Linha Profissional</Link>
          <Link to="/enxoval-offshore" className="px-4 py-2 text-gray-700 hover:text-ds3-gold hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Enxoval Offshore</Link>
          <Link to="/enxoval-hospitalar" className="px-4 py-2 text-gray-700 hover:text-ds3-gold hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Enxoval Hospitalar</Link>
          <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-ds3-gold hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Contato</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
