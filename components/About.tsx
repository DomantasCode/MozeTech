
import React from 'react';
import { CheckCircle2, User, Zap, Compass } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      <div
        ref={elementRef}
        className={`container mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side - Focused on the person */}
          <div className="lg:w-5/12 relative order-1 flex justify-center lg:justify-center">
             <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(26,60,48,0.15)] border-4 border-moze-bg group">
                {/* Updated Image Source from provided Instagram data */}
                <img
                    src="dmcademy-hero.jpg"
                    alt="Domantas Moisejevas"
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 -translate-y-8"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-0 left-0 w-full bg-moze-green/95 backdrop-blur-sm p-4 text-center border-t border-moze-gold/30">
                    <h3 className="font-serif text-xl text-white font-bold">Domantas Moisejevas</h3>
                    <p className="text-moze-gold text-[10px] uppercase tracking-[0.2em] mt-1">Kūrėjas</p>
                </div>
             </div>

             {/* Decorative Separator Element in the gap (Desktop only) */}
             <div className="hidden lg:flex absolute top-1/2 -right-12 transform -translate-y-1/2 flex-col items-center gap-3 z-20">
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-moze-gold/60 to-transparent"></div>
                <div className="p-2 rounded-full border border-moze-gold/30 bg-white shadow-lg text-moze-gold animate-pulse">
                   <Compass size={24} />
                </div>
                <div className="w-px h-32 bg-gradient-to-t from-transparent via-moze-gold/60 to-transparent"></div>
             </div>

             {/* Decorative element behind */}
             <div className="hidden md:block absolute md:-top-6 md:right-6 lg:right-12 w-full max-w-sm h-full border-2 border-moze-gold/20 rounded-2xl -z-10"></div>
             <div className="hidden md:block absolute md:-bottom-6 md:right-4 lg:right-6 w-32 h-32 bg-moze-gold/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Text Content - Focused on Solo Agency Benefits */}
          <div className="lg:w-7/12 order-2">
             <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-moze-green rounded-full bg-moze-bg text-moze-green text-xs font-bold uppercase tracking-widest shadow-sm">
                <User size={14} />
                <span>Freelance & Solo Agency</span>
             </div>
             
             <h2 className="font-serif text-4xl lg:text-5xl font-bold text-moze-green mb-8 leading-tight">
               Kodėl Verta Rinktis <br/>
               <span className="text-moze-gold italic">Vieno Žmogaus</span> Komandą?
             </h2>

             <p className="text-moze-dark/80 text-lg leading-relaxed mb-10 font-light max-w-2xl">
               Didelėse agentūrose jūsų projektas dažnai perduodamas jaunesniesiems darbuotojams. Čia jūs bendraujate tiesiogiai su kūrėju. Jokių tarpininkų, jokių "sugedusių telefonų", tik greiti ir kokybiški sprendimai. Aš asmeniškai įsigilinu į kiekvieną detalę, užtikrindamas, kad galutinis rezultatas ne tik atitiktų, bet ir viršytų lūkesčius.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-moze-bg/50 p-6 rounded-xl shadow-sm border border-gray-100 hover:border-moze-gold/50 transition-colors group">
                    <div className="w-10 h-10 bg-moze-green rounded-lg flex items-center justify-center text-moze-gold mb-4 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={20} />
                    </div>
                    <h4 className="font-bold text-moze-dark mb-2">Tiesioginė Komunikacija</h4>
                    <p className="text-sm text-gray-500">Bendraujate tiesiogiai su tuo, kas rašo kodą. Jokių projektų vadovų, kurie lėtina procesus.</p>
                </div>

                <div className="bg-moze-bg/50 p-6 rounded-xl shadow-sm border border-gray-100 hover:border-moze-gold/50 transition-colors group">
                    <div className="w-10 h-10 bg-moze-green rounded-lg flex items-center justify-center text-moze-gold mb-4 group-hover:scale-110 transition-transform">
                        <Zap size={20} />
                    </div>
                    <h4 className="font-bold text-moze-dark mb-2">Greitis ir Lankstumas</h4>
                    <p className="text-sm text-gray-500">Sprendimai priimami čia ir dabar. Galiu prisitaikyti prie pokyčių greičiau nei didelė komanda.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
