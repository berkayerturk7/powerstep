import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Neden <span className="text-primary-600">Power Step</span>?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Birçok şirket hala kritik süreçlerini manuel Excel dosyaları veya e-posta zincirleri üzerinden yürütüyor. 
              Bu durum veri kaybına, zaman israfına ve hatalara yol açar. Power Step olarak biz, sizi bu kaostan kurtarıp 
              sistematik, izlenebilir ve otomatik bir yapıya kavuşturuyoruz.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-100 text-primary-700 rounded-lg">
                  <span className="font-bold text-xl">10x</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Daha Hızlı Geliştirme</h4>
                  <p className="text-sm text-slate-600">Geleneksel yazılıma göre çok daha kısa sürede canlıya geçiş.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-100 text-primary-700 rounded-lg">
                  <span className="font-bold text-xl">0</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Lisans Karmaşası Yok</h4>
                  <p className="text-sm text-slate-600">Mevcut Microsoft 365 lisanslarınızı değerlendiriyoruz. İhtiyaca göre yeni lisans talebi önerilerinde bulunuyoruz.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              {/* Old Way */}
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h3 className="text-red-800 font-bold mb-4 flex items-center gap-2">
                  <XCircle size={20} /> Eski Yöntemler
                </h3>
                <ul className="space-y-3 text-red-700/80 text-sm">
                  <li className="flex gap-2"><span className="text-red-400">•</span> Dağınık Excel Dosyaları</li>
                  <li className="flex gap-2"><span className="text-red-400">•</span> Manuel Veri Giriş Hataları</li>
                  <li className="flex gap-2"><span className="text-red-400">•</span> E-posta ile Onay Takibi</li>
                  <li className="flex gap-2"><span className="text-red-400">•</span> Güvenlik Açıkları</li>
                </ul>
              </div>

              {/* Power Step Way */}
              <div className="bg-primary-600 p-6 rounded-2xl shadow-xl transform scale-105">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <CheckCircle size={20} /> Power Step Çözümü
                </h3>
                <ul className="space-y-3 text-primary-100 text-sm">
                  <li className="flex gap-2"><span className="text-white">•</span> Merkezi Veritabanı</li>
                  <li className="flex gap-2"><span className="text-white">•</span> Otomatik İş Akışları</li>
                  <li className="flex gap-2"><span className="text-white">•</span> Mobil Onay Sistemleri</li>
                  <li className="flex gap-2"><span className="text-white">•</span> Kurumsal Seviye Güvenlik</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;