import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Compass, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ChatWidgetProps {
  isServiceModalOpen?: boolean;
  isPortfolioModalOpen?: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isServiceModalOpen = false, isPortfolioModalOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Sveiki atvykę į MozeTech! Aš esu jūsų skaitmeninės kelionės gidas. Kuo galiu padėti?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 font-sans ${(isServiceModalOpen || isPortfolioModalOpen) ? 'lg:block hidden' : ''}`}>
      {/* Trigger Button */}
      <button
        onClick={toggleChat}
        className={`${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } transition-all duration-300 relative group`}
      >
        <div className="absolute inset-0 bg-moze-gold rounded-full animate-ping opacity-20"></div>
        <div className="bg-moze-green text-moze-bg p-4 rounded-full shadow-2xl border-2 border-moze-gold group-hover:bg-moze-dark transition-colors relative z-10">
           <MessageSquare className="w-7 h-7" />
           <span className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full border-2 border-moze-green"></span>
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={`${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-10 opacity-0 pointer-events-none'
        } transition-all duration-500 ease-out absolute bottom-0 right-0 w-[350px] sm:w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-moze-gold/30`}
      >
        {/* Header */}
        <div className="bg-moze-green p-4 flex justify-between items-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-white/10 p-2 rounded-lg border border-white/20">
              <Bot size={24} className="text-moze-gold" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">Moze AI</h3>
              <p className="text-[10px] text-moze-gold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button onClick={toggleChat} className="hover:text-moze-gold transition-colors relative z-10">
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-moze-bg bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]">
          <div className="flex flex-col space-y-4">
            {messages.map((msg, idx) => (
                <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                <div
                    className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-md ${
                    msg.role === 'user'
                        ? 'bg-moze-green text-white rounded-2xl rounded-br-none'
                        : 'bg-white text-moze-dark border-l-2 border-moze-gold rounded-2xl rounded-bl-none'
                    }`}
                >
                    {msg.role === 'model' && (
                        <div className="flex items-center gap-2 mb-2 opacity-50 border-b border-gray-200 pb-1">
                            <Compass size={12} /> <span className="text-[10px] uppercase font-bold">MozeTech AI</span>
                        </div>
                    )}
                    <div className="whitespace-pre-line">{msg.text}</div>
                </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border-l-2 border-moze-gold flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-moze-gold border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs text-gray-500 font-serif italic">Generuojamas maršrutas...</span>
                </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Klauskite apie paslaugas..."
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-moze-gold focus:ring-1 focus:ring-moze-gold transition-all text-sm"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-moze-green text-moze-gold p-3 rounded-xl hover:bg-moze-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;