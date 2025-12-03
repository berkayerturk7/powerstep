
import React, { useState, useEffect } from 'react';
import { Car, Zap, BellRing, BarChart3, CheckCircle2, Package, MailCheck, Smartphone, Target, LayoutDashboard, Users } from 'lucide-react';

// --- Types & Data ---

interface Story {
  id: string;
  category: string;
  title: React.ReactNode;
  description: string;
  challenges: string;
  features: {
    icon: React.ElementType;
    title: string;
    desc: string;
  }[];
  stat: string;
  images: string[];
  mobileImage?: string; // Optional mobile mockup image
  isMobileLandscape?: boolean; // Orientation for mobile mock
}

const stories: Story[] = [
  {
    id: 'inventory',
    category: 'Üretim & Lojistik',
    title: <>Uçtan Uca <span className="text-primary-600">Envanter ve Zimmet</span> Yönetimi</>,
    description: "Şirket içi tüm demirbaşların kaydı, kişiye zimmetlenmesi ve depo transferleri tek bir platformda. İşe yeni başlayanlar için otomatik form oluşturma ve e-posta ile onay süreçleri.",
    challenges: "Manuel tutulan Excel listelerinde kaybolan envanterler, kimde olduğu bilinmeyen cihazlar ve kağıt israfına neden olan zimmet formları operasyonu yavaşlatıyordu.",
    features: [
      {
        icon: MailCheck,
        title: "Otomatik Onay Sistemi",
        desc: "Power Automate ile personele otomatik zimmet e-postası gider. Personel onayladığında kopyası bulutta arşivlenir."
      },
      {
        icon: Package,
        title: "Anlık Stok Takibi",
        desc: "Hangi ürünün depoda, hangisinin personelde olduğu canlı olarak izlenir."
      },
      {
        icon: Smartphone,
        title: "Mobilden Yönetim",
        desc: "Sahada veya ofis dışında, cep telefonunuzdan tüm envanter işlemlerini ve transferleri yönetin."
      }
    ],
    stat: "Geliştirme Süresi: 2 Hafta",
    images: [
      "https://lh3.googleusercontent.com/d/1JIV82tCLOdeIeBcsQwITd_e6FAGXTZ68=w1920?authuser=0", // Dashboard/Ana Ekran
      "https://lh3.googleusercontent.com/d/1V9TllQa1gtvQNrpexvufGM4byIPn3Ehv=w1920?authuser=0", // Liste
      "https://lh3.googleusercontent.com/d/1bpgVBZCwPzSSPu-Sihl4ZrTlB4UCJm0H=w1920?authuser=0", // Detay
      "https://lh3.googleusercontent.com/d/1v4tpnP_ZmgIN9Woz0gUNwW-NLtYTxBfb=w1920?authuser=0"  // E-posta Görüntüsü
    ],
    // Mobilde de aynı Dashboard görselini kullanıyoruz
    mobileImage: "https://lh3.googleusercontent.com/d/1JIV82tCLOdeIeBcsQwITd_e6FAGXTZ68=w1920?authuser=0", 
    isMobileLandscape: true
  },
  {
    id: 'performance',
    category: 'İnsan Kaynakları',
    title: <>Veri Odaklı <span className="text-primary-600">Performans Yönetimi</span></>,
    description: "Çalışan performansının, hedeflerin ve yetkinliklerin dijital ortamda şeffaf bir şekilde ölçüldüğü kapsamlı değerlendirme sistemi. Yönetim için hazırlanan özel dashboard ile anlık analiz imkanı.",
    challenges: "Yılda bir yapılan manuel değerlendirmelerin yetersizliği, sübjektif puanlamalar ve geçmişe dönük performans verilerinin analiz edilememesi.",
    features: [
      {
        icon: LayoutDashboard,
        title: "Yönetim Dashboard'u",
        desc: "Şirket genelindeki performans karnesini, departman ve kişi bazlı grafiklerle tek ekranda inceleyin."
      },
      {
        icon: Target,
        title: "Hedef ve KPI Takibi",
        desc: "Çalışanlara atanan hedeflerin yıl içindeki gerçekleşme oranlarını anlık olarak izleyin."
      },
      {
        icon: Users,
        title: "Şeffaf Değerlendirme",
        desc: "Veriye dayalı, izlenebilir ve adil bir performans değerlendirme süreci oluşturun."
      }
    ],
    stat: "Geliştirme Süresi: 3 Hafta",
    images: [
      "https://lh3.googleusercontent.com/d/1uXEA7-AtdFspI0asVyQzCbF9fQ21sWC-=w1920?authuser=0", // Performans Listesi
      "https://lh3.googleusercontent.com/d/1Hj5AO62oLNwhEtrsuabY-QiQuVrY1zwX=w1920?authuser=0"  // Yönetim Dashboard
    ],
    mobileImage: undefined
  },
  {
    id: 'fleet',
    category: 'İdari İşler',
    title: <>Büyük şirketlerde <span className="text-primary-600">Filo Yönetimi</span> Dönüşümü</>,
    description: "İdari işler departmanları için geliştirdiğimiz araç takip sistemi ile operasyonel verimliliği artırdık. Araç tahsis, masraf ve bakım süreçleri artık dijital.",
    challenges: "Şirket, 100+ araçlık filosunu dağınık Excel tabloları ile yönetmeye çalışıyordu. Bakım tarihleri kaçırılıyor ve masraf takibi yapılamıyordu.",
    features: [
      {
        icon: Car,
        title: "Araç Tahsis Yönetimi",
        desc: "Hangi aracın kimde olduğu, kilometre takibi ve zimmet süreçleri tek ekranda."
      },
      {
        icon: BellRing,
        title: "Akıllı Bildirimler",
        desc: "Bakım, sigorta ve muayene tarihleri yaklaşınca sistem otomatik hatırlatma yapar."
      },
      {
        icon: BarChart3,
        title: "Masraf Analizi",
        desc: "Yakıt ve bakım giderlerinin departman bazlı anlık raporlanması."
      }
    ],
    stat: "6 Haftada Canlıya Geçiş",
    images: [
      "https://lh3.googleusercontent.com/d/12R5pQX4l1sTpATsvzIYk4v2gBWml9VSs=w1920?authuser=0",
      "https://lh3.googleusercontent.com/d/1vC9q0auDdac9V6qa6g2cw5u_LWhEJE5p=w1920?authuser=0",
      "https://lh3.googleusercontent.com/d/1Fov3axAi5sQLXHJdz7_rszi0dromj7Zf=w1920?authuser=0",
      "https://lh3.googleusercontent.com/d/1PEaiFzTvTReAeB5tcxgSTUQLs53wnHdP=w1920?authuser=0"
    ],
    mobileImage: undefined
  }
];

