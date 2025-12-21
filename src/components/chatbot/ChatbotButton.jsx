import React from 'react';
import { Bot } from 'lucide-react';

export const ChatbotButton = ({ isOpen, onClick }) => {
  // Don't render the button when chatbot is open to prevent overlap
  if (isOpen) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 chatbot-floating-button"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Bot className="w-6 h-6 text-white drop-shadow-lg" />
    </button>
  );
};
