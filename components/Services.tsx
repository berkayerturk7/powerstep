import React from 'react';
import { Database, Workflow, Layout, LineChart, ShieldCheck, Users } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Power Apps Geliştirme",
    description: "Şirket içi ihtiyaçlarınıza özel, mobil ve web uyumlu uygulamalar. Kağıt formları ve karmaşık Excel tablolarını modern arayüzlere dönüştürüyoruz.",
    icon: Layout
  },
  {
    title: "Power Automate İş Akışları",
    description: "Tekrarlayan görevleri otomatize edin. Onay süreçleri, bildirimler ve veri aktarımlarını robotik süreçlerle hızlandırın.",
    icon: Workflow
  },
  {
    title: "SharePoint Çözümleri",
    description: "Kurumsal hafıza ve doküman yönetimi. Departmanlar arası işbirliğini artıran güvenli intranet portalları.",
    icon: Database
  },
  {
    title: "Power BI Raporlama",
    description: "Verilerinizi anlamlı görsel raporlara dönüştürün. Karar alma süreçlerinizi gerçek zamanlı analizlerle güçlendirin.",
    icon: LineChart
  },
  {
    title: "Kurumsal Entegrasyon",
    description: "Mevcut ERP, CRM ve diğer yazılımlarınızla Microsoft 365 ekosistemini (Teams, Outlook) tam uyumlu hale getiriyoruz.",
    icon: Users
  },
  {
    title: "Danışmanlık ve Eğitim",
    description: "Ekibinizin dijital yetkinliklerini artırın. Microsoft ekosisteminin gücünü keşfetmeniz için stratejik yol haritası.",
    icon: ShieldCheck
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dijital Dönüşüm Hizmetlerimiz</h2>
          <p className="text-slate-600 text-lg">
            İhtiyacınıza uygun, ölçeklenebilir ve güvenli çözümlerle iş süreçlerinizi modernize ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;