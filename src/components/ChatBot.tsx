'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Auto-open chat on first visit in this session
  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('chatbot-welcomed')) {
      setIsOpen(true);
      setMessages(prev => [
        ...prev,
        { text: "👋 Welcome! If you need any help or have questions, just ask me here.", isUser: false }
      ]);
      sessionStorage.setItem('chatbot-welcomed', 'true');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    
    // Simulate bot response (you can replace this with actual API calls)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'm here to help! Please let me know if you have any specific questions.", 
        isUser: false 
      }]);
    }, 1000);

    setInputValue('');
  };

  return (
    <div className="fixed bottom-4 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="backdrop-blur-xl bg-white/70 border border-violet-200 shadow-2xl rounded-3xl w-96 h-[28rem] flex flex-col ring-2 ring-violet-300/40"
            style={{ boxShadow: '0 8px 32px 0 rgba(60, 30, 90, 0.18)' }}
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-violet-600 to-blue-500 text-white p-5 rounded-t-3xl flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' className='h-8 w-8'><g><path d="M6 22c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#fff" strokeWidth="2" fill="none"/><ellipse cx="18" cy="22" rx="8" ry="7" fill="#fff" stroke="#fff" strokeWidth="1.5"/><circle cx="8" cy="22" r="2.5" fill="#fff" stroke="#fff" strokeWidth="1.5"/><circle cx="28" cy="22" r="2.5" fill="#fff" stroke="#fff" strokeWidth="1.5"/><rect x="16" y="8" width="4" height="5" rx="2" fill="#fff"/><circle cx="18" cy="6" r="2" fill="#fff" stroke="#fff" strokeWidth="1.5"/><circle cx="15" cy="23" r="1" fill="#6366f1"/><circle cx="21" cy="23" r="1" fill="#6366f1"/><path d="M16.5 26c.5.5 3.5.5 4 0" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/></g></svg>
                <h3 className="font-bold text-lg tracking-wide drop-shadow-sm">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 text-2xl font-bold px-2 transition-colors"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm text-base font-medium ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-br-md'
                        : 'bg-white/90 text-gray-800 border border-violet-100 rounded-bl-md'
                    }`}
                    style={{backdropFilter: message.isUser ? undefined : 'blur(2px)'}}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-violet-100 bg-white/60 rounded-b-3xl">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-xl border border-violet-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-violet-400 text-gray-800 placeholder-gray-400 shadow-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:from-violet-700 hover:to-blue-600 transition-all"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-violet-600 to-blue-500 text-white p-5 rounded-full shadow-2xl hover:from-violet-700 hover:to-blue-600 transition-all border-2 border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-10 w-10"
            fill="none"
          >
            <g>
              <path d="M8 32c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="white" strokeWidth="3" fill="none"/>
              <ellipse cx="24" cy="28" rx="12" ry="10" fill="white" stroke="white" strokeWidth="2"/>
              <circle cx="10" cy="28" r="4" fill="white" stroke="white" strokeWidth="2"/>
              <circle cx="38" cy="28" r="4" fill="white" stroke="white" strokeWidth="2"/>
              <rect x="22" y="12" width="4" height="8" rx="2" fill="white"/>
              <circle cx="24" cy="10" r="3" fill="white" stroke="white" strokeWidth="2"/>
              <circle cx="20" cy="30" r="1.5" fill="#2563eb"/>
              <circle cx="28" cy="30" r="1.5" fill="#2563eb"/>
              <path d="M21 34c1 1 5 1 6 0" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="24" cy="40" r="3" fill="#2563eb"/>
              <path d="M24 38v-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
            </g>
          </svg>
        </motion.button>
      )}
    </div>
  );
} 