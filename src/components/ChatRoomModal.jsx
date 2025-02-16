import React, { useState } from 'react';
import { X, Send, MessageCircle, ChevronDown } from 'lucide-react';

const ChatRoomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [selectedConversation, setSelectedConversation] = useState('0');
  
  // Unified conversations data structure
  const conversations = [
    {
      id: '0',
      name: 'La Cité - 20 Feb 2025 19:30',
      messages: [
        {
          id: 1,
          user: {
            name: 'Sophie Martin'
          },
          text: 'Salut! Je suis très enthousiaste pour ce dîner!',
          timestamp: '14:30'
        },
        {
          id: 2,
          user: {
            name: 'Thomas Bernard'
          },
          text: 'Moi aussi! Quelqu\'un a des restrictions alimentaires?',
          timestamp: '14:32'
        },
        {
          id: 3,
          user: {
            name: 'Marie Dubois'
          },
          text: 'Je suis végétarienne, mais j\'ai vérifié le menu et il y a plein d\'options!',
          timestamp: '14:35'
        }
      ]
    },
    {
      id: '1',
      name: 'Le Bistrot - 22 Feb 2025 20:00',
      messages: [
        {
          id: 1,
          user: {
            name: 'Pierre Durand'
          },
          text: 'On se retrouve directement au restaurant?',
          timestamp: '15:20'
        }
      ]
    },
    {
      id: '2',
      name: 'Chez Marcel - 25 Feb 2025 12:30',
      messages: [
        {
          id: 1,
          user: {
            name: 'Julie Lambert',
          },
          text: 'J\'ai réservé une table pour 6 personnes',
          timestamp: '10:15'
        }
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // Here you would typically send the message to your backend
    console.log('New message:', newMessage);
    setNewMessage('');
  };

  // Get current conversation messages
  const currentConversation = conversations.find(conv => conv.id === selectedConversation);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Conversations</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Conversation Selector */}
              <div className="relative">
                <select
                  value={selectedConversation}
                  onChange={(e) => setSelectedConversation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg appearance-none bg-white pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {conversations.map((conv) => (
                    <option key={conv.id} value={conv.id}>
                      {conv.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentConversation?.messages.map((message) => (
                <div key={message.id} className="flex items-start gap-3">
                  <img
                    src={"/images/jirani.png"}
                    alt={message.user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium">{message.user.name}</span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <p className="text-gray-800 mt-1">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatRoomModal;