import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Как именно он управляет моим компьютером?",
      a: "Мы настраиваем безопасное подключение через API. Это значит, что агент подключается напрямую к программам (Excel, Почта, Instagram) по официальным каналам. Ему не нужно «водить мышкой» по экрану, он отправляет мгновенные команды программам."
    },
    {
      q: "Агент будет видеть все мои личные файлы?",
      a: "Только те, к которым вы дадите доступ. Если вы хотите, чтобы он работал только с папкой «Рабочие документы» и рабочей почтой, он не сможет увидеть ваши личные фото или переписки."
    },
    {
      q: "Нужно ли мне уметь программировать?",
      a: "Нет, вообще не нужно. Вы общаетесь с агентом в Telegram так же, как с живым помощником. Пишете: «Сделай отчет», и он делает. Мы всё настроим за вас."
    },
    {
      q: "А он не натворит дел? Не удалит важное?",
      a: "Мы ставим ограничения. Например, агент может «Создать черновик письма», но «Отправить» — только после вашего подтверждения (ОК) в чате. Удаление файлов тоже можно запретить."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-space-indigo-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-lavender-grey-50">Частые вопросы</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-space-indigo-900/40 rounded-xl border border-white/5 overflow-hidden transition-all hover:border-punch-red-500/20 shadow-lg">
              <button 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-space-indigo-800/40 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-semibold text-lg pr-8 transition-colors ${openIndex === idx ? 'text-punch-red-400' : 'text-lavender-grey-100'}`}>
                    {faq.q}
                </span>
                {openIndex === idx ? 
                    <Minus className="text-punch-red-500 flex-shrink-0" /> : 
                    <Plus className="text-lavender-grey-500 flex-shrink-0" />
                }
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-lavender-grey-400 leading-relaxed border-t border-white/5 mt-4 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
