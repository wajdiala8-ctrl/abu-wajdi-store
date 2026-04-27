import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'إلكترونيات حصرية بأسعار مناسبة',
    description: 'اكتشف أحدث الهواتف والأجهزة اللوحية بخصومات تصل إلى 40%',
    emoji: '📱'
  },
  {
    id: 2,
    title: 'مستحضرات تجميل أصلية 100%',
    description: 'أفضل العلامات التجارية العالمية للعناية بالبشرة والشعر',
    emoji: '💄'
  },
  {
    id: 3,
    title: 'عناية بالبشرة احترافية',
    description: 'منتجات طبيعية وآمنة للحصول على بشرة مشرقة وصحية',
    emoji: '✨'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 rounded-3xl p-8 md:p-16 min-h-[400px] flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="flex-1 text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">4.9 من 5 تقييم</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {slides[currentSlide].title}
              </h2>
              <p className="text-white/90 text-lg mb-6">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  تسوق الآن
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                  تصفح المنتجات
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-8xl md:text-9xl">{slides[currentSlide].emoji}</span>
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-bold text-sm animate-bounce">
                  خصم 40%
                </div>
              </div>
            </div>
          </div>

          <button onClick={prevSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <button onClick={nextSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;