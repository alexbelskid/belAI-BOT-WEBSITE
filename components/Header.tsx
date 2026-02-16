import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 z-[70] group">
            <span className="text-xl font-bold text-white tracking-wider group-hover:text-punch-red-400 transition-colors">
              BelAI
            </span>
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 flex items-center justify-center bg-space-indigo-900/50 hover:bg-space-indigo-800 backdrop-blur-xl border border-white/10 rounded-full text-white transition-all shadow-2xl z-[70] hover:text-punch-red-400"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Side Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-space-indigo-950/40 backdrop-blur-sm" 
          onClick={() => setIsMenuOpen(false)} 
        />
        
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-space-indigo-950 border-l border-white/5 shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-12">
            <div className="flex-1 flex flex-col justify-center">
              <nav className="flex flex-col gap-2">
                {[
                  { href: "#how-it-works", label: "Как работает" },
                  { href: "#demo", label: "Демо-чат" },
                  { href: "#solutions", label: "Что умеет" },
                  { href: "#loss", label: "Цена ожидания" },
                  { href: "#calculator", label: "ROI Калькулятор" },
                  { href: "#security", label: "Безопасность" },
                  { href: "#cases", label: "Кейсы и польза" },
                  { href: "#faq", label: "Вопросы и ответы" },
                  { href: "#pricing", label: "Стоимость и тарифы" },
                ].map((link, idx) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    className={`text-lavender-grey-50 text-2xl font-bold py-3 hover:text-punch-red-500 transition-all transform ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className={`mt-auto pt-8 transition-all duration-500 delay-500 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <a 
                href="https://t.me/alxblski" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-punch-red-600 text-white px-6 py-5 rounded-2xl font-bold text-center hover:bg-punch-red-500 transition-all shadow-xl shadow-punch-red-600/20 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Бесплатный аудит
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
