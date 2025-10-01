import React from 'react';
import { Star, Quote } from 'lucide-react';

const References = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ayşe Kaya',
      title: 'Düğün Organizasyonu',
      rating: 5,
      content: 'XX Organizasyon sayesinde düğünümüz mükemmel geçti. Hem yemekler çok lezzetliydi hem de servis harikaydı. Tüm misafirlerimiz yemekleri çok beğendi. Kesinlikle tavsiye ederim!'
    },
    {
      id: 2,
      name: 'Mehmet Demir',
      title: 'Şirket Toplantısı',
      rating: 5,
      content: 'Şirket toplantımız için aldığımız catering hizmeti harikaydı. Zamanında geldi, sunum çok şıktı ve yemekler çok lezzetliydi. Tüm çalışanlarımız memnun kaldı.'
    },
    {
      id: 3,
      name: 'Fatma Özkan',
      title: 'Doğum Günü Organizasyonu',
      rating: 5,
      content: 'Oğlumun doğum günü için çok güzel bir organizasyon yaptılar. Çocuklar çok eğlendi ve yemekleri çok sevdi. Her şey için çok teşekkür ederim. Kesinlikle tekrar tercih edeceğim.'
    },
    {
      id: 4,
      name: 'Ali Yılmaz',
      title: 'Nişan Töreni',
      rating: 5,
      content: 'Nişan törenimiz için aldığımız hizmet mükemmeldi. Menü çok çeşitliydi, lezzetler harikaydı. Ekip çok profesyonel ve güler yüzlüydü. Herkese tavsiye ederim.'
    },
    {
      id: 5,
      name: 'Zeynep Arslan',
      title: 'Kına Gecesi',
      rating: 5,
      content: 'Kına gecemde XX Organizasyon ile çalışmak harika bir deneyimdi. Her detayı düşünmüşler, yemekler çok lezzetliydi. Misafirlerimiz çok memnun kaldı.'
    },
    {
      id: 6,
      name: 'Hasan Çelik',
      title: 'Kurumsal Etkinlik',
      rating: 5,
      content: 'Kurumsal etkinliğimizde aldığımız catering hizmeti çok başarılıydı. Sunum çok şık, lezzetler mükemmeldi. Kesinlikle tekrar tercih edeceğimiz bir firma.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="referanslar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Referanslar
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin memnuniyeti bizim en büyük başarımız. 
            Organizasyonlarımız hakkında ne düşündüklerini öğrenin.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-red-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">%100</div>
              <p className="text-sm text-gray-600">Müşteri Memnuniyeti</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">1000+</div>
              <p className="text-sm text-gray-600">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">5.0</div>
              <p className="text-sm text-gray-600">Ortalama Puan</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">%95</div>
              <p className="text-sm text-gray-600">Tekrar Tercih</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Siz de mutlu müşterilerimize katılın
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('iletisim');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hemen Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
};

export default References;