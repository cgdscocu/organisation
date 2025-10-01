import React from 'react';
import { Award, Users, Heart, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Kalite Garantisi',
      description: 'En taze malzemeler ve hijyenik koşullarda hazırladığımız yemekler'
    },
    {
      icon: Users,
      title: 'Deneyimli Ekip',
      description: '15 yılı aşkın sektör deneyimi olan uzman chef ve servis ekibimiz'
    },
    {
      icon: Heart,
      title: 'Müşteri Memnuniyeti',
      description: 'Her projeyi kalbimizle yapıyor, %100 müşteri memnuniyeti sağlıyoruz'
    },
    {
      icon: Clock,
      title: 'Zamanında Teslimat',
      description: 'Belirlenen zamanda eksiksiz ve özenli servis hizmeti'
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Hakkımızda
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-red-600">XX Organizasyon</strong> olarak 2008 yılından bu yana 
                Türkiye'nin dört bir yanında profesyonel catering ve organizasyon hizmetleri sunuyoruz. 
                Sektördeki 15 yılı aşkın deneyimimizle, her organizasyonu özenle planlıyor ve 
                mükemmel lezzetlerle hayata geçiriyoruz.
              </p>
              
              <p>
                Düğünlerden kurumsal toplantılara, özel etkinliklerden sokak lezzetlerine kadar 
                geniş bir yelpazede hizmet veren firmamız, müşteri memnuniyetini her şeyin 
                üstünde tutuyor. Deneyimli chef ekibimiz ve profesyonel servis personelimizle 
                her anınızı unutulmaz kılmak için çalışıyoruz.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Misyonumuz</h3>
                <p className="text-gray-600">
                  En kaliteli malzemeler ve özenli hizmet anlayışıyla müşterilerimizin 
                  özel anlarını unutulmaz kılmak.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Vizyonumuz</h3>
                <p className="text-gray-600">
                  Türkiye'nin önde gelen catering firması olarak sektörde 
                  standartları belirleyen marka olmak.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="XX Organizasyon ekibi"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-red-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;