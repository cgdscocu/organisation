import React from 'react';
import { Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-4">
              <h3 className="text-3xl font-bold text-red-600 leading-tight">Münhasır</h3>
              <div className="w-32 h-px bg-red-600 my-1"></div>
              <p className="text-lg font-semibold text-gray-300">Yemek & Organizasyon</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              2008 yılından bu yana Türkiye'nin dört bir yanında profesyonel catering 
              ve organizasyon hizmetleri sunuyoruz. Özel anlarınızı unutulmaz 
              lezzetlerle taçlandırıyoruz.
            </p>
            <div className="flex space-x-4">
              <div className="bg-red-600 p-2 rounded">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">Slogan</p>
                <p className="text-gray-300 text-sm">Özel Anlarınızı Unutulmaz Lezzetlerle Taçlandırıyoruz</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">+90 212 123 45 67</p>
                  <p className="text-sm text-gray-300">+90 532 123 45 67</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">info@xxorganizasyon.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Hizmet Alanlarımız</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-300">
            <div>Düğün Yemekleri</div>
            <div>Toplantı Yemekleri</div>
            <div>Event Yemekleri</div>
            <div>Sokak Lezzetleri</div>
            <div>Kurumsal Etkinlikler</div>
            <div>Özel Organizasyonlar</div>
            <div>Catering Hizmetleri</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Münhasır Yemek & Organizasyon. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                15+ yıllık tecrübe | 500+ başarılı organizasyon
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;