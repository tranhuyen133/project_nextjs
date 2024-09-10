import React from 'react';

// Danh sách các danh mục với hình ảnh và hai mục quảng cáo mới
const categories = [
  { id: 1, name: 'Necklaces & Pendants', image: 'https://media.tiffany.com/is/image/tiffanydm/2024_Icons-HP-Category-Necklaces?$tile$&&fmt=webp' }, 
  { id: 2, name: 'Earrings', image: 'https://media.tiffany.com/is/image/tiffanydm/2024_MDAY_MWTS_988x988_Earrings?$tile$&&fmt=webp' },
  { id: 3, name: 'Rings', image: 'https://media.tiffany.com/is/image/tiffanydm/2024_MDAY_464x464_Exceptional?$tile$&&fmt=webp' },
  { id: 4, name: 'Bracelets', image: 'https://media.tiffany.com/is/image/tiffanydm/2024_MDAY_MWTS_988x988_Bracelets?$tile$&&fmt=webp' },
  { id: 5, name: 'Watches', image: 'https://media.tiffany.com/is/image/tiffanydm/2024_Icons-HP-Category-Watch?$tile$&&fmt=webp' },
  { id: 6, name: 'New In: Lock by Tiffany', image: 'https://media.tiffany.com/is/image/tiffanydm/2024_Lock_Narrow_HP_50_50_Desktop?$tile$&wid=1088&hei=1360&fmt=webp' }, 
  { id: 7, name: 'Most Popular Jewelry', image: 'https://media.tiffany.com/is/image/tiffanydm/2024_MDAY_50_50_OnFig_6_Desktop?$tile$&wid=1088&hei=1360&fmt=webp' }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
     
      {/* Phần mới với hai hình ảnh quảng cáo */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {categories.slice(5, 7).map((category) => (
          <div key={category.id} className="text-center">
            <img 
              src={category.image} 
              alt={category.name} 
              className="mb-4 w-full h-auto object-cover" 
            />
            <h3 className="text-xl font-semibold">{category.name}</h3>
            
          </div>
        ))}
      </div>

      {/* Các danh mục sản phẩm chính */}
      <section>
      <h2 className="text-3xl font-bold text-center mb-2">Shop by Category</h2>
      <p className="text-center mb-8 ">Brilliant design and unparalleled craftsmanship.</p>
      <a 
              href="#" 
              className="inline-block mt-4 px-4 py-2 bg-black text-white uppercase tracking-wide text-sm ml-[44pc] mb-8"
            >
              Shop Now
            </a>
      </section>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {categories.slice(0, 5).map((category) => (
          <div key={category.id} className="text-center">
            <img 
              src={category.image} 
              alt={category.name} 
              className="mb-4 w-full h-auto object-cover" 
            />
            <h3 className="text-lg">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
