
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, User, X, MessageSquareText, ChevronDown } from 'lucide-react';
import { BotState, ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Merhaba! Ben Power Step Asistanı. Süreçlerinizi dijitalleştirmek için aklınızdaki projeyi bana anlatabilirsiniz.' }
  ]);
  const [botState, setBotState] = useState<BotState>(BotState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || botState === BotState.THINKING) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setBotState(BotState.THINKING);

    try {
      const response = await generateProjectScope(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setBotState(BotState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Bir hata oluştu. Lütfen tekrar deneyin.' }]);
      setBotState(BotState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-slate-800 text-white rotate-90' 
            : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-primary-500/50'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquareText size={28} />}
      </button>

      {/* Chat Window Widget */}
      <div 
        className={`fixed bottom-24 right-6 w-[90vw] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
        style={{ height: 'min(600px, 70vh)' }}
      >
        {/* Header */}
        <div className="bg-slate-900 p-4 rounded-t-2xl flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white border-2 border-slate-700">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Power Step Asistan</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-slate-400">Çevrimiçi</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                msg.role === 'model' 
                  ? 'bg-primary-100 text-primary-700 border border-primary-200' 
                  : 'bg-slate-200 text-slate-600'
              }`}>
                {msg.role === 'model' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                  msg.role === 'model' 
                    ? 'bg-white border border-slate-100 text-slate-700 rounded-tl-none' 
                    : 'bg-primary-600 text-white rounded-tr-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {botState === BotState.THINKING && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0">
                <Bot size={16} />
              </div>
              <div className="bg-white border border-slate-100 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-slate-500 text-xs">
                <Loader2 size={14} className="animate-spin" />
                Yazıyor...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Mesajınızı yazın..."
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm placeholder:text-slate-400"
            />
            <button
              onClick={handleSend}
              disabled={botState === BotState.THINKING || !input.trim()}
              className="p-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2">
             <span className="text-[10px] text-slate-400">Power Platform Yapay Zeka Desteği</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIConsultant;
