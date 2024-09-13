'use client'
import React from 'react';
import NavigationHeader from '@/components/NavigationHeader/page'; // Correct path for your project
import { useRouter } from 'next/navigation';  // import navigation hook
import { useEffect, useState } from 'react';

// Define a Product interface
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const ProductList: React.FC = () => {
  const router = useRouter();  // Use router for navigation
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');  // Fetch product data
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);  // Navigate to the product detail page
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <NavigationHeader />

      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Shop by Collection</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full mb-4 cursor-pointer"
                onClick={() => handleProductClick(product.id)}  // Click handler
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600">${product.price.toLocaleString()}</p>
              <button
                onClick={() => handleProductClick(product.id)}  // Button navigation
                className="mt-2 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
