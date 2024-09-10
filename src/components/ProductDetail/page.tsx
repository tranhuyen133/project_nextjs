'use client';
import { useParams } from 'next/navigation';  
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();  // Get the route parameters
  const { id } = params;  // Retrieve the product ID from params

  useEffect(() => {
    // Fetch product details from db.json using the product ID
    fetch(`http://localhost:3000/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full" />
          </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <button className="bg-blue-500 text-white px-6 py-3 rounded">
            Add to Bag
          </button>
          <button className="ml-4 text-gray-600 px-6 py-3 rounded">
            ♥ Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
