import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [managers, setManagers] = useState(5);
  const [hours, setHours] = useState(2); // hours wasted per day per manager
  const [salary, setSalary] = useState(3000); // USD

  const [savingsMonth, setSavingsMonth] = useState(0);
  const [roiMonths, setRoiMonths] = useState(0);

  useEffect(() => {
    const hourlyRate = salary / 168;
    const monthlyLoss = managers * hourlyRate * hours * 21;
    setSavingsMonth(Math.round(monthlyLoss));
    const avgProjectCost = 3000;
    const payback = avgProjectCost / monthlyLoss;
    setRoiMonths(payback < 0.1 ? 0.1 : parseFloat(payback.toFixed(1)));
  }, [managers, hours, salary]);

  return (
    <section id="calculator" className="py-24 bg-space-indigo-950">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-punch-red-500/10 bg-gradient-to-br from-space-indigo-900 to-space-indigo-950 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <CalcIcon className="text-punch-red-500" size={32} />
                <h2 className="text-3xl font-bold text-lavender-grey-50">ROI Калькулятор</h2>
              </div>
              <p className="text-lavender-grey-400 mb-8">
                Посчитайте, сколько денег вы теряете на рутинных задачах, которые AI выполняет мгновенно.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-lavender-grey-300">Количество сотрудников</label>
                    <span className="text-punch-red-400 font-bold">{managers} чел.</span>
                  </div>
                  <input 
                    type="range" min="1" max="50" value={managers} 
                    onChange={(e) => setManagers(parseInt(e.target.value))}
                    className="w-full h-2 bg-space-indigo-800 rounded-lg appearance-none cursor-pointer accent-punch-red-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-lavender-grey-300">Часов рутины в день (на 1 чел)</label>
                    <span className="text-punch-red-400 font-bold">{hours} ч.</span>
                  </div>
                  <input 
                    type="range" min="0.5" max="8" step="0.5" value={hours} 
                    onChange={(e) => setHours(parseFloat(e.target.value))}
                    className="w-full h-2 bg-space-indigo-800 rounded-lg appearance-none cursor-pointer accent-punch-red-500"
                  />
                  <p className="text-xs text-lavender-grey-500 mt-1">Поиск информации, заполнение CRM, отчеты</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-lavender-grey-300">Средняя зарплата ($/мес)</label>
                    <span className="text-punch-red-400 font-bold">${salary.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="1000" max="15000" step="100" value={salary} 
                    onChange={(e) => setSalary(parseInt(e.target.value))}
                    className="w-full h-2 bg-space-indigo-800 rounded-lg appearance-none cursor-pointer accent-punch-red-500"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-space-indigo-950/50 rounded-2xl p-8 border border-white/5 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 w-32 h-32 bg-punch-red-500/5 blur-3xl rounded-full pointer-events-none"></div>
                
                <div className="mb-8">
                  <span className="text-lavender-grey-500 text-sm uppercase tracking-wider">Экономия в месяц</span>
                  <div className="text-5xl font-bold text-lavender-grey-50 mt-2 tracking-tight">
                    ${savingsMonth.toLocaleString()}
                  </div>
                  <p className="text-platinum-400 text-sm mt-2 flex items-center gap-2 font-medium">
                    + ${Math.round(savingsMonth * 12).toLocaleString()} в год
                  </p>
                </div>

                <div>
                   <span className="text-lavender-grey-500 text-sm uppercase tracking-wider">Окупаемость внедрения</span>
                   <div className="text-4xl font-bold text-punch-red-500 mt-2">
                     {roiMonths < 1 ? "< 1 месяца" : `~ ${roiMonths} мес.`}
                   </div>
                   <p className="text-lavender-grey-500 text-sm mt-2">
                     В среднем наши агенты окупаются за 3-4 недели.
                   </p>
                </div>
                
                <a 
                  href="https://t.me/alxblski" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full mt-8 bg-punch-red-600 hover:bg-punch-red-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-punch-red-600/20 text-center block"
                >
                  Получить расчет для моей ниши
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
