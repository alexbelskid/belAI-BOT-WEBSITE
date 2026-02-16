import React from 'react';
import { Mail, Instagram, FileSpreadsheet, Zap, Search, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const Solutions: React.FC = () => {
  const services = [
    {
      id: 'docs',
      title: 'Работа с документами',
      desc: 'Отправьте агенту фото накладной. Он сам откроет Excel/1C, найдет нужную ячейку и внесет данные. Без ошибок.',
      icon: <FileSpreadsheet className="text-punch-red-400" size={32} />
    },
    {
      id: 'comm',
      title: 'Личный секретарь',
      desc: 'Агент мониторит почту. Важное письмо? Он пишет в Telegram: «Пришел счет от юристов, оплатить?». Вы жмете «Да», он платит.',
      icon: <Mail className="text-punch-red-400" size={32} />
    },
    {
      id: 'research',
      title: 'Анализ конкурентов',
      desc: 'Задача: «Сравни цены топ-10 конкурентов». Агент зайдет на их сайты, соберет прайсы в таблицу и выделит цветом, где мы дороже.',
      icon: <Search className="text-punch-red-400" size={32} />
    },
    {
      id: 'personal',
      title: 'Учёт вашей личной жизни',
      desc: 'Он подключается к заметкам и может вести документацию вашей жизни',
      icon: <BookOpen className="text-punch-red-400" size={32} />
    },
    {
      id: 'social',
      title: 'Ведение соцсетей',
      desc: 'Скажите: «Выложи сторис про акцию». Агент подберет картинку, напишет текст, наложит музыку и опубликует в Instagram.',
      icon: <Instagram className="text-punch-red-400" size={32} />
    },
    {
      id: 'hr',
      title: 'HR и Найм',
      desc: 'Агент отфильтрует 100 резюме на HeadHunter, выберет лучших и сам напишет им приглашение на собеседование в свободный слот.',
      icon: <Users className="text-punch-red-400" size={32} />
    }
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-space-indigo-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Что он умеет делать?</h2>
          <div className="text-lavender-grey-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            <p className="mb-6">
              Короткий ответ: {' '}
              <span className="relative inline-block px-2">
                <strong className="text-lavender-grey-50 relative z-10">
                  ВСЁ, ЧТО МОЖЕТ ДЕЛАТЬ ЧЕЛОВЕК ЗА КОМПЬЮТЕРОМ.
                </strong>
                <svg 
                  className="absolute -bottom-1 left-0 w-full h-3 z-0" 
                  viewBox="0 0 400 20" 
                  fill="none" 
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M5 15 Q 100 10, 200 15 T 395 12"
                    stroke="#ed122b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </p>
            <p className="mt-8">
              Никаких сложных интеграций по API. Агент управляет браузером и программами так же, как живой сотрудник.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group flex flex-col border border-white/5 hover:border-punch-red-500/20 shadow-2xl shadow-space-indigo-950/40">
              <div className="mb-5 md:mb-6 bg-space-indigo-900 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-punch-red-500/30 transition-colors">
                {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })} 
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-punch-red-400 transition-colors">{service.title}</h3>
              <p className="text-lavender-grey-400 text-sm md:text-base leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>
              <a 
                href="https://t.me/alxblski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pt-6 border-t border-white/5 flex items-center text-sm font-semibold text-lavender-grey-300 cursor-pointer hover:text-punch-red-400 transition-colors"
              >
                Посмотреть пример <Zap size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
