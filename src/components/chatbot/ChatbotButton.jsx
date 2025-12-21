import React from 'react';
import { Bot } from 'lucide-react';

export const ChatbotButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 chatbot-floating-button ${
        isOpen 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      <Bot className="w-6 h-6 text-white" />
    </button>
  );
};
