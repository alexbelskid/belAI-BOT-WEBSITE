import React from 'react';
import { Check, X, Zap, Cpu } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-space-indigo-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-punch-red-900/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-lavender-grey-50">Выберите формат работы</h2>
          <p className="text-lavender-grey-400 text-base md:text-lg max-w-2xl mx-auto">
            Вы можете настроить агента самостоятельно на нашей архитектуре или доверить внедрение нам под ключ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          
          {/* Tier 1: DIY */}
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 hover:border-punch-red-500/20 transition-all flex flex-col relative group bg-space-indigo-900/20 backdrop-blur-xl">
            <div className="mb-6 md:mb-8">
              <div className="w-12 h-12 bg-space-indigo-800 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-lavender-grey-300 group-hover:text-punch-red-400 group-hover:bg-space-indigo-700 transition-all">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-lavender-grey-100 mb-2">Макет агента</h3>
              <p className="text-lavender-grey-400 text-sm h-auto md:h-10 mb-2 md:mb-0">Готовый "движок". Вы сами прописываете логику и подключаете к своим сервисам.</p>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="flex items-end gap-2">
                <span className="text-3xl md:text-4xl font-bold text-lavender-grey-50">$150</span>
                <span className="text-lavender-grey-500 mb-1 font-medium">/ разово</span>
              </div>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1 text-sm md:text-base">
              <li className="flex items-center gap-3 text-lavender-grey-300">
                <Check size={18} className="text-punch-red-500 flex-shrink-0" />
                <span>Исходный код агента</span>
              </li>
              <li className="flex items-center gap-3 text-lavender-grey-300">
                <Check size={18} className="text-punch-red-500 flex-shrink-0" />
                <span>Инструкция по подключению к Telegram</span>
              </li>
              <li className="flex items-center gap-3 text-lavender-grey-300">
                <Check size={18} className="text-punch-red-500 flex-shrink-0" />
                <span>Базовые промпты</span>
              </li>
              <li className="flex items-center gap-3 text-lavender-grey-500">
                <X size={18} className="flex-shrink-0" />
                <span>Без настройки интеграций</span>
              </li>
              <li className="flex items-center gap-3 text-lavender-grey-500">
                <X size={18} className="flex-shrink-0" />
                <span>Без обучения базе знаний</span>
              </li>
            </ul>

            <a 
              href="https://t.me/alxblski" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3.5 md:py-4 rounded-xl border border-white/10 hover:bg-white/5 hover:border-punch-red-500/30 text-lavender-grey-100 font-semibold transition-all text-center block"
            >
              Купить макет
            </a>
          </div>

          {/* Tier 2: Turnkey */}
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-punch-red-500/30 bg-punch-red-950/10 flex flex-col relative overflow-hidden shadow-2xl shadow-punch-red-950/20">
            <div className="absolute top-0 right-0 bg-punch-red-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-wider">
              POPULAR
            </div>
            
            <div className="mb-6 md:mb-8">
              <div className="w-12 h-12 bg-punch-red-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-white shadow-xl shadow-punch-red-600/40">
                <Zap size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-lavender-grey-50 mb-2">Разработка под ключ</h3>
              <p className="text-lavender-grey-300 text-sm h-auto md:h-10 mb-2 md:mb-0">Полная адаптация под ваш бизнес. Мы делаем всё — вы получаете результат.</p>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="flex items-end gap-2">
                <span className="text-3xl md:text-4xl font-bold text-white">$200</span>
                <span className="text-punch-red-300 mb-1 font-medium">/ месяц</span>
              </div>
              <p className="text-[10px] md:text-xs text-lavender-grey-500 mt-2 leading-tight">
                * Не включая стоимость «железа» (например, покупку Mac Mini для локального внедрения)
              </p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1 text-sm md:text-base">
              <li className="flex items-center gap-3 text-lavender-grey-50">
                <div className="bg-punch-red-500/20 p-1 rounded-full flex-shrink-0"><Check size={14} className="text-punch-red-400" /></div>
                <span>Аудит бизнес-процессов</span>
              </li>
              <li className="flex items-center gap-3 text-lavender-grey-50">
                <div className="bg-punch-red-500/20 p-1 rounded-full flex-shrink-0"><Check size={14} className="text-punch-red-400" /></div>
                <span>Настройка базы знаний компании</span>
              </li>
              <li className="flex items-center gap-3 text-lavender-grey-50">
                <div className="bg-punch-red-500/20 p-1 rounded-full flex-shrink-0"><Check size={14} className="text-punch-red-400" /></div>
                <span>Сложные интеграции (CRM, 1C, Excel)</span>
              </li>
              <li className="flex items-center gap-3 text-lavender-grey-50">
                <div className="bg-punch-red-500/20 p-1 rounded-full flex-shrink-0"><Check size={14} className="text-punch-red-400" /></div>
                <span>Тестирование и отладка</span>
              </li>
              <li className="flex items-center gap-3 text-lavender-grey-50">
                <div className="bg-punch-red-500/20 p-1 rounded-full flex-shrink-0"><Check size={14} className="text-punch-red-400" /></div>
                <span>Постоянная поддержка и дообучение</span>
              </li>
            </ul>

            <a 
              href="https://t.me/alxblski" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3.5 md:py-4 rounded-xl bg-punch-red-600 hover:bg-punch-red-500 text-white font-bold transition-all shadow-xl shadow-punch-red-600/40 text-center block border border-punch-red-400/30"
            >
              Заказать внедрение
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
