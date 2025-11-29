import React, { useState } from 'react';
import { Sparkles, Send, Bot, Terminal } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AIConsultant: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { elementRef, isVisible } = useScrollAnimation();

    const handleAsk = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim()) return;

        setIsLoading(true);
        const response = await sendMessageToGemini(question);
        setAnswer(response);
        setIsLoading(false);
    };

    return (
        <section className="py-24 bg-moze-dark relative overflow-hidden border-t border-moze-green-light">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: 'linear-gradient(rgba(158, 126, 67, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(158, 126, 67, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-moze-dark via-transparent to-moze-dark"></div>

            <div
                ref={elementRef}
                className={`container mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
            >
                <div className="max-w-4xl mx-auto text-center mb-12">
                     <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-moze-gold/30 bg-moze-gold/10 text-moze-gold text-xs uppercase tracking-widest">
                        <Terminal size={14} /> AI Analizė
                     </div>
                     <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">Greiti Atsakymai</h2>
                     <p className="text-gray-400">Pasinaudokite dirbtiniu intelektu, kad gautumėte atsakymus apie mūsų paslaugas nedelsiant.</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-1 shadow-2xl relative group hover:border-moze-gold/30 transition-all duration-500">
                        {/* Glowing effect behind */}
                        <div className="absolute inset-0 bg-moze-gold/20 filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10"></div>

                        <div className="bg-moze-dark/80 rounded-xl p-6 md:p-8">
                            {!answer ? (
                                <div>
                                    <form onSubmit={handleAsk} className="relative mb-6">
                                        {/* Mobile placeholder */}
                                        <input
                                            type="text"
                                            value={question}
                                            onChange={(e) => setQuestion(e.target.value)}
                                            placeholder="Klauskite..."
                                            className="md:hidden w-full bg-white/5 border border-white/10 rounded-xl py-5 pl-6 pr-14 text-white placeholder-gray-500 focus:outline-none focus:border-moze-gold focus:ring-1 focus:ring-moze-gold transition-all font-sans text-lg"
                                        />
                                        {/* Tablet/Desktop placeholder */}
                                        <input
                                            type="text"
                                            value={question}
                                            onChange={(e) => setQuestion(e.target.value)}
                                            placeholder="Klauskite apie paslaugas..."
                                            className="hidden md:block w-full bg-white/5 border border-white/10 rounded-xl py-5 pl-6 pr-14 text-white placeholder-gray-500 focus:outline-none focus:border-moze-gold focus:ring-1 focus:ring-moze-gold transition-all font-sans text-lg"
                                        />
                                        <button 
                                            type="submit" 
                                            disabled={isLoading}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-moze-gold text-moze-dark rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                        >
                                            {isLoading ? <div className="animate-spin w-5 h-5 border-2 border-moze-dark border-t-transparent rounded-full"></div> : <Send size={20} />}
                                        </button>
                                    </form>
                                    
                                    <div className="flex flex-wrap justify-center gap-3">
                                        <button onClick={() => setQuestion("Kiek kainuoja internetinė svetainė?")} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 hover:border-moze-gold hover:text-moze-gold hover:bg-white/5 transition-all">💰 Svetainės kaina?</button>
                                        <button onClick={() => setQuestion("Kokie projektų terminai?")} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 hover:border-moze-gold hover:text-moze-gold hover:bg-white/5 transition-all">⏱️ Terminai</button>
                                        <button onClick={() => setQuestion("Kokie dažniausiai užduodami klausimai?")} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 hover:border-moze-gold hover:text-moze-gold hover:bg-white/5 transition-all">❓ D.U.K</button>
                                        <button onClick={() => setQuestion("Kaip pradėti projektą?")} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 hover:border-moze-gold hover:text-moze-gold hover:bg-white/5 transition-all">🚀 Kaip pradėti?</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-moze-gold/20 flex items-center justify-center shrink-0 border border-moze-gold/50">
                                            <Sparkles className="w-5 h-5 text-moze-gold" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-200 text-lg leading-relaxed font-light whitespace-pre-line">{answer}</p>
                                        </div>
                                    </div>
                                    <div className="text-center pt-6 border-t border-white/5">
                                        <button 
                                            onClick={() => { setAnswer(''); setQuestion(''); }} 
                                            className="text-sm text-moze-gold hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center justify-center gap-2 mx-auto"
                                        >
                                            <Bot size={16} /> Užduoti kitą klausimą
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIConsultant;