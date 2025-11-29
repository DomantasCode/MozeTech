
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
    const [selectedService, setSelectedService] = useState('Svetainių Kūrimas');
    const { elementRef, isVisible } = useScrollAnimation();

    // Check URL for pre-selected service
    useEffect(() => {
        const checkServiceParam = () => {
            const hash = window.location.hash;
            const params = new URLSearchParams(hash.split('?')[1]);
            const serviceParam = params.get('service');

            if (serviceParam) {
                const serviceMap: { [key: string]: string } = {
                    'web': 'Svetainių Kūrimas',
                    'shop': 'El. Parduotuvė',
                    'design': 'Logotipas',
                    'ai': 'AI Sprendimai'
                };

                if (serviceMap[serviceParam]) {
                    setSelectedService(serviceMap[serviceParam]);
                    // Clear the URL parameter after setting
                    window.history.replaceState(null, '', '#contact');
                }
            }
        };

        // Check on mount
        checkServiceParam();

        // Listen for hash changes
        window.addEventListener('hashchange', checkServiceParam);

        return () => {
            window.removeEventListener('hashchange', checkServiceParam);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            alert("Žinutė išsiųsta! Susisieksime greitu metu.");
        }, 1500);
    };

  return (
    <section id="contact" className="py-24 bg-moze-bg scroll-mt-32">
        <div
          ref={elementRef}
          className={`container mx-auto px-4 md:px-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
            
            {/* Enlarged Container: max-w-6xl instead of max-w-4xl */}
            <div className="max-w-6xl mx-auto bg-moze-green rounded-3xl shadow-2xl overflow-hidden relative border border-moze-gold/30 flex flex-col-reverse xl:flex-row">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

                {/* Contact Info Sidebar (Left on desktop, Bottom on mobile/tablet/iPad) */}
                <div className="xl:w-[30%] bg-moze-dark/50 p-6 md:p-8 flex flex-col justify-between border-t xl:border-t-0 xl:border-r border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-moze-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="pb-6 border-b border-white/10">
                        <h3 className="font-serif text-2xl font-bold text-white mb-2">Kontaktai</h3>
                        <p className="text-gray-400 text-sm">Pasikalbėkime apie jūsų idėją.</p>
                    </div>

                    <div className="space-y-5 py-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-moze-gold group-hover:bg-moze-gold group-hover:text-moze-dark transition-all duration-300 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-[10px] uppercase text-gray-500 tracking-wider block mb-1">El. Paštas</span>
                                    <a href="mailto:domantas@mozetech.lt" className="text-white text-sm md:text-lg font-medium hover:text-moze-gold transition-colors break-words block">domantas@mozetech.lt</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-moze-gold group-hover:bg-moze-gold group-hover:text-moze-dark transition-all duration-300 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-[10px] uppercase text-gray-500 tracking-wider block mb-1">Telefonas</span>
                                    <a href="tel:+37066909377" className="text-white text-sm md:text-lg font-medium hover:text-moze-gold transition-colors break-words block">+370 669 09377</a>
                                </div>
                            </div>

                             <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-moze-gold group-hover:bg-moze-gold group-hover:text-moze-dark transition-all duration-300 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-[10px] uppercase text-gray-500 tracking-wider block mb-1">Lokacija</span>
                                    <span className="text-white text-sm md:text-lg font-medium block">Lietuva</span>
                                </div>
                            </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                         <p className="text-xs text-gray-500 italic">
                            "Geriausias laikas pradėti buvo vakar.<br />
                            Antras geriausias – šiandien."
                         </p>
                    </div>
                </div>

                {/* Form Area (Right on desktop, Top on mobile/tablet/iPad) - Larger padding and inputs */}
                <div className="xl:w-[70%] p-6 md:p-10 bg-gradient-to-br from-moze-green to-moze-green-light">
                    <div className="mb-6">
                        <h2 className="font-serif text-3xl font-bold text-white mb-3">Pradėkime Projektą</h2>
                        <p className="text-gray-300 text-base font-light">Užpildykite formą ir gaukite asmeninį pasiūlymą per 24 valandas.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs uppercase font-bold text-moze-gold tracking-widest pl-1">Vardas</label>
                                <input required type="text" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-white placeholder-gray-500 focus:outline-none focus:border-moze-gold focus:ring-1 focus:ring-moze-gold focus:bg-white/10 transition-all text-sm" placeholder="Jūsų vardas" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs uppercase font-bold text-moze-gold tracking-widest pl-1">El. Paštas</label>
                                <input required type="email" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-white placeholder-gray-500 focus:outline-none focus:border-moze-gold focus:ring-1 focus:ring-moze-gold focus:bg-white/10 transition-all text-sm" placeholder="jusu@pastas.lt" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs uppercase font-bold text-moze-gold tracking-widest pl-1">Telefono numeris</label>
                                <input required type="tel" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-white placeholder-gray-500 focus:outline-none focus:border-moze-gold focus:ring-1 focus:ring-moze-gold focus:bg-white/10 transition-all text-sm" placeholder="+370 600 00000" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs uppercase font-bold text-moze-gold tracking-widest pl-1">Paslauga</label>
                                <div className="relative">
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-moze-gold focus:ring-1 focus:ring-moze-gold focus:bg-white/10 transition-all text-sm appearance-none cursor-pointer [&>option]:text-moze-dark"
                                    >
                                        <option>Svetainių Kūrimas</option>
                                        <option>El. Parduotuvė</option>
                                        <option>Logotipas</option>
                                        <option>AI Sprendimai</option>
                                        <option>Kita</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs uppercase font-bold text-moze-gold tracking-widest pl-1">Žinutė</label>
                            <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-moze-gold focus:ring-1 focus:ring-moze-gold focus:bg-white/10 transition-all resize-none text-sm leading-relaxed" placeholder="Papasakokite plačiau apie savo projektą..."></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status !== 'idle'}
                            className="w-full md:w-auto px-8 h-11 bg-moze-gold hover:bg-white text-moze-dark font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest text-sm shadow-lg hover:shadow-xl mt-2"
                        >
                            {status === 'idle' ? (
                                <>Siųsti Užklausą <ArrowRight size={18} /></>
                            ) : (
                                "Siunčiama..."
                            )}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Contact;
