import React, { useState } from 'react';
import { X } from 'lucide-react';

const InputField = ({ label, type, value, onChange, required, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const BusinessAuthForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      // Handle signup
      setShowConfirmation(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
      });
    } else {
      // Handle login
      console.log('Login with:', {
        email: formData.email,
        password: formData.password
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Portail Entreprise</h2>
          <div className="mt-4 inline-flex rounded-lg p-1 bg-gray-100">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isLogin ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`} 
              onClick={() => {
                setIsLogin(true);
                setShowConfirmation(false);
              }}
            >
              Login
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isLogin ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`} 
              onClick={() => {
                setIsLogin(false);
                setShowConfirmation(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {showConfirmation ? (
          <div className="mb-4 bg-green-50 border-green-200">
            <div className="text-green-800">
              Nous traitons votre demande, vous recevrez un email contenant votre mot de passe sous 48h maximum
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <InputField
                  label="Nom"
                  type="text"
                  value={formData.lastName}
                  onChange={e => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  required
                  placeholder="Entrez votre nom"
                />
                <InputField
                  label="Prénom"
                  type="text"
                  value={formData.firstName}
                  onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  required
                  placeholder="Entrez votre prénom"
                />
                <InputField
                  label="Téléphone"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={e => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  required
                  placeholder="Entrez votre numéro de téléphone"
                />
              </>
            )}
            
            <InputField
              label="Email"
              type="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              placeholder="Entrez votre email professionnel"
            />

            {isLogin && (
              <InputField
                label="Mot de passe"
                type="password"
                value={formData.password}
                onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                required
                placeholder="Entrez votre mot de passe"
              />
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium"
            >
              {isLogin ? 'Se connecter' : 'Créer un compte'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BusinessAuthForm;
