'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, MoreVertical } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isMe: boolean;
}

export default function ChatPage({ params }: { params: { chatId: string } }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatInfo] = useState({
    username: 'witcherfan42',
    game: 'The Witcher 3',
    status: 'Çevrimiçi',
    avatar: 'W'
  });

  useEffect(() => {
    // Mock mesajlar
    const mockMessages: Message[] = [
      {
        id: '1',
        sender: 'witcherfan42',
        content: 'Merhaba! The Witcher 3 hakkında konuşmak ister misin?',
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
        isMe: false
      },
      {
        id: '2',
        sender: 'ben',
        content: 'Evet, özellikle Blood and Wine DLC\'si hakkında ne düşünüyorsun?',
        timestamp: new Date(Date.now() - 1000 * 60 * 4),
        isMe: true
      },
      {
        id: '3',
        sender: 'witcherfan42',
        content: 'Blood and Wine muhteşemdi! Toussaint bölgesi görsel bir şölen gibiydi.',
        timestamp: new Date(Date.now() - 1000 * 60 * 3),
        isMe: false
      }
    ];

    setMessages(mockMessages);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: 'ben',
      content: newMessage,
      timestamp: new Date(),
      isMe: true
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Chat Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{chatInfo.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{chatInfo.username}</div>
                  <div className="text-sm text-gray-400">{chatInfo.game}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">{chatInfo.status}</span>
              </div>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MoreVertical className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4 mb-6">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.isMe ? 'bg-purple-600' : 'bg-gray-700'} rounded-2xl px-4 py-3`}>
                <p className="text-white">{message.content}</p>
                <div className="text-xs text-gray-300 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4">
          <div className="container mx-auto">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="flex-1 bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-purple-600 text-white rounded-xl p-3 hover:bg-purple-700 transition-colors"
              >
                <Send className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 