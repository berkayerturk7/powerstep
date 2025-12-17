
import React from 'react';
import { Mail, Send } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="mb-8 inline-block">
               <Logo className="h-12" variant="white" />
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Microsoft Power Platform ile işletmeleri dijitalleştiriyor, verimliliği artırıyor ve kurumsal hafızanızı güçlendiriyoruz. Geleceğin iş dünyasına bizimle adım atın.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#comparison" className="hover:text-primary-400 transition-colors">Neden Biz?</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-white font-bold mb-6">İletişim</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500" />
                <span>info@powerstep.co</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Bülten</h3>
            <p className="text-xs text-slate-400 mb-4">En son teknoloji trendlerinden haberdar olmak için kaydolun.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-lg transition-colors">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex justify-center md:justify-start items-center text-xs text-slate-500">
          <p>&copy; 2024 Power Step Digital Solutions. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
