import React from 'react';
import { Button, Input } from './base-components';

const BusinessRegistration = () => {
  const [formData, setFormData] = React.useState({
    businessName: '',
    managerName: '',
    address: '',
    postalCode: '',
    foodType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Register Your Restaurant</h2>
          <p className="mt-2 text-gray-600">Join our community of restaurants and start hosting tables</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <Input
            label="Business Name"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />

          <Input
            label="Manager's Name"
            name="managerName"
            value={formData.managerName}
            onChange={handleChange}
            required
          />

          <Input
            label="Business Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <Input
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Type of Food Served
            </label>
            <select
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select food type</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="french">French</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Button type="submit" className="w-full">
            Register Business
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BusinessRegistration;
