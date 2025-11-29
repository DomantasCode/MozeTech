
import React, { useState, useEffect } from 'react';
import { Globe, ShoppingBag, PenTool, Bot, ArrowRight, Compass, Shield, X, Check, Zap, Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services: Service[] = [
  {
    id: 'web',
    title: 'Svetainių Kūrimas',
    description: 'Greitos, modernios svetainės. Profesionalus pristatymas internete',
    icon: <Globe className="w-8 h-8" />,
    detailedDescription: 'Kuriame šiuolaikiškas svetaines pritaikytas jūsų poreikiams. Jūsų svetainė bus optimizuota Google paieškai ir idealiai veiks tiek kompiuteryje, tiek mobiliajame.',
    features: [
      'Modernus, profesionalus dizainas',
      'Google paieškos optimizacija',
      'Pritaikyta visiems įrenginiams',
      'Greitas krovimas ir našumas'
    ],
    technologies: ['Išskirtinis dizainas', 'SEO optimizacija', '24/7 veikimas'],
    processSteps: ['Poreikių analizė', 'Dizainas', 'Kūrimas', 'Paleidimas'],
    pricing: 'Nuo 500€',
    timeline: '1-2 savaitės'
  },
  {
    id: 'shop',
    title: 'El. Parduotuvės',
    description: 'Pardavimų platforma su mokėjimais ir pristatymais',
    icon: <ShoppingBag className="w-8 h-8" />,
    detailedDescription: 'Pilnai paruoštos el. parduotuvės sprendimai. Integruojame mokėjimo sistemas, kurjerių paslaugas ir produktų valdymą. Pradėkite uždirbti internetu.',
    features: [
      'Modernus, profesionalus dizainas',
      'Visi populiarūs mokėjimo būdai',
      'Lengvas produktų valdymas',
      'Omniva, LP Express, DPD integracija'
    ],
    technologies: ['Paprasta valdyti', 'Saugūs mokėjimai', 'Automatinis užsakymų tvarkymas'],
    processSteps: ['Poreikių analizė', 'Dizainas', 'Kūrimas', 'Paleidimas'],
    pricing: 'Nuo 800€',
    timeline: '2-3 savaitės'
  },
  {
    id: 'design',
    title: 'Logotipų Kūrimas',
    description: 'Unikalus logotipas, kuris atspindi jūsų viziją',
    icon: <PenTool className="w-8 h-8" />,
    detailedDescription: 'Sukuriame unikalius logotipus, kurie išskiria jus. Gausite visus reikalingus failus spaudai ir internetui. Profesionalus įvaizdis pradeda būti svarbus nuo pirmos dienos.',
    features: [
      'Unikalus, profesionalus dizainas',
      'Visi reikalingi formatai',
      'Revizijos iki patvirtinimo',
      'Pilnos autorinės teisės'
    ],
    technologies: ['Aukšta kokybė', 'Spaudai ir internetui', 'Greitas pristatymas'],
    processSteps: ['Poreikių analizė', 'Konceptas', 'Revizijos', 'Pristatymas'],
    pricing: 'Nuo 50€',
    timeline: '2-4 dienos'
  },
  {
    id: 'ai',
    title: 'Automatizuoti Sprendimai',
    description: 'Išmanūs chatbotai klientų aptarnavimui ir procesų automatizavimui 24/7',
    icon: <Bot className="w-8 h-8" />,
    detailedDescription: 'Automatizuoti sistemos, kurios aptarnauja klientus be poilsio. Chatbotai, kurie atsako į dažniausius klausimus, registruoja užklausas ir padeda jūsų komandai dirbti efektyviau.',
    features: [
      'Dirba 24/7 be pertraukų',
      'Pritaikyta jūsų poreikiams',
      'Integruojasi į jūsų svetainę',
      'Sutaupo jūsų laiką'
    ],
    technologies: ['Bendrauja jūsų kalba', 'Automatinis veikimas', 'Lengva priežiūra'],
    processSteps: ['Poreikių analizė', 'Konfigūracija', 'Testavimas', 'Diegimas'],
    pricing: 'Nuo 400€',
    timeline: '1-2 savaitės'
  },
];

interface ServicesProps {
  onModalOpenChange?: (isOpen: boolean) => void;
}

const Services: React.FC<ServicesProps> = ({ onModalOpenChange }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
    onModalOpenChange?.(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
    onModalOpenChange?.(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (selectedService) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [selectedService]);

  return (
    <>
    <section id="services" className="py-24 bg-moze-dark relative overflow-hidden scroll-mt-32">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-moze-gold rounded-full filter blur-[120px] opacity-10 pointer-events-none"></div>

      <div
        ref={elementRef}
        className={`container mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-white/10 pb-6">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-4 text-moze-gold text-xs font-bold uppercase tracking-widest">
                    <Compass size={16} />
                    <span>Paslaugų Žemėlapis</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                    Įrankiai Jūsų <br/><span className="text-moze-gold">Sėkmingam Augimui</span>
                </h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm text-right hidden lg:block">
                Pasirinkite tinkamą įrangą savo skaitmeninei kelionei. Visi sprendimai pritaikyti individualiai.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => openModal(service)}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-moze-gold transition-all duration-300 rounded-xl p-7 flex flex-col h-full overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield size={56} />
              </div>

              <div className="mb-5 text-moze-gold p-3 bg-moze-gold/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-4">{service.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-7 flex-grow border-l-2 border-white/10 pl-4 group-hover:border-moze-gold transition-colors">
                {service.description}
              </p>

              <div className="mt-auto pt-5 border-t border-white/10 flex justify-between items-center text-white/60 group-hover:text-moze-gold transition-colors">
                 <span className="text-xs font-bold uppercase tracking-wider">Sužinoti Plačiau</span>
                 <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-gradient-to-br from-moze-dark via-moze-dark to-moze-green/5 border-2 border-moze-gold/40 rounded-3xl max-w-5xl w-full max-h-[90vh] relative animate-in zoom-in-95 duration-300 flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-moze-gold/5 rounded-full filter blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-moze-gold/10 rounded-full filter blur-3xl pointer-events-none"></div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-moze-gold/20 border-2 border-white/10 hover:border-moze-gold flex items-center justify-center text-gray-400 hover:text-moze-gold transition-all z-20 backdrop-blur-sm group"
              aria-label="Close modal"
            >
              <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-5 relative z-10">
              {/* Header - Centered */}
              <div className="text-center mb-3">
                <div className="flex justify-center mb-2">
                  <div className="relative">
                    <div className="text-moze-gold p-2.5 bg-gradient-to-br from-moze-gold/20 to-moze-gold/5 rounded-xl border border-moze-gold/30 shadow-lg">
                      {selectedService.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-moze-gold rounded-full animate-pulse shadow-lg shadow-moze-gold/50"></div>
                  </div>
                </div>
                <h2 id="modal-title" className="font-serif text-xl font-bold text-white">
                  {selectedService.title}
                </h2>
              </div>

              {/* Features List */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 mb-3 shadow-lg">
                <div className="mb-4 pb-3 border-b border-white/10 text-center">
                  <h3 className="text-moze-gold font-bold text-sm uppercase tracking-widest">Funkcijos</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-2.5 px-0 md:px-3 py-1 md:py-2.5 md:bg-gradient-to-br md:from-white/5 md:to-transparent md:border md:border-white/10 md:rounded-lg md:hover:border-moze-gold/40 transition-all md:hover:shadow-md md:hover:shadow-moze-gold/10"
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-gradient-to-br from-moze-gold/20 to-moze-gold/10 border border-moze-gold/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Check size={13} className="text-moze-gold" />
                      </div>
                      <span className="text-sm leading-snug text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Cards Row */}
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                {selectedService.pricing && (
                  <div className="bg-gradient-to-br from-moze-gold/10 to-moze-gold/5 backdrop-blur-sm rounded-xl p-3 border border-moze-gold/30 text-center shadow-lg hover:shadow-moze-gold/10 transition-shadow">
                    <DollarSign size={18} className="text-moze-gold mx-auto mb-1.5" />
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Kaina</p>
                    <p className="text-white font-bold text-sm">{selectedService.pricing}</p>
                  </div>
                )}
                {selectedService.timeline && (
                  <div className="bg-gradient-to-br from-moze-gold/10 to-moze-gold/5 backdrop-blur-sm rounded-xl p-3 border border-moze-gold/30 text-center shadow-lg hover:shadow-moze-gold/10 transition-shadow">
                    <Clock size={18} className="text-moze-gold mx-auto mb-1.5" />
                    <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Trukmė</p>
                    <p className="text-white font-bold text-sm">{selectedService.timeline}</p>
                  </div>
                )}
              </div>

              {/* Process Timeline */}
              {selectedService.processSteps && selectedService.processSteps.length > 0 && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-lg">
                  <h3 className="text-moze-gold font-bold text-[10px] uppercase tracking-widest mb-2 text-center">
                    Kaip Vyksta
                  </h3>
                  <div className="flex items-start justify-between gap-2">
                    {selectedService.processSteps.map((step, index) => (
                      <React.Fragment key={index}>
                        <div className="flex flex-col items-center flex-1 text-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-moze-gold/30 to-moze-gold/10 border-2 border-moze-gold/40 flex items-center justify-center text-moze-gold font-bold text-xs mb-1.5 hover:scale-110 transition-transform shadow-lg shadow-moze-gold/20">
                            {index + 1}
                          </div>
                          <p className="text-gray-300 text-[10px] font-medium leading-tight">{step}</p>
                        </div>
                        {index < selectedService.processSteps!.length - 1 && (
                          <div className="flex items-center pt-2.5">
                            <ArrowRight size={14} className="text-moze-gold/50" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Technologies */}
                  {selectedService.technologies && selectedService.technologies.length > 0 && (
                    <div className="mt-2.5 pt-2.5 border-t border-white/10">
                      <div className="flex items-center gap-1.5 flex-wrap justify-center">
                        {selectedService.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2.5 py-1 bg-moze-gold/10 border border-moze-gold/30 rounded-lg text-gray-300 text-[10px] font-medium hover:bg-moze-gold/20 transition-colors shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sticky Footer with CTA Button */}
            <div className="border-t-2 border-moze-gold/20 p-3.5 md:p-4 bg-moze-dark/98 backdrop-blur-md relative z-10">
              <a
                href={`#contact?service=${selectedService.id}`}
                onClick={(e) => {
                  closeModal();
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-moze-gold to-moze-gold/90 hover:from-white hover:to-white text-moze-dark font-bold rounded-xl transition-all duration-300 uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] group"
              >
                <span>Gauti Pasiūlymą</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
