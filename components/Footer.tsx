import React from 'react';
import { Bot, Send, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-space-indigo-950 border-t border-white/5 pt-16 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Links */}
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/5 pb-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-2xl mb-6 text-lavender-grey-50">
              BelAI
            </div>
            <p className="text-lavender-grey-400 max-w-sm leading-relaxed">
              Внедряем AI-агентов, которые работают 24/7. Автоматизация продаж, поддержки и операционных процессов для масштабируемого бизнеса.
            </p>
          </div>
          
          <div>
              <h4 className="font-bold text-lavender-grey-50 mb-6 uppercase tracking-wider text-sm">Контакты</h4>
              <ul className="space-y-4 text-lavender-grey-400 text-sm">
                <li className="flex items-center gap-3 group">
                  <Send size={16} className="text-punch-red-500 group-hover:scale-110 transition-transform" /> 
                  <a href="https://t.me/alxblski" target="_blank" rel="noopener noreferrer" className="hover:text-lavender-grey-50 transition-colors">@alxblski</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail size={16} className="text-punch-red-500 group-hover:scale-110 transition-transform" /> 
                  <a href="mailto:me@alexbelski.com" className="hover:text-lavender-grey-50 transition-colors">me@alexbelski.com</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <MapPin size={16} className="text-punch-red-500 group-hover:scale-110 transition-transform" /> 
                  <span className="text-lavender-grey-400">Minsk, Belarus // Worldwide</span>
                </li>
              </ul>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="glass-card p-4 rounded-xl hover:scale-105 transition-transform">
              <img 
                src="/qr-code.png" 
                alt="QR Code - Contact" 
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-lavender-grey-600 text-xs tracking-wide">
          <p>© 2026 BelAI Agency. Все права защищены.</p>
          <div className="flex gap-8 mt-6 md:mt-0 font-medium">
            <a href="#" className="hover:text-punch-red-400 transition-colors uppercase">Privacy Policy</a>
            <a href="#" className="hover:text-punch-red-400 transition-colors uppercase">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
