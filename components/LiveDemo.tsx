import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, Paperclip, MoreVertical, Wifi, Battery, Signal, Monitor } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  time: string;
};

export const LiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Script for the demo
  const script = [
    { text: "Зайди в Excel 'Дебиторка', найди всех кто должен больше месяца и отправь им уведомления в почту.", sender: 'user', delay: 1000 },
    { text: "Принял. Подключаюсь к Excel... 📊", sender: 'agent', delay: 2000 },
    { text: "Нашел 4 компании. Формирую PDF-уведомления и отправляю через ваш Outlook. Заняло 14 секунд. ✅", sender: 'agent', delay: 4000 },
    { text: "Супер. Теперь выложи в инстаграм сторис с анонсом акции из папки 'Дизайн' на моем столе.", sender: 'user', delay: 2000 },
    { text: "Загружаю файлы с рабочего стола... 📸", sender: 'agent', delay: 2000 },
    { text: "Готово! Сторис опубликована. Подписчики уже начали реагировать в Директ. Отвечать мне или вы сами?", sender: 'agent', delay: 4000 },
  ];

  useEffect(() => {
    let timeoutIds: ReturnType<typeof setTimeout>[] = [];
    let cumulativeDelay = 0;

    const runScript = () => {
      setMessages([]); // Reset
      cumulativeDelay = 0;

      script.forEach((step, index) => {
        // Typing indicator logic for agent
        if (step.sender === 'agent') {
            const typingStart = setTimeout(() => {
                setIsTyping(true);
            }, cumulativeDelay);
            timeoutIds.push(typingStart);
        }

        cumulativeDelay += step.delay;

        const messageShow = setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              id: index,
              text: step.text,
              sender: step.sender as 'user' | 'agent',
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        }, cumulativeDelay);
        timeoutIds.push(messageShow);
      });

      // Loop the script
      const loop = setTimeout(runScript, cumulativeDelay + 5000);
      timeoutIds.push(loop);
    };

    runScript();

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  // Auto-scroll logic restricted to container
  useEffect(() => {
    if (chatContainerRef.current) {
      const { current } = chatContainerRef;
      // Scroll to bottom of the chat container
      current.scrollTo({
        top: current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  return (
    <section id="demo" className="py-16 md:py-24 bg-carbon-black-950 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Всего одна строка <br />
              <span className="text-bright-snow-400">в Telegram</span>
            </h2>
            
            <p className="text-base md:text-lg text-bright-snow-400 mb-8 leading-relaxed">
              Вы общаетесь с агентом как с живым ассистентом. Он имеет доступ к вашему рабочему столу и понимает, что нужно сделать.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="bg-carbon-black-900 p-3 rounded-lg border border-white/10 mt-1">
                    <Monitor className="text-platinum-400" size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">Доступ к ПК</h4>
                    <p className="text-bright-snow-500 text-sm">Агент видит файлы, папки и открытые программы на вашем компьютере (Mac/Windows).</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="bg-carbon-black-900 p-3 rounded-lg border border-white/10 mt-1">
                    <Bot className="text-alabaster-grey-400" size={24} />
                 </div>
                 <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">Полная автономность</h4>
                    <p className="text-bright-snow-500 text-sm">Не нужно контролировать каждый шаг. Дали задачу — получили результат.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="lg:w-1/2 w-full flex justify-center relative">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[350px] h-[500px] md:h-[600px] bg-bright-snow-500/20 blur-[60px] md:blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative w-full max-w-[320px] md:max-w-[375px] h-[650px] md:h-[750px] flex flex-col overflow-hidden">
              {/* iPhone Frame Overlay */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                <img 
                  src="https://raw.githubusercontent.com/alxblski/ai-agents-for-business-7/main/iphone-frame.png" 
                  alt="iPhone Frame" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to a styled frame if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.parentElement!.classList.add('border-[6px]', 'md:border-[8px]', 'border-iron-grey-800', 'rounded-[30px]', 'md:rounded-[50px]');
                  }}
                />
              </div>

              <div className="relative flex-1 flex flex-col mx-[12px] my-[12px] md:mx-[18px] md:my-[18px] rounded-[24px] md:rounded-[38px] overflow-hidden bg-carbon-black-950">
                {/* Status Bar */}
                <div className="h-10 md:h-12 bg-carbon-black-900 flex items-center justify-between px-8 pt-4 text-white text-[10px] md:text-xs z-10">
                  <span>9:41</span>
                  <div className="flex gap-2">
                    <Signal size={12} />
                    <Wifi size={12} />
                    <Battery size={12} />
                  </div>
                </div>

                {/* Telegram Header */}
                <div className="bg-iron-grey-800 p-3 md:p-4 flex items-center gap-3 border-b border-white/5 z-10">
                  <div className="relative">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-bright-snow-600 to-platinum-600 flex items-center justify-center text-white font-bold">
                      <Bot size={18} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-iron-grey-800 animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-xs md:text-sm">BelAI Agent</h3>
                    <p className="text-bright-snow-400 text-[10px] md:text-xs">В сети (Mac Studio)</p>
                  </div>
                  <MoreVertical className="text-bright-snow-400" size={18} />
                </div>

                {/* Chat Area */}
                <div 
                  ref={chatContainerRef}
                  className="flex-1 bg-carbon-black-950 p-3 md:p-4 overflow-y-auto space-y-4 no-scrollbar relative scroll-smooth"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

                  <div className="text-center text-[10px] md:text-xs text-bright-snow-500 my-4 bg-carbon-black-900/50 py-1 rounded-full w-fit mx-auto px-3">
                    Сегодня
                  </div>

                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                    >
                      <div 
                        className={`p-2.5 md:p-3 rounded-2xl text-xs md:text-sm leading-relaxed relative ${
                          msg.sender === 'user' 
                            ? 'bg-bright-snow-600 text-white rounded-tr-sm' 
                            : 'bg-iron-grey-800 text-bright-snow-200 rounded-tl-sm border border-white/5'
                        }`}
                      >
                        {msg.text}
                        <span className={`text-[9px] md:text-[10px] block mt-1 opacity-70 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="self-start flex items-center gap-1 bg-iron-grey-800 p-3 rounded-2xl rounded-tl-sm border border-white/5 w-14 md:w-16 h-8 md:h-10">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-bright-snow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-bright-snow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-bright-snow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="bg-iron-grey-800 p-3 pb-6 flex items-center gap-2 md:gap-3 border-t border-white/5 z-10">
                  <Paperclip className="text-bright-snow-400" size={18} />
                  <div className="flex-1 bg-carbon-black-900 rounded-full h-8 md:h-9 px-4 flex items-center text-bright-snow-500 text-xs md:text-sm">
                    Написать сообщение...
                  </div>
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-bright-snow-600 flex items-center justify-center text-white">
                    <Send size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};