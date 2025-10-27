import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-extrabold tracking-wide text-red-600 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>MÜNHASIR</h1>
              <div className="w-full h-[2px] bg-red-600 my-1"></div>
              <p className="text-[10px] font-medium tracking-widest text-gray-700 uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>Yemek & Organizasyon</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('anasayfa')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Anasayfa
            </button>
            <button
              onClick={() => scrollToSection('hizmetler')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Hizmetler
            </button>
            <button
              onClick={() => scrollToSection('galeri')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection('hakkimizda')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection('referanslar')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              Referanslar
            </button>
            <button
              onClick={() => scrollToSection('iletisim')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              İletişim
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex flex-col items-center">
            <button
              onClick={() => scrollToSection('iletisim')}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Hemen Ulaşın
            </button>
            <a
              href="tel:+902121234567"
              className="text-sm text-gray-700 hover:text-red-600 transition-colors duration-200 mt-1"
            >
              +90 212 123 45 67
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-2 pt-2 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection('anasayfa')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Anasayfa
              </button>
              <button
                onClick={() => scrollToSection('hizmetler')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Hizmetler
              </button>
              <button
                onClick={() => scrollToSection('galeri')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection('hakkimizda')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection('referanslar')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Referanslar
              </button>
              <button
                onClick={() => scrollToSection('iletisim')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                İletişim
              </button>
              <button
                onClick={() => scrollToSection('iletisim')}
                className="w-full mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Hemen Ulaşın
              </button>
              <a
                href="tel:+902121234567"
                className="block w-full text-center mt-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
              >
                +90 212 123 45 67
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;