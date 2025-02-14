import React from 'react';
import { Search, Users, Calendar, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Button Component
export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Button Component
export const LinkButton = ({url='#', children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <Link 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      href={url}
      {...props}
    >
      {children}
    </Link>
  );
};

// Input Component
export const Input = ({ label, className = '', ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        {...props}
      />
    </div>
  );
};

// Navbar Component
export const Navbar = ({ userName }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href={"/utilisateurs"} className="text-xl font-semibold">Jirani</Link>
          </div>
          <div className="flex items-center space-x-4">
            <LinkButton url='/utilisateurs/rdv' variant="outline" className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Mes rendez-vous
            </LinkButton>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="font-medium">{userName}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// RestaurantCard Component
export const RestaurantCard = ({ name, type, address, onSelect }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{type}</p>
          <p className="text-sm text-gray-500 mt-1">{address}</p>
        </div>
        <Button onClick={onSelect}>Select</Button>
      </div>
    </div>
  );
};

// Filter Section Component
export const FilterSection = ({ onFilterChange }) => {
  return (
    <div className="flex gap-4 mb-6">
      <Input
        type="text"
        placeholder="Postal Code"
        className="max-w-[200px]"
        onChange={(e) => onFilterChange('postalCode', e.target.value)}
      />
      <div className="relative">
        <select 
          className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => onFilterChange('type', e.target.value)}
        >
          <option value="">All Types</option>
          <option value="italian">Italian</option>
          <option value="japanese">Japanese</option>
          <option value="french">French</option>
        </select>
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};
