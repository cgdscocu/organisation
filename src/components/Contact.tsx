import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      info: '+90 212 123 45 67',
      subInfo: '+90 532 123 45 67',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: 'E-posta',
      info: 'info@xxorganizasyon.com',
      subInfo: 'iletisim@xxorganizasyon.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      info: 'Pazartesi - Cumartesi',
      subInfo: '09:00 - 18:00',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <section id="iletisim" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Organizasyonunuz için bizimle iletişime geçin. Size en uygun teklifi hazırlayalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Bize Ulaşın</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${item.bgColor} p-3 rounded-lg flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.info}</p>
                      <p className="text-gray-400 text-sm">{item.subInfo}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+902121234567"
                className="block w-full bg-green-600 hover:bg-green-700 text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                📞 Hemen Ara
              </a>
              <a
                href="mailto:info@xxorganizasyon.com"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                ✉️ E-posta Gönder
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="bg-red-600 p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-2">Ücretsiz Teklif Alın!</h4>
              <p className="text-sm mb-4">
                Organizasyonunuz için özel fiyat teklifi hazırlıyoruz
              </p>
              <a
                href="tel:+902121234567"
                className="bg-white text-red-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Şimdi Ara
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;