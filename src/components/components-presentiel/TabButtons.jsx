
import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

const TabButtons = ({ activeTab, setActiveTab }) => (
  <div className="mb-6">
    <div className="flex rounded-lg overflow-hidden border border-gray-200">
      <button
        onClick={() => setActiveTab('login')}
        className={`flex-1 py-2 px-4 flex items-center justify-center gap-2 ${
          activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <LogIn size={18} />
        Login
      </button>
      <button
        onClick={() => setActiveTab('signup')}
        className={`flex-1 py-2 px-4 flex items-center justify-center gap-2 ${
          activeTab === 'signup' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <UserPlus size={18} />
        Sign Up
      </button>
    </div>
  </div>
);

export default TabButtons;
