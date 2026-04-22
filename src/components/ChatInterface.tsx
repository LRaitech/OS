import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_INSTRUCTION = `
You are the Lotus Room AI Guide. You are a sophisticated, wise, and strategic partner for founders. 
Your tone is professional, visionary, and grounded in the "Dojo" philosophy of continuous improvement (Kaizen) and culture by design.

Key Principles you follow:
1. Art of Brand: Identity is narrative + execution.
2. Campfyer: High-converting content systems.
3. Evo: Revenue architecture for emerging ventures.
4. Beat Therapy: Cultural Moats and Creative Process.
5. Deeper: Economic models and investor narrative.

When users speak with you, you offer concise, high-value insights. You don't just answer questions; you challenge their strategic thinking. 
If they ask about a specific room, explain how it fits into the broader venture lifecycle.

Always stay "in character" as a part of the Lotus Room Studio.
`;

export default function ChatInterface({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Welcome to the Studio. I am your guide through the Dojo. How can we refine your venture today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).GEMINI_API_KEY });
      
      const chatHistory = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const assistantMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: response.text || "I apologize, the signal is weak in the Dojo. Could you repeat that?" 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'assistant', 
        content: "I encountered a system error. Please check your connection or try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Chat Window */}
          <motion.div 
            className="fixed bottom-24 right-4 md:right-12 w-[calc(100%-32px)] md:w-[450px] h-[600px] max-h-[80vh] bg-white dark:bg-[#0A0A0A] border border-[rgba(var(--rgb-gold),0.3)] shadow-2xl rounded-2xl flex flex-col z-[10001] overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="p-5 border-b border-[rgba(var(--rgb-gold),0.15)] flex items-center justify-between bg-white dark:bg-[#0A0A0A]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-white shadow-sm">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-serif italic text-lg leading-tight dark:text-white">Studio Guide</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    <span className="text-[9px] uppercase tracking-widest text-[var(--warm-grey)] dark:text-[var(--gold-light)] font-medium">Inside the Dojo</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-[var(--warm-grey)] dark:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-5 space-y-6 scrollbar-hide bg-[#FAFAFA] dark:bg-[#0D0D0D]">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[88%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm ${m.role === 'user' ? 'bg-[var(--gold)] text-white' : 'bg-white dark:bg-[#1A1A1A] text-[var(--gold)] border border-[rgba(var(--rgb-gold),0.1)]'}`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-xl text-[14px] leading-relaxed shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-[var(--gold)] text-white rounded-tr-none' 
                        : 'bg-white dark:bg-[#1A1A1A] text-[var(--ink-soft)] dark:text-white rounded-tl-none border border-[rgba(var(--rgb-gold),0.1)]'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-white dark:bg-[#1A1A1A] text-[var(--gold)]">
                      <Bot size={14} />
                    </div>
                    <div className="p-4 rounded-xl text-sm bg-white dark:bg-[#1A1A1A] rounded-tl-none flex items-center gap-3 border border-[rgba(var(--rgb-gold),0.1)]">
                      <Loader2 size={14} className="animate-spin text-[var(--gold)]" />
                      <span className="italic font-serif dark:text-white opacity-60">Consulting frameworks...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-5 border-t border-[rgba(var(--rgb-gold),0.15)] bg-white dark:bg-[#0A0A0A]">
              <div className="relative group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Direct enquiry to the Studio..."
                  className="w-full pl-5 pr-16 py-4 bg-[#F8F8F8] dark:bg-[#151515] border border-black/5 dark:border-white/10 rounded-xl focus:border-[var(--gold)] focus:ring-0 outline-none text-[14px] transition-all dark:text-white placeholder:text-[var(--warm-grey)]/40"
                  disabled={isLoading}
                />
                
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <button 
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="w-10 h-10 bg-[var(--gold)] text-white rounded-lg flex items-center justify-center shadow-md shadow-[var(--gold)]/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-20"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-center mt-5 text-[var(--warm-grey)] font-medium opacity-60">
                Strategy Partnership · Real-time Insight
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
