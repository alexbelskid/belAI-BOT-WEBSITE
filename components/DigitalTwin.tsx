import React from 'react';
import { Smartphone, Laptop, Globe, CheckCircle2 } from 'lucide-react';

export const DigitalTwin: React.FC = () => {
  const schedule = [
    {
      icon: <Smartphone className="text-white" size={20} />,
      time: "Задача в Telegram",
      title: "Вы пишете простую просьбу",
      desc: "Например: «Найди всех поставщиков в Москве, занеси их в таблицу и отправь им наше КП»."
    },
    {
      icon: <Globe className="text-white" size={20} />,
      time: "Агент берет управление",
      title: "Сам открывает браузер и Excel",
      desc: "Агент имеет доступ к интернету и программам. Он гуглит, копирует данные в Excel и составляет список контактов без вас."
    },
    {
      icon: <Laptop className="text-white" size={20} />,
      time: "Результат",
      title: "Вы получаете готовый отчет",
      desc: "Через 10 минут агент пишет: «Готово, отправил 50 писем, вот ссылка на таблицу с результатами»."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-space-indigo-950 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Как это работает <span className="text-punch-red-500">на самом деле?</span>
          </h2>
          
          <div className="space-y-0">
            {schedule.map((item, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-space-indigo-900 border border-white/10 flex items-center justify-center group-hover:bg-punch-red-600/20 group-hover:border-punch-red-500/50 transition-all duration-300">
                    <div className="text-lavender-grey-300 group-hover:text-punch-red-400 transition-colors">
                        {item.icon}
                    </div>
                  </div>
                  {idx !== schedule.length - 1 && (
                    <div className="w-px h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
                  )}
                </div>
                <div className="pt-1.5 pb-8">
                  <span className="text-xs md:text-sm font-mono text-punch-red-400 uppercase tracking-widest block mb-2">{item.time}</span>
                  <h4 className="text-xl md:text-2xl font-bold text-lavender-grey-50 mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-lavender-grey-400 text-sm md:text-base leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
           <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-punch-red-600 to-classic-crimson-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-space-indigo-900/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-lavender-grey-100">
                   <CheckCircle2 className="text-punch-red-500" />
                   Полный доступ к инструментам
                </h3>
                <p className="text-lavender-grey-400 text-sm mb-6">
                   Мы настраиваем интеграции так, чтобы агент мог выполнять любую рутину:
                </p>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                   {[
                     { text: "Браузер и Интернет", sub: "Может гуглить, заходить на сайты поставщиков, скачивать файлы." },
                     { text: "Офисные программы", sub: "Word, Excel, PowerPoint, Google Docs — полное управление." },
                     { text: "Мессенджеры и Почта", sub: "Telegram, WhatsApp, Outlook, Gmail — читает и отвечает." },
                     { text: "Корпоративные системы", sub: "1C, Bitrix24, AmoCRM, Trello, Jira." },
                     { text: "Файловая система", sub: "Создает папки, перемещает файлы, архивирует данные." }
                   ].map((feature, i) => (
                     <div key={i} className="flex items-start gap-3 p-3 md:p-4 rounded-lg bg-space-indigo-950/50 border border-white/5 hover:border-punch-red-500/30 hover:bg-space-indigo-900 transition-all group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-punch-red-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <div>
                            <span className="block font-medium text-lavender-grey-200 text-sm md:text-base group-hover:text-white transition-colors">{feature.text}</span>
                            <span className="text-xs md:text-sm text-lavender-grey-500 group-hover:text-lavender-grey-400 transition-colors">{feature.sub}</span>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
