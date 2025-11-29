
import React from 'react';
import { Compass, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-moze-dark text-moze-bg pt-16 border-t-4 border-moze-gold pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6 relative">

          {/* Center Decorative Element */}
          <div className="hidden xl:block absolute left-[39%] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-white/40 animate-pulse"></div>
              <div className="w-px h-20 bg-gradient-to-t from-transparent via-white/30 to-transparent"></div>
            </div>
          </div>

          {/* Brand Column */}
          <div className="md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <Compass className="w-8 h-8 text-moze-gold" />
                <span className="font-serif font-bold text-2xl text-white tracking-tight">MOZETECH</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Skaitmeninės ekspedicijos vedlys. Kuriame įrankius, kurie padeda verslams nepasiklysti technologijų džiunglėse ir pasiekti viršūnę.
            </p>

            {/* Separator Line */}
            <div className="h-px bg-white/10 w-full max-w-sm mb-8"></div>

            <div className="flex gap-4">
                <a
                    href="https://www.instagram.com/dommantas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-moze-gold hover:bg-white/10 transition-all border border-white/5 hover:border-moze-gold/30"
                >
                    <Instagram size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/company/mozetech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-moze-gold hover:bg-white/10 transition-all border border-white/5 hover:border-moze-gold/30"
                >
                    <Linkedin size={18} />
                </a>
            </div>
          </div>
          
          {/* Services and Navigation Wrapper */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Services Column */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs text-moze-gold relative inline-block">
                  Paslaugos
                  <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-moze-gold"></span>
              </h4>
              <ul className="space-y-4 text-gray-400 text-sm font-light">
                  <li><a href="#services" className="hover:text-white transition-colors">Svetainių Kūrimas</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">El. Parduotuvės</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Logotipų Kūrimas</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Automatizuoti Sprendimai</a></li>
              </ul>
            </div>

            {/* Navigation Column */}
            <div>
               <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs text-moze-gold relative inline-block">
                  Navigacija
                  <span className="absolute -bottom-2 left-0 w-1/2 h-px bg-moze-gold"></span>
               </h4>
              <ul className="space-y-4 text-gray-400 text-sm font-light">
                  <li><a href="#home" className="hover:text-white transition-colors">Pradžia</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">Apie Mus</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Paslaugos</a></li>
                  <li><a href="#portfolio" className="hover:text-white transition-colors">Darbai</a></li>
              </ul>
            </div>

            {/* Separator Line after Services and Navigation */}
            <div className="hidden xl:block md:col-span-2 h-px bg-white/10 w-[67%] -mt-2"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
