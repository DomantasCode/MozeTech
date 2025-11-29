import React from 'react';
import { MoveRight, Monitor, ShoppingBag, Bot, PenTool } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-16 bg-moze-bg scroll-mt-32">
      {/* Decorative Topography Lines (SVG) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full text-moze-green" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 50 Q 25 30 50 50 T 100 50" stroke="currentColor" strokeWidth="0.1" fill="none" />
           <path d="M0 20 Q 25 50 50 20 T 100 20" stroke="currentColor" strokeWidth="0.1" fill="none" />
           <path d="M0 80 Q 25 40 50 80 T 100 80" stroke="currentColor" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center py-8 md:py-0">

        {/* Text Side */}
        <div className="text-center lg:text-left order-2 lg:order-1 pb-6 md:pb-0">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-moze-gold/50 rounded-full bg-white/50 backdrop-blur-sm text-moze-green font-bold text-[10px] tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-moze-gold animate-pulse"></span>
            Digital Agency
          </div>
          
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-moze-green mb-3 md:mb-6 leading-[1.1]">
            Kuriame <span className="text-moze-gold italic">Svetaines</span>,<br/>
            El. Parduotuves<br/>
            ir AI Sprendimus.
          </h1>

          <p className="font-sans text-base md:text-lg text-moze-dark/70 max-w-lg mx-auto lg:mx-0 mb-4 md:mb-8 leading-relaxed">
            MozeTech – Jūsų verslo skaitmeninis kompasas. Nuo modernaus dizaino iki dirbtinio intelekto integracijų. Viskas, ko reikia jūsų verslo kelionei į viršūnę.
          </p>

          {/* Service Badges Area */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-8 justify-center lg:justify-start items-center">
             <div className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2 text-xs font-bold text-gray-700 hover:border-moze-gold transition-colors">
                <Monitor size={14} className="text-moze-gold" /> Web
             </div>
             <div className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2 text-xs font-bold text-gray-700 hover:border-moze-gold transition-colors">
                <ShoppingBag size={14} className="text-moze-gold" /> E-Shop
             </div>
             <div className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2 text-xs font-bold text-gray-700 hover:border-moze-gold transition-colors">
                <PenTool size={14} className="text-moze-gold" /> Logo
             </div>
             <div className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2 text-xs font-bold text-gray-700 hover:border-moze-gold transition-colors">
                <Bot size={14} className="text-moze-gold" /> AI Chatbots
             </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#contact" 
              className="group px-8 py-3 bg-moze-green text-moze-bg font-bold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              Pradėti Projektą <MoveRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-3 border border-moze-green/30 text-moze-green font-bold rounded-lg hover:bg-moze-green/5 transition-colors duration-300"
            >
              Mano Darbai
            </a>
          </div>
        </div>

        {/* Visual Side: Animated Compass */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center h-[220px] md:h-[400px] lg:h-[500px]">
            {/* Outer Decorative Ring */}
            <div className="absolute w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] border border-dashed border-moze-gold/30 rounded-full animate-spin-slow opacity-50"></div>

            {/* Middle Gold Ring */}
            <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] border-2 border-moze-gold rounded-full flex items-center justify-center shadow-2xl bg-moze-bg">
                {/* Inner Pattern */}
                <div className="absolute inset-2 border border-moze-green/10 rounded-full"></div>
                
                {/* Compass Rose SVG */}
                <div className="relative w-4/5 h-4/5 text-moze-green animate-[spin_60s_linear_infinite]">
                    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-md">
                        <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                        <circle cx="50" cy="50" r="10" className="text-moze-bg" fill="currentColor" />
                    </svg>
                </div>

                {/* Needle */}
                <div className="absolute w-1 h-[130px] md:h-[280px] bg-transparent flex flex-col items-center justify-between animate-[pulse-slow_4s_ease-in-out_infinite] transform rotate-45 origin-center transition-transform duration-1000" style={{ transform: 'rotate(45deg)'}}>
                     {/* North Tip */}
                     <div className="w-2.5 md:w-4 h-1/2 bg-red-800 rounded-t-full relative shadow-lg">
                        <span className="absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2 text-[6px] md:text-[8px] font-bold text-red-200">N</span>
                     </div>
                     {/* South Tip */}
                     <div className="w-2.5 md:w-4 h-1/2 bg-gray-600 rounded-b-full shadow-lg"></div>
                     {/* Center Pin */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 bg-moze-gold rounded-full border-2 md:border-4 border-moze-bg shadow-md"></div>
                </div>

                 {/* Letters */}
                 <div className="absolute inset-2 md:inset-4 pointer-events-none font-serif font-bold text-moze-gold/60 text-sm md:text-xl">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2">N</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2">S</span>
                    <span className="absolute left-0 top-1/2 -translate-y-1/2">W</span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2">E</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;