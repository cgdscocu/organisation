import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Düğün organizasyonu',
      
    },
    {
      id: 2,
      src: '/images/kokorec.jpg',
      alt: 'Toplantı catering',
      
    },
    {
      id: 3,
      src: '/images/ordovr.jpg',
      alt: 'Event yemekleri',
      
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Özel etkinlik',
      
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Gourmet menü',
      
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Şık sunum',
      
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2067403/pexels-photo-2067403.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Düğün pastası',
      
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Kokteyl ikramları',
      
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Galeri
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gerçekleştirdiğimiz organizasyonlardan kareler. Her projemizde aynı 
            özenle çalışıyor, mükemmel sonuçlar elde ediyoruz.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
            <p className="text-gray-600">Başarılı Organizasyon</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
            <p className="text-gray-600">Mutlu Müşteri</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <p className="text-gray-600">Yıllık Tecrübe</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
            <p className="text-gray-600">Menü Çeşidi</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Büyütülmüş görsel"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;