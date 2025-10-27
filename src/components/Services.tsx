import React from 'react';
import { Heart, Users, Star, Coffee, Utensils, Moon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Toplantı Yemekleri',
      description: 'İş toplantılarınızı ve kurumsal etkinliklerinizi profesyonel catering hizmetimizle destekliyoruz. Kaliteli ve hijyenik hizmet garantisi.',
      image:'/images/organisation.jpg',
      icon: Users,
      color: 'text-orange-600'
    },
    {
      id: 2,
      title: 'Sokak Lezzetleri',
      description: 'Geleneksel Türk sokak lezzetleri ile etkinliklerinize farklı bir hava katın. Döner, köfte, balık ekmek ve daha fazlası.',
      image:'/images/tantuni.jpg',
      icon: Coffee,
      color: 'text-yellow-600'
    },
    {
      id: 3,
      title: 'Düğün Organizasyonu',
      description: 'Hayatınızın en özel gününü unutulmaz lezzetlerle taçlandırın. Geleneksel ve modern menü seçenekleri ile düğününüzü mükemmelleştiriyoruz.',
      image:'/images/wedding1.jpg',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      id: 4,
      title: 'Catering Hizmetleri',
      description: 'Her türlü etkinliğiniz için profesyonel catering hizmeti sunuyoruz. Kalite ve lezzet konusunda hiçbir taviz vermiyoruz.',
      image:'/images/catering.jpg',
      icon: Utensils,
      color: 'text-green-600'
    },
    {
      id: 5,
      title: 'Piknik Organizasyonu',
      description: 'Açık havada keyifli anlar için piknik organizasyonları düzenliyoruz. Yemeklerden eğlenceye her şeyi düşünüyoruz.',
      image:'/images/piknik.jpg',
      icon: Star,
      color: 'text-blue-600'
    },
    {
      id: 6,
      title: 'İftar Organizasyonu',
      description: 'Ramazan ayında özel iftar organizasyonları düzenliyoruz. Geleneksel lezzetlerle dolu menülerimizle iftar sofralarınızı zenginleştiriyoruz.',
      image:'/images/iftar.jpg',
      icon: Moon,
      color: 'text-purple-600'
    }

  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hizmetlerimiz
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Her türlü organizasyonunuz için profesyonel catering hizmeti sunuyoruz. 
            Kalite ve lezzet konusunda hiçbir taviz vermiyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                    <IconComponent className={`h-6 w-6 ${service.color}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('iletisim');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Teklif Alın
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;