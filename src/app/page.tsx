'use client';
import React, { useState } from 'react';
import Header from '@/components/Header/page';
import HeroSection from '@/components/HeroSection/page';
import ProductShowcase from '@/components/ProductShowcase/page';
import CategorySection from '@/components/CategorySection/page';
import Footer from '@/components/Footer/page';
import HighJewelry from '@/components/HighJewelry/page';
import LoginPanel from '@/components/LoginPanel/page';

const App: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Quản lý trạng thái mở panel
  const [viewHighJewelry, setViewHighJewelry] = useState(false); // Quản lý trạng thái hiển thị trang HighJewelry

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleHighJewelryClick = () => {
    setViewHighJewelry(true);
  };

  const handleBackToMainPage = () => {
    setViewHighJewelry(false);
  };

  return (
    <div>
      <Header toggleLoginPanel={togglePanel} />

      {viewHighJewelry ? (
        <div>
          <button onClick={handleBackToMainPage} className="text-blue-600 underline mb-4">
            Back to Main Page
          </button>
          <HighJewelry />
        </div>
      ) : (
        <div>
          <HeroSection />
          <ProductShowcase />
          <CategorySection />
        </div>
      )}

      <Footer />

      {!viewHighJewelry && (
        <button onClick={handleHighJewelryClick} className="mt-4 p-2 bg-blue-500 text-white">
          View High Jewelry
        </button>
      )}

      {isPanelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <LoginPanel togglePanel={togglePanel} />
        </div>
      )}
    </div>
  );
};

export default App;
