import React from 'react';
import { Bot, User } from 'lucide-react';

export const ChatMessage = ({ message, isUser }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: isUser ? 'flex-end' : 'flex-start', 
      marginBottom: '12px',
      gap: '8px'
    }}>
      {!isUser && (
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0
        }}>
          <Bot size={12} />
        </div>
      )}
      
      <div style={{
        backgroundColor: isUser ? '#3b82f6' : '#f3f4f6',
        color: isUser ? '#ffffff' : '#374151',
        border: isUser ? 'none' : '1px solid #e5e7eb',
        padding: '8px 12px',
        borderRadius: '12px',
        maxWidth: '200px',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '1.4'
      }}>
        <span style={{ 
          color: 'inherit',
          margin: '0', 
          fontSize: '14px', 
          fontWeight: 'normal',
          display: 'block'
        }}>
          {message}
        </span>
      </div>
      
      {isUser && (
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: '#6b7280',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0
        }}>
          <User size={12} />
        </div>
      )}
    </div>
  );
};

export const TypingIndicator = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'flex-start', 
      marginBottom: '12px',
      gap: '8px'
    }}>
      <div style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: '#3b82f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        flexShrink: 0
      }}>
        <span style={{ fontSize: '10px' }}>AI</span>
      </div>
      
      <div style={{
        backgroundColor: '#f3f4f6',
        color: '#374151',
        border: '1px solid #e5e7eb',
        padding: '8px 12px',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '1.4'
      }}>
        <div style={{ display: 'flex', gap: '3px' }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#9ca3af',
            animation: 'bounce 1.4s infinite ease-in-out'
          }}></div>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#9ca3af',
            animation: 'bounce 1.4s infinite ease-in-out',
            animationDelay: '-0.32s'
          }}></div>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#9ca3af',
            animation: 'bounce 1.4s infinite ease-in-out',
            animationDelay: '-0.16s'
          }}></div>
        </div>
      </div>
    </div>
  );
};
