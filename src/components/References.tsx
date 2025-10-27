import React from 'react';

const References = () => {
  const references = [
    {
      id: 1,
      name: 'TetikTur',
      logo: '/images/ai_dtk_95979_6022024012959.webp'
    },
    {
      id: 2,
      name: 'KaleKalıp',
      logo: '/images/KALEKALIP-LOGO-01.png'
    },
    {
      id: 3,
      name: 'Gur-iş Makina',
      logo: '/images/guris.jpg'
    }
  ];

  return (
    <section id="referanslar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Referanslar
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Güvenilir iş ortaklarımız ve değerli müşterilerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center">
          {references.map((reference) => (
            <div
              key={reference.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
            >
              <img
                src={reference.logo}
                alt={reference.name}
                className="max-w-full h-24 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Siz de referanslarımıza katılın
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