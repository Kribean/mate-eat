
import React, { useState } from 'react';
import TabButtons from './TabButtons';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthScreen = ({ nextStep,setNextStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNextStep("hello")
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNextStep("hello")

  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Jirani</h1>
          <p className="text-gray-600">Connect with your neighbors over a meal</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome to Jirani</h2>
            <p className="text-gray-600">Sign in to your account or create a new one to get started</p>
          </div>

          <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === 'login' ? (
            <LoginForm handleLogin={handleLogin} isLoading={isLoading} nextStep={nextStep} setNextStep={setNextStep} />
          ) : (
            <SignupForm handleSignup={handleSignup} isLoading={isLoading} nextStep={nextStep} setNextStep={setNextStep} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
