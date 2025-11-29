
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ExternalLink, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects: Project[] = [
  {
    id: '1',
    title: 'DMCademy',
    category: 'Svetainė',
    imageUrl: '/dmcademy-desert.jpg',
    url: 'https://www.dmcademy.com',
  },
  {
    id: '2',
    title: 'Coming Soon',
    category: 'Naujas Projektas',
    imageUrl: '/coming-soon-castle.jpg',
    url: '',
    comingSoon: true,
  },
];

interface PortfolioProps {
  onModalOpenChange?: (isOpen: boolean) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onModalOpenChange }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
    onModalOpenChange?.(true);
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
    onModalOpenChange?.(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [selectedProject]);

  return (
    <>
    <section id="portfolio" className="pt-10 pb-[70px] bg-moze-bg relative overflow-hidden scroll-mt-32">
       {/* Background Decorative Elements */}

       {/* Center Vertical Line */}
       <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-black/5 via-black/15 to-black/5 hidden xl:block"></div>

       {/* Bottom Decorative Element */}
       <div className="hidden xl:block absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>

       {/* Diagonal Lines Pattern - Multiple */}

       <div className="hidden xl:block absolute top-20 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-black/8 to-transparent rotate-45"></div>
       <div className="hidden xl:block absolute bottom-0 left-1/3 w-px h-80 bg-gradient-to-b from-transparent via-black/12 to-transparent -rotate-12"></div>
       <div className="hidden xl:block absolute bottom-10 left-1/4 w-px h-56 bg-gradient-to-b from-transparent via-black/8 to-transparent -rotate-45"></div>



       {/* Triangles */}

       {/* Hexagons (as rotated squares with borders) */}
       <div className="hidden xl:block absolute top-56 right-1/4 w-14 h-14 border border-black/6 rotate-[30deg] rounded-sm"></div>
       <div className="hidden xl:block absolute bottom-56 left-1/3 w-18 h-18 border border-black/6 -rotate-[30deg] rounded-sm"></div>

       {/* Gradient Blobs - More variety */}
       <div className="hidden xl:block absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-black/8 to-transparent rounded-full filter blur-2xl"></div>
       <div className="hidden xl:block absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-black/8 to-transparent rounded-full filter blur-2xl"></div>
       <div className="hidden xl:block absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-bl from-black/5 to-transparent rounded-full filter blur-3xl"></div>
       <div className="hidden xl:block absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-tr from-black/5 to-transparent rounded-full filter blur-3xl"></div>

       {/* Dotted Pattern */}
       <div className="hidden xl:block absolute top-24 left-20 w-2 h-2 rounded-full bg-black/15"></div>
       <div className="hidden xl:block absolute top-28 left-24 w-2 h-2 rounded-full bg-black/10"></div>
       <div className="hidden xl:block absolute top-32 left-28 w-2 h-2 rounded-full bg-black/15"></div>
       <div className="hidden xl:block absolute bottom-24 right-20 w-2 h-2 rounded-full bg-black/15"></div>
       <div className="hidden xl:block absolute bottom-28 right-24 w-2 h-2 rounded-full bg-black/10"></div>
       <div className="hidden xl:block absolute bottom-32 right-28 w-2 h-2 rounded-full bg-black/15"></div>

       {/* Texture Overlay */}
       <div className="hidden xl:block absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/subtle-grey.png')]"></div>

      <div
        ref={elementRef}
        className={`container mx-auto px-6 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-4 text-moze-gold text-xs font-bold uppercase tracking-widest">
                <span>Darbų Galerija</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-moze-green leading-tight">Sėkmingos Kelionės</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative h-[400px] md:h-[500px] rounded-lg overflow-hidden cursor-pointer shadow-xl"
                >
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-moze-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-8 backdrop-blur-sm">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                             <span className="text-moze-gold font-sans text-xs tracking-[0.3em] uppercase mb-4 block border-b border-moze-gold/30 pb-2 inline-block">{project.category}</span>
                            <h3 className="text-white font-serif text-3xl font-bold mb-6">{project.title}</h3>
                            {project.comingSoon ? (
                                <div className="px-6 py-3 bg-moze-gold/20 border-2 border-moze-gold rounded-full">
                                    <span className="text-moze-gold font-bold text-sm uppercase tracking-wider">Netrukus</span>
                                </div>
                            ) : (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openProject(project);
                                    }}
                                    className="w-12 h-12 rounded-full bg-white text-moze-green flex items-center justify-center mx-auto hover:bg-moze-gold hover:text-white transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Minimal Label when not hovered */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                         <span className="text-moze-gold text-xs uppercase tracking-widest block mb-1">{project.category}</span>
                         <h3 className="text-white font-serif text-2xl font-bold drop-shadow-lg">{project.title}</h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>

    {/* Project Modal */}
    {selectedProject && (
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
        onClick={closeProject}
      >
        <div
          className="bg-moze-dark border-2 border-moze-gold/40 rounded-2xl max-w-6xl w-full max-h-[90vh] h-[90vh] relative animate-in zoom-in-95 duration-300 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeProject}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 hover:bg-moze-gold border-2 border-moze-gold/50 hover:border-moze-gold flex items-center justify-center text-moze-gold hover:text-white transition-all z-20 backdrop-blur-sm group shadow-lg"
            aria-label="Close"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* iframe */}
          <iframe
            src={selectedProject.url}
            className="w-full h-full border-0 rounded-2xl bg-white"
            title={selectedProject.title}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    )}
    </>
  );
};

export default Portfolio;
