'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const HeroSection: React.FC = () => {
  const router = useRouter();  // Hook to navigate to other pages

  const handleShopNowClick = () => {
    router.push('/productlist');  // Navigate to product listing page
  };

  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/path-to-your-image.png')" }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      {/* Video Section */}
      <div className="relative w-full h-auto p-4">
        <iframe 
          className="w-full h-[500px] md:h-[900px] lg:h-[700px] border-2 border-gray-300"
          src="https://media.tiffany.com/is/content/tiffanydm/2024_ICONS_BC_HP_VIDEO1_Desktop" 
          title="Hero Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* "Shop Now" Button */}
      <div className="absolute bottom-10 text-center">
        <button
          onClick={handleShopNowClick}
          className="bg-black text-white px-6 py-3 text-lg rounded"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
