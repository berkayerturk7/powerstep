
import React from 'react';
import { Layout, Users, FileText, Globe, Lock, Bell } from 'lucide-react';

const BrowserMockup: React.FC<{ image: string; url?: string }> = ({ image, url = "sharepoint.com/sites/home" }) => (
  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-white transform transition-transform duration-500 hover:-translate-y-2">
    {/* Browser Bar */}
    <div className="bg-slate-100 px-4 py-3 flex items-center gap-4 border-b border-slate-200">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
        <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/20"></div>
        <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20"></div>
      </div>
      <div className="flex-1 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 font-mono truncate">
        https://{url}
      </div>
    </div>
    {/* Content */}
    <div className="relative aspect-video bg-slate-50">
      <img src={image} alt="Sharepoint Interface" className="w-full h-full object-cover object-top" />
      {/* Glare effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  </div>
);

const SharepointSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
            <Globe size={16} />
            <span>Microsoft SharePoint</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            SharePoint ile <span className="text-primary-600">Neler Yapılabilir?</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            SharePoint sadece bir dosya depolama alanı değildir; şirketinizin dijital kalbidir. 
            İletişimi güçlendirin, verimliliği artırın ve kurumsal hafızanızı güvenle saklayın.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Feature 1: Corporate Portal */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <BrowserMockup 
                image="https://lh3.googleusercontent.com/d/1larN4RsUc2wqDAJOd9aWxvuk5Knlkztn=w1920?authuser=0" 
                url="portal.sirketiniz.com"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Kurumsal İletişim Portalı (Intranet)
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                Tüm çalışanlarınızın güne başladığı tek bir nokta hayal edin. E-posta kirliliğini azaltın ve şirket içi iletişimi modern bir web sitesi deneyimine dönüştürün.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mt-1"><Bell size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Duyurular ve Haberler</h4>
                    <p className="text-sm text-slate-500">Şirket haberlerini, duyuruları ve etkinlikleri görsel bir akışla paylaşın.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mt-1"><Layout size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Hızlı Erişim Menüleri</h4>
                    <p className="text-sm text-slate-500">Yemek listesi, servis saatleri, İK formları gibi sık kullanılanlara tek tıkla ulaşın.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2: Department Sites */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-1">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Departman ve Proje Alanları
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                Her departman veya proje ekibi için özelleştirilmiş "Alt Siteler" (Subsites) oluşturun. Dosyalar, görevler ve takvimler karmaşadan uzak, sadece ilgili ekibin erişimine açık olsun.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mt-1"><Users size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Ortak Çalışma Alanları</h4>
                    <p className="text-sm text-slate-500">İK, Muhasebe veya Satış ekipleri için ayrı ayrı tasarlanmış, yetki bazlı çalışma alanları.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mt-1"><FileText size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Canlı Dosya Düzenleme</h4>
                    <p className="text-sm text-slate-500">Word, Excel ve PowerPoint dosyaları üzerinde aynı anda, çakışma olmadan birlikte çalışın.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mt-1"><Lock size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Gelişmiş Yetkilendirme</h4>
                    <p className="text-sm text-slate-500">Kimlerin dosyalara erişebileceğini, kimlerin düzenleyebileceğini klasör bazında yönetin.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 order-2">
              <BrowserMockup 
                image="https://lh3.googleusercontent.com/d/14XFSYCeYNYAG_F40KRDJ1AOf1fQe5706=w1920?authuser=0" 
                url="portal.sirketiniz.com/sites/insan-kaynaklari"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SharepointSection;
