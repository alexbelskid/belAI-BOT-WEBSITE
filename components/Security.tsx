import React from 'react';
import { ShieldCheck, Server, Lock } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-space-indigo-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-lavender-grey-50">
              Безопасность — <br />
              это фундамент
            </h2>
            <p className="text-lavender-grey-400 text-lg mb-8">
              Мы понимаем, что данные — ваш главный актив. Поэтому предлагаем решения, которые полностью контролируете вы.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="bg-space-indigo-900 p-3 rounded-lg h-fit border border-white/10 group-hover:border-punch-red-500/30 transition-colors">
                  <Server className="text-punch-red-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-lavender-grey-100">Local AI (On-premise)</h4>
                  <p className="text-lavender-grey-400">Возможность развертывания моделей на вашем оборудовании (например, Mac Studio). Данные не покидают периметр офиса.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-space-indigo-900 p-3 rounded-lg h-fit border border-white/10 group-hover:border-punch-red-500/30 transition-colors">
                  <ShieldCheck className="text-punch-red-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-lavender-grey-100">No Cloud Policy</h4>
                  <p className="text-lavender-grey-400">Мы можем отключить любые внешние API. Ваш агент будет работать автономно внутри корпоративной сети.</p>
                </div>
              </div>

               <div className="flex gap-4 group">
                <div className="bg-space-indigo-900 p-3 rounded-lg h-fit border border-white/10 group-hover:border-punch-red-500/30 transition-colors">
                  <Lock className="text-punch-red-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-lavender-grey-100">Enterprise защита</h4>
                  <p className="text-lavender-grey-400">Доступ через VPN, двухфакторная аутентификация, маскирование чувствительных данных (PII).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
             <div className="aspect-square bg-space-indigo-900/30 rounded-full border border-white/5 flex items-center justify-center relative z-10 p-12 backdrop-blur-3xl shadow-2xl">
                <div className="absolute inset-0 bg-punch-red-500/5 blur-3xl rounded-full"></div>
                <div className="text-center">
                    <ShieldCheck size={120} className="text-punch-red-600 mx-auto mb-4 opacity-40" />
                    <div className="text-2xl font-bold text-lavender-grey-50">GDPR / 152-ФЗ</div>
                    <div className="text-punch-red-400 font-mono text-sm mt-2 tracking-widest">COMPLIANT</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
