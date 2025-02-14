import React, { useState } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';

const ChatRoomModal = (s) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const restaurant={name:"La Cité"}
  
  // Example messages - in a real app, these would come from a backend
  const [messages] = useState([
    {
      id: 1,
      user: {
        name: 'Sophie Martin',
        avatar: '/api/placeholder/32/32'
      },
      text: 'Salut! Je suis très enthousiaste pour ce dîner!',
      timestamp: '14:30'
    },
    {
      id: 2,
      user: {
        name: 'Thomas Bernard',
        avatar: '/api/placeholder/32/32'
      },
      text: 'Moi aussi! Quelqu\'un a des restrictions alimentaires?',
      timestamp: '14:32'
    },
    {
      id: 3,
      user: {
        name: 'Marie Dubois',
        avatar: '/api/placeholder/32/32'
      },
      text: 'Je suis végétarienne, mais j\'ai vérifié le menu et il y a plein d\'options!',
      timestamp: '14:35'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // Here you would typically send the message to your backend
    console.log('New message:', newMessage);
    setNewMessage('');
  };

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
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                <p className="text-sm text-gray-600">Discussion de groupe</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start gap-3">
                  <img
                    src={message.user.avatar}
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
