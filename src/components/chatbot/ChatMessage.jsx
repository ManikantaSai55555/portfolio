import React from 'react';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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
        backgroundColor: isUser ? '#3b82f6' : '#ffffff',
        color: isUser ? '#ffffff' : '#374151',
        border: isUser ? 'none' : '1px solid #e5e7eb',
        padding: '12px 14px',
        borderRadius: '12px',
        maxWidth: '200px',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '1.5'
      }}>
        {isUser ? (
          <span style={{ 
            color: 'inherit',
            margin: '0', 
            fontSize: '14px', 
            fontWeight: 'normal',
            display: 'block'
          }}>
            {message}
          </span>
        ) : (
          <div className="chatbot-markdown-content" style={{
            color: '#374151',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: '#000000',
                  borderBottom: '2px solid #3b82f6',
                  paddingBottom: '4px'
                }} {...props} />,
                h2: ({node, ...props}) => <h2 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '6px',
                  marginTop: '8px',
                  color: '#111827'
                }} {...props} />,
                h3: ({node, ...props}) => <h3 style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginBottom: '6px',
                  marginTop: '10px',
                  color: '#000000'
                }} {...props} />,
                h4: ({node, ...props}) => <h4 style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  marginTop: '8px',
                  color: '#1f2937'
                }} {...props} />,
                strong: ({node, ...props}) => <strong style={{
                  fontWeight: '700',
                  color: '#1f2937'
                }} {...props} />,
                em: ({node, ...props}) => <em style={{
                  fontStyle: 'italic'
                }} {...props} />,
                p: ({node, ...props}) => <p style={{
                  marginBottom: '8px',
                  lineHeight: '1.5'
                }} {...props} />,
                ul: ({node, ...props}) => <ul style={{
                  marginBottom: '8px',
                  paddingLeft: '20px',
                  listStyleType: 'disc'
                }} {...props} />,
                ol: ({node, ...props}) => <ol style={{
                  marginBottom: '8px',
                  paddingLeft: '20px',
                  listStyleType: 'decimal'
                }} {...props} />,
                li: ({node, ...props}) => <li style={{
                  marginBottom: '4px',
                  lineHeight: '1.4'
                }} {...props} />,
                a: ({node, ...props}) => <a style={{
                  color: '#3b82f6',
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }} {...props} />,
                code: ({node, ...props}) => <code style={{
                  backgroundColor: '#f3f4f6',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontFamily: 'monospace'
                }} {...props} />,
                pre: ({node, ...props}) => <pre style={{
                  backgroundColor: '#f3f4f6',
                  padding: '10px',
                  borderRadius: '8px',
                  overflow: 'auto',
                  marginBottom: '8px',
                  fontSize: '13px'
                }} {...props} />,
                hr: ({node, ...props}) => <hr style={{
                  border: 'none',
                  borderTop: '1px solid #e5e7eb',
                  margin: '12px 0'
                }} {...props} />,
                blockquote: ({node, ...props}) => <blockquote style={{
                  borderLeft: '4px solid #3b82f6',
                  paddingLeft: '12px',
                  marginBottom: '8px',
                  fontStyle: 'italic',
                  color: '#6b7280'
                }} {...props} />
              }}
            >
              {message}
            </ReactMarkdown>
          </div>
        )}
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

