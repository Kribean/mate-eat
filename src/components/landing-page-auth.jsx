import React, { useState } from 'react';
import { Users, Building2, ChevronRight, X, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';

const UserSignupFields = () => (
  <>
    <div className="grid grid-cols-2 gap-4">
      <InputField label="First Name" type="text" />
      <InputField label="Last Name" type="text" />
    </div>
    <InputField label="Phone Number" type="tel" />
  </>
);

const BusinessSignupFields = () => (
  <>
    <InputField label="Business Name" type="text" />
    <InputField label="Business Address" type="text" />
    <div className="grid grid-cols-2 gap-4">
      <InputField label="Postal Code" type="text" />
      <InputField label="Phone Number" type="tel" />
    </div>
  </>
);

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const AuthModal = ({ type, onClose,accountType }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{type === 'user' ? 'Welcome Back!' : 'Business Portal'}</h2>
          <div className="mt-2 inline-flex rounded-lg p-1 bg-gray-100">
            <button className={`px-4 py-2 rounded-md text-sm font-medium ${isLogin ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`} onClick={() => setIsLogin(true)}>Login</button>
            <button className={`px-4 py-2 rounded-md text-sm font-medium ${!isLogin ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`} onClick={() => setIsLogin(false)}>Sign Up</button>
          </div>
        </div>
        <div className="space-y-4">
          {!isLogin && (type === 'user' ? <UserSignupFields /> : <BusinessSignupFields />)}
          <InputField label="Email" type="email" placeholder="Enter your email" />
          <InputField label="Password" type="password" placeholder={isLogin ? "Enter your password" : "Create a password"} />
        </div>
        <button onClick={() => router.push(accountType==="user"?"/utilisateurs":"/entreprise")} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium">
            {isLogin ? 'Log In' : 'Create Account'}
          </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="min-h-screen" >
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center py-24" style={{
      backgroundImage: "url(/images/background_food.png)",
    }}>
        <h1 className="text-4xl font-bold mb-6">Connect Over Great Food</h1>
        <p className="text-xl mb-12 text-blue-100">Join tables, meet new people, and discover amazing restaurants</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Button text="Continue as User" icon={<Users />} onClick={() => setActiveModal('user')} />
          <Button text="Continue as Business" icon={<Building2 />} onClick={() => setActiveModal('business')} bgColor="bg-blue-800" hoverColor="hover:bg-blue-900" textColor="text-white" />
        </div>
      </div>
      <FeatureSection />
      {activeModal && <AuthModal accountType={activeModal} type={activeModal} onClose={() => setActiveModal(null)} />}
    </div>
  );
};

const Button = ({ text, icon, onClick, bgColor = "bg-white", hoverColor = "hover:bg-blue-50", textColor = "text-blue-600" }) => (
  <button onClick={onClick} className={`${bgColor} ${textColor} ${hoverColor} px-6 py-4 rounded-lg flex items-center justify-center space-x-3 group`}> 
    {icon} <span className="font-medium">{text}</span> <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
);

const FeatureSection = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Feature title="Join a Table" icon={<Users className="w-8 h-8 text-blue-600" />} text="Find and join tables at your favorite restaurants and meet new people" />
        <Feature title="Register Your Restaurant" icon={<Building2 className="w-8 h-8 text-blue-600" />} text="Create a business profile and start hosting social dining experiences" />
        <Feature title="Manage Bookings" icon={<Calendar className="w-8 h-8 text-blue-600" />} text="Easily keep track of your dining appointments and table sessions" />
      </div>
    </div>
  </div>
);

const Feature = ({ title, icon, text }) => (
  <div className="text-center">
    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default HomePage;
