import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { ChatMessage, TypingIndicator } from './ChatMessage';

export const Chatbot = ({ isOpen, onClose, portfolioData }) => {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Manikanta. How can I assist you with my portfolio?",
      isUser: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatbotRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // API call to chatbot backend
    try {
      const apiUrl = import.meta.env.VITE_CHATBOT_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: inputValue
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        const botResponse = { 
          text: data.answer || "I couldn't find a relevant answer. Could you please rephrase your question?", 
          isUser: false 
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        const botResponse = { 
          text: "I'm having trouble connecting to my knowledge base right now. Please try again later!", 
          isUser: false 
        };
        setMessages(prev => [...prev, botResponse]);
      }
      
    } catch (error) {
      console.error('Chatbot API error:', error);
      const botResponse = { 
        text: "I'm having trouble connecting to my knowledge base right now. Please try again later!", 
        isUser: false 
      };
      setMessages(prev => [...prev, botResponse]);
    }
    
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 h-[500px] rounded-lg shadow-2xl flex flex-col overflow-hidden chatbot-enter chatbot-enter-active max-sm:bottom-4 max-sm:right-4 max-sm:w-72 max-sm:h-[450px] chatbot-window" ref={chatbotRef}>
      {/* Header with close button */}
      <div className="chatbot-header text-white p-4 flex items-center justify-between relative overflow-hidden">
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm"></div>
        
        <div className="flex items-center gap-3 flex-1 relative z-10">
          <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center flex-shrink-0 border border-white border-opacity-20">
            <span className="text-sm font-bold text-white drop-shadow-sm">AI</span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-sm truncate text-white">Portfolio Assistant</h3>
            <p className="text-xs opacity-90 truncate text-white drop-shadow-md">Ask me anything about Manikanta</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors flex-shrink-0 ml-2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 chatbot-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isUser={message.isUser} />
        ))}
        
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-lg focus:outline-none text-sm text-gray-900 placeholder-gray-600 chatbot-input"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="px-3 py-2 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed chatbot-send-button"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
