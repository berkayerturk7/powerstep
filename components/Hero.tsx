
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero3D from './Hero3D';

const Hero: React.FC = () => {

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Light Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50/90 backdrop-blur-md text-primary-700 text-sm font-semibold mb-6 border border-primary-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Profesyonel Power Platform Hizmetleri
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8 drop-shadow-sm">
            Şirketiniz <span className="gradient-text">Microsoft Ekosisteminde</span> mi? <br />
            O Zaman Dijitalleşmek <span className="gradient-text">Çok Kolay.</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed bg-white/60 backdrop-blur-sm rounded-lg p-2 -ml-2">
            Kurumsal süreçlerinizi özelleştirilmiş yazılımlarla dijitalleştiriyoruz. 
            Manuel iş yükünü azaltın, Excel'den kurtulun, verimliliğinizi artırın ve Sharepoint ile kurumsal hafızanızı oluşturun.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              onClick={handleScrollToServices}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 group"
            >
              Hizmetlerimizi Keşfedin
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>%100 Microsoft Entegre</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Hızlı Geliştirme Süreci</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <CheckCircle2 size={18} className="text-green-500" />
              <span>Kurumsal Güvenlik Standartları</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
