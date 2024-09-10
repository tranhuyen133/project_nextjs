'use client';
import { useParams } from 'next/navigation'; // Use useParams instead of useRouter
import { useState, useEffect } from 'react';

// Define a Product interface
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  caratWeight: number;
}

const ProductDetail: React.FC = () => {
  const params = useParams(); // Get the params from the URL
  const id = params.id; // Get the product ID from the params
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<string | null>(null); // Error state handling

  useEffect(() => {
    if (!id) return;
    git 
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/data/products/${id}.json`);  // Fetch product details by ID
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError('Product not found or unable to load product details.');
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToBag = () => {
    if (!product) return;
    const cartItem = { ...product, quantity };
    console.log('Product added to cart:', cartItem);  // Simulate cart logic
  };

  if (!product) {
    return <div>{error || 'Loading...'}</div>;
  }

  return (
    <div className="container mx-auto py-10 px-6">
      <div className="flex space-x-6">
        <div className="w-1/2">
          <img src={product.image} alt={product.name} className="w-full mb-4" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">${product.price}</p>

          <div className="mb-6">
            <label className="font-semibold">Quantity</label>
            <div className="flex items-center space-x-2 mt-2">
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="border px-2 py-1 rounded">-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="border px-2 py-1 rounded">+</button>
            </div>
          </div>

          <div className="mb-6">
            <label className="font-semibold">Carat Weight</label>
            <select className="ml-2 p-2 border rounded-md">
              <option value="0.05">0.05</option>
              <option value="0.10">0.10</option>
            </select>
          </div>

          <button onClick={handleAddToBag} className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Add to Bag
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Description & Details</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
