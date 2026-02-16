import React from 'react';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

export const FomoSection: React.FC = () => {
  return (
    <section id="loss" className="py-16 md:py-24 bg-space-indigo-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-punch-red-500 font-bold tracking-wider uppercase text-xs md:text-sm">Цена бездействия</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 md:mb-6 text-lavender-grey-50">Сколько стоит ваше ожидание?</h2>
            <p className="text-lavender-grey-400 text-base md:text-lg">Вы CEO, но работаете как библиотекарь. Рутина съедает прибыль.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-space-indigo-950 p-6 md:p-8 rounded-2xl border border-punch-red-900/20 relative overflow-hidden group hover:border-punch-red-500/30 transition-colors shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Clock size={80} className="text-punch-red-500" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">47 мин</h3>
              <p className="text-lavender-grey-400 text-sm mb-4">В день тратит CEO на поиск информации</p>
              <div className="h-1 w-12 bg-punch-red-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
              <p className="mt-4 text-lavender-grey-300 font-medium text-sm md:text-base">Это 12 рабочих недель в год, выброшенных в корзину.</p>
            </div>

            <div className="bg-space-indigo-950 p-6 md:p-8 rounded-2xl border border-punch-red-900/20 relative overflow-hidden group hover:border-punch-red-500/30 transition-colors shadow-2xl">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingDown size={80} className="text-punch-red-500" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">$11,000</h3>
              <p className="text-lavender-grey-400 text-sm mb-4">Ежемесячные потери</p>
              <div className="h-1 w-12 bg-punch-red-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
              <p className="mt-4 text-lavender-grey-300 font-medium text-sm md:text-base">Прямые убытки от неэффективных процессов и простоя.</p>
            </div>

            <div className="bg-space-indigo-950 p-6 md:p-8 rounded-2xl border border-punch-red-900/20 relative overflow-hidden group hover:border-punch-red-500/30 transition-colors shadow-2xl">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <AlertTriangle size={80} className="text-punch-red-500" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">35%</h3>
              <p className="text-lavender-grey-400 text-sm mb-4">Потерянных лидов</p>
              <div className="h-1 w-12 bg-punch-red-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
              <p className="mt-4 text-lavender-grey-300 font-medium text-sm md:text-base">Из-за долгого ответа менеджеров в мессенджерах.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