// --- Sub-Components ---

const LaptopSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative mx-auto w-full group perspective-1000 z-10">
       <div className="relative transform transition-transform duration-500 group-hover:rotate-1 origin-bottom">
        {/* Laptop Screen Frame */}
        <div className="relative bg-slate-900 rounded-t-[1.5rem] pt-[2.5%] px-[2.5%] pb-0 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-700 rounded-full z-20 shadow-inner"></div>
          
          <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
            {images.map((src, index) => (
              <img 
                key={index}
                src={src} 
                alt={`Screen ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Screen Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Laptop Base */}
        <div className="relative bg-slate-800 h-5 md:h-7 rounded-b-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] flex justify-center border-t border-slate-700">
          <div className="w-24 h-1 md:h-1.5 bg-slate-700 rounded-b-lg mt-0"></div>
        </div>
      </div>
    </div>
  );
};

const MobileFrame: React.FC<{ image: string; isLandscape?: boolean }> = ({ image, isLandscape = false }) => {
  // Landscape vs Portrait sizing
  // Increased Landscape size slightly from 480px to 540px based on user feedback
  const widthClass = isLandscape 
    ? "w-[290px] md:w-[420px] lg:w-[540px]" 
    : "w-[120px] md:w-[160px] lg:w-[180px]";
  
  const aspectRatio = isLandscape ? "aspect-[19.5/9]" : "aspect-[9/19.5]";

  return (
    <div className={`relative ${widthClass} z-20 transition-all duration-300`}>
      {/* Phone Case */}
      <div className="relative bg-slate-900 rounded-[2rem] p-1.5 md:p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700">
        {/* Screen */}
        <div className={`relative rounded-[1.5rem] overflow-hidden bg-black ${aspectRatio}`}>
          <img 
            src={image} 
            alt="Mobile App" 
            className="w-full h-full object-cover object-top"
          />
          {/* Notch Logic */}
          {isLandscape ? (
             <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-5 bg-slate-900 rounded-r-xl z-30"></div>
          ) : (
             <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-20 bg-slate-900 rounded-b-xl z-30"></div>
          )}
          
          {/* Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
        </div>
        
        {/* Buttons */}
        {isLandscape ? (
            <>
                <div className="absolute -top-0.5 left-16 w-8 h-1 bg-slate-800 rounded-b-md"></div>
                <div className="absolute -bottom-0.5 right-16 w-8 h-1 bg-slate-800 rounded-t-md"></div>
            </>
        ) : (
            <>
                <div className="absolute top-20 -left-1 w-1 h-8 bg-slate-700 rounded-l-md"></div>
                <div className="absolute top-16 -right-1 w-1 h-12 bg-slate-700 rounded-r-md"></div>
            </>
        )}
      </div>
    </div>
  );
};

// --- Main Component ---

const SuccessStories: React.FC = () => {
  return (
    <section id="success-stories" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Başarı Hikayeleri</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Gerçek Sorunlar, <br />
            <span className="text-primary-600">Dijital Çözümler</span>
          </h2>
        </div>

        <div className="space-y-40">
          {stories.map((story, index) => (
            <div key={story.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              
              {/* Content Side - Reduced Width to 40% */}
              <div className="lg:w-[40%] space-y-8">
                <div>
                   <span className="inline-block px-4 py-1.5 bg-slate-200 text-slate-600 rounded-full text-xs font-bold mb-5 tracking-wide uppercase">
                     {story.category}
                   </span>
                   <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                     {story.title}
                   </h3>
                   <p className="text-lg text-slate-600 leading-relaxed">
                     {story.description}
                   </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-orange-400 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-orange-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl -z-10"></div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={20} className="text-orange-500" />
                    <h4 className="font-bold text-slate-900">Mevcut Durum & Zorluklar</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {story.challenges}
                  </p>
                </div>

                <div className="space-y-6">
                  {story.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                        <feature.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                   <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-xl border border-green-100 font-bold shadow-sm">
                      <CheckCircle2 size={20} />
                      {story.stat}
                   </div>
                </div>
              </div>

              {/* Visual Side - Increased Width to 60% */}
              <div className="lg:w-[60%] w-full relative pl-4 pb-12">
                {/* Decorative blob behind */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr ${index % 2 === 0 ? 'from-blue-100 to-transparent' : 'from-purple-100 to-transparent'} rounded-full blur-3xl -z-10`} />
                
                <LaptopSlider images={story.images} />
                
                {/* Mobile Mockup Overlay */}
                {story.mobileImage && (
                  <div className={`absolute -bottom-8 z-30 drop-shadow-2xl ${
                    story.isMobileLandscape 
                      ? '-right-4 lg:-right-8 lg:-bottom-24' // Adjusted bottom further down to accommodate slight size increase
                      : '-right-2 lg:-right-12 lg:-bottom-16'
                  }`}>
                     <MobileFrame image={story.mobileImage} isLandscape={story.isMobileLandscape} />
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
