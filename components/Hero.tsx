import React from 'react';
import { ArrowRight, Calculator, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] bg-punch-red-900/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[800px] h-[600px] bg-platinum-500/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
            Ваш личный <br />
            <span className="gradient-text">AI-ассистент</span>
          </h1>
          
          <p className="text-base md:text-xl text-lavender-grey-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Вы пишете задачу в обычном <strong>Telegram</strong> — а агент сам открывает Excel, CRM или Почту и делает работу за вас. 
            Это как удаленный сотрудник, который никогда не спит.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-2">
            <a href="https://t.me/alxblski" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-punch-red-600 text-white rounded-xl font-bold hover:bg-punch-red-500 transition-all flex items-center justify-center gap-2 group text-sm md:text-base shadow-xl shadow-punch-red-600/20">
              Записаться на демо
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#calculator" className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-white/5 text-lavender-grey-100 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-sm md:text-base">
              <Calculator size={18} />
              Рассчитать окупаемость
            </a>
          </div>
        </motion.div>

        {/* UI Mockup / Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-16 mx-auto max-w-5xl px-2 md:px-0"
        >
          <div className="glass-card rounded-xl p-2 md:p-4 border border-white/10 shadow-2xl shadow-space-indigo-950/50">
            <div className="bg-space-indigo-950 rounded-lg overflow-hidden relative aspect-[16/12] md:aspect-[21/9] flex items-center justify-center border border-white/5">
                {/* Simulated Chat Interface */}
                <div className="absolute inset-0 flex flex-col">
                   <div className="h-8 md:h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-space-indigo-900/50">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-punch-red-500/50"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-lavender-grey-500/50"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-platinum-500/50"></div>
                   </div>
                   <div className="flex-1 p-3 md:p-6 font-mono text-xs md:text-base flex flex-col gap-3 md:gap-4 overflow-hidden relative">
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-indigo-950/80 pointer-events-none z-10"></div>
                       
                       {/* User Message */}
                       <div className="flex gap-2 md:gap-4">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-space-indigo-800 flex-shrink-0 flex items-center justify-center text-[10px] md:text-xs font-bold">Вы</div>
                          <div className="bg-space-indigo-800/50 p-2 md:p-3 rounded-r-lg rounded-bl-lg max-w-lg text-lavender-grey-200 leading-snug">
                             Собери отчет по продажам за неделю из 1С, оформи в красивую таблицу Excel и отправь Ивану на почту.
                          </div>
                       </div>

                       {/* Bot Processing */}
                       <div className="flex gap-2 md:gap-4 flex-row-reverse">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-punch-red-600 flex items-center justify-center flex-shrink-0"><Bot size={14} /></div>
                          <div className="bg-punch-red-900/20 border border-punch-red-500/20 p-3 md:p-4 rounded-l-lg rounded-br-lg max-w-lg text-lavender-grey-50 text-left">
                             <p className="mb-1.5 md:mb-2 font-semibold text-punch-red-300 text-[10px] md:text-xs uppercase tracking-wider">Выполняю действия:</p>
                             <ul className="list-disc pl-4 space-y-1 text-lavender-grey-300 text-[11px] md:text-sm">
                                <li className="text-platinum-400">✓ Зашел в 1С и выгрузил данные</li>
                                <li className="text-platinum-400">✓ Создал Excel таблицу и построил график</li>
                                <li className="text-platinum-400">✓ Открыл почту и создал черновик</li>
                                <li className="animate-pulse text-punch-red-400">⏳ Отправляю письмо ivan@company.com...</li>
                             </ul>
                          </div>
                       </div>
                   </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
