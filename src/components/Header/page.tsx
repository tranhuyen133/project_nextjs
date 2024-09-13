import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaUserAlt, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import HighJewelryDropdown from '../HighJewelry/page';
import { useRouter } from 'next/navigation';

// Define props for Header
interface HeaderProps {
  toggleLoginPanel: () => void; // Function to open login panel
}

const Header: React.FC<HeaderProps> = ({ toggleLoginPanel }) => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/PersonalInformation');  // Chuyển hướng đến trang personal-info
  };

  return (
    <header className="bg-white py-4 shadow-sm">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Section with Search, Location and Contact Us */}
        <div className="flex space-x-4">
          <FaSearch className="text-xl cursor-pointer" />
          <FaMapMarkerAlt className="text-xl cursor-pointer" />
          <span className="cursor-pointer">Contact Us</span>
        </div>

        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Tiffany & Co.</h1>
        </div>

        {/* Right Section with icons */}
        <div className="flex space-x-4">
          <AiOutlineCalendar className="text-xl cursor-pointer" />
          <span className="cursor-pointer">Book an Appointment</span>
          <FaUserAlt className="text-xl cursor-pointer" onClick={handleSignInClick} /> {/* Chuyển hướng đến trang personal-info */}
          <FaHeart className="text-xl cursor-pointer" />
          <FaShoppingBag className="text-xl cursor-pointer" />
        </div>
      </nav>

      {/* Menu Items */}
      <ul className="flex justify-center space-x-6 mt-4">
        <li>
          {/* High Jewelry with dropdown */}
          <HighJewelryDropdown />
        </li>
        <li className="cursor-pointer hover:text-gray-500">Jewelry</li>
        <li className="cursor-pointer hover:text-gray-500">Gifts</li>
        <li className="cursor-pointer hover:text-gray-500">Love & Engagement</li>
        <li className="cursor-pointer hover:text-gray-500">Fine Watches</li>
        <li className="cursor-pointer hover:text-gray-500">Home</li>
        <li className="cursor-pointer hover:text-gray-500">Accessories</li>
        <li className="cursor-pointer hover:text-gray-500">Stories</li>
      </ul>
    </header>
  );
};

export default Header;
