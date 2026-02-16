import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const cases = [
    {
      title: "Создание отчета",
      before: "45 минут",
      after: "1 минута",
      desc: "Вы: открываете 5 таблиц, копируете цифры, верстаете PDF. vs Агент: Сам всё собрал и прислал готовый файл в чат."
    },
    {
      title: "Ответ клиенту ночью",
      before: "Потеря клиента",
      after: "Продажа",
      desc: "Вы: спите. vs Агент: Увидел сообщение в WhatsApp, проверил наличие товара в базе, выставил счет и отправил ссылку на оплату."
    },
    {
      title: "Постинг контента",
      before: "30 минут",
      after: "10 секунд",
      desc: "Вы: Заходите в редактор, пишите текст, открываете Instagram. vs Агент: Получил от вас голосовое и сам всё выложил."
    }
  ];

  return (
    <section id="cases" className="py-24 bg-space-indigo-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-lavender-grey-50">Реальная польза</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-space-indigo-900/30 border border-white/5 rounded-2xl p-8 hover:border-punch-red-500/30 transition-all group shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-lavender-grey-100 group-hover:text-punch-red-400 transition-colors">{item.title}</h3>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-punch-red-500/60 font-bold text-2xl line-through decoration-punch-red-500/40">{item.before}</div>
                  <div className="text-[10px] text-lavender-grey-500 uppercase font-bold tracking-wider mt-1">Руками</div>
                </div>
                <ArrowRight className="text-lavender-grey-700 group-hover:text-punch-red-500 transition-colors" />
                <div className="text-center">
                  <div className="text-platinum-400 font-bold text-2xl group-hover:scale-110 transition-transform">{item.after}</div>
                  <div className="text-[10px] text-platinum-600 uppercase font-bold tracking-wider mt-1">С агентом</div>
                </div>
              </div>
              
              <p className="text-lavender-grey-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
