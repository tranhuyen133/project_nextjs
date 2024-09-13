import React from 'react';

interface SidePanelProps {
  isOpen: boolean;
  closePanel: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, closePanel }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-6">
        <button
          onClick={closePanel}
          className="text-gray-500 hover:text-gray-800 text-2xl float-right"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-6">Huyen</h2>
        <ul className="space-y-4">
          <li><a href="#" className="hover:underline">Orders</a></li>
          <li><a href="#" className="hover:underline">Personal Information</a></li>
          <li><a href="#" className="hover:underline">Sign-in Information</a></li>
          <li><a href="#" className="hover:underline">Preferences</a></li>
          <li><a href="#" className="hover:underline">Addresses</a></li>
          <li><a href="#" className="hover:underline">Sign Out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
