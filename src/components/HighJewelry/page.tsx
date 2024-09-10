import React, { useState } from 'react';

const HighJewelryDropdown: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Functions to handle hover or click
  const showDropdown = () => setIsVisible(true);
  const hideDropdown = () => setIsVisible(false);

  return (
    <div className="relative">
      {/* High Jewelry menu link */}
      <div
        className="cursor-pointer hover:text-gray-600"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        High Jewelry
        {/* Dropdown content */}
        {isVisible && (
          <div
            className="absolute top-full left-0 bg-white shadow-lg p-4 z-50 w-[600px] h-[300px]"
            onMouseEnter={showDropdown} // Keep dropdown open when hovering over it
            onMouseLeave={hideDropdown} // Hide dropdown when mouse leaves it
          >
            <div className="flex justify-between">
              {/* Collections Section */}
              <div className="w-1/3">
                <h3 className="font-semibold mb-2">Collections</h3>
                <ul>
                  <li className="hover:underline cursor-pointer">Blue Book 2024: Tiffany Céleste</li>
                  <li className="hover:underline cursor-pointer">Blue Book 2023: Out of the Blue</li>
                  <li className="hover:underline cursor-pointer">Jean Schlumberger by Tiffany</li>
                </ul>
              </div>
              {/* Discover Section */}
              <div className="w-1/3">
                <h3 className="font-semibold mb-2">Discover</h3>
                <ul>
                  <li className="hover:underline cursor-pointer">The Tiffany Diamond</li>
                  <li className="hover:underline cursor-pointer">Legendary Acquisitions</li>
                  <li className="hover:underline cursor-pointer">Tiffany Diamonds</li>
                  <li className="hover:underline cursor-pointer">Tiffany Color Gemstones</li>
                  <li className="hover:underline cursor-pointer">About Jean Schlumberger</li>
                </ul>
              </div>
              {/* Jewelry Image Section */}
              <div className="w-1/3 text-center">
                <img
                  src="https://media.tiffany.com/is/image/tiffanydm/2024_APR_BB_NAV_Desktop?$tile$&wid=1168&hei=608&fmt=webp"
                  alt="High Jewelry"
                  className="mb-4 w-full h-auto object-cover"
                />
                <p className="text-xs">Discover Blue Book 2024: Tiffany Céleste</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HighJewelryDropdown;
