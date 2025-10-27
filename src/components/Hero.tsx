import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('iletisim');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="anasayfa" 
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-orange-400 leading-tight">
              Münhasır
            </h1>
            <div className="w-48 h-0.5 bg-orange-400 mx-auto my-3"></div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Yemek & Organizasyon
            </h2>
          </div>

          {/* Slogan */}
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Özel Anlarınızı Unutulmaz Lezzetlerle Taçlandırıyoruz
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
            Düğünlerinizden toplantılarınıza, özel etkinliklerinizden sokak lezzetlerine kadar 
            her anınızı mükemmel hizmetle destekliyoruz.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Bize Ulaşın
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;