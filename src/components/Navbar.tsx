import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Bell, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">DeFi Exchange</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              <User className="w-5 h-5" />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;