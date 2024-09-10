import React from 'react';

const products = [
  { id: 1, image: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettismall-bone-cuff-10665744_1012567_ED_M.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp', name: 'Gold Bracelet' },
  { id: 2, image: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettibone-ring-74238521_1075649_ED_M.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp', name: 'Silver Ring' },
  { id: 3, image: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettimedium-bone-cuff-10659035_1012587_ED_M.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp', name: 'Gold Necklace' },
  { id: 4, image: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettisplit-ring-74143458_1072365_ED_M.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp', name: 'Diamond Earrings' },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img src={product.image} alt={product.name} className="mb-4" />
            <h3 className="text-lg">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
