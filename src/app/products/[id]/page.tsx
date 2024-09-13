'use client'
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const { id } = Router.query; // Lấy ID sản phẩm từ URL
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; 

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
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
  }, [id]); // Khi id thay đổi, sẽ gọi lại useEffect

  if (!id) {
    return <div>Loading...</div>; // Hiển thị loading khi id chưa có
  }

  if (!product) {
    return <div>{error || 'Loading product...'}</div>; // Hiển thị lỗi hoặc đang tải
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
              <button className="border px-2 py-1 rounded">-</button>
              <span>1</span>
              <button className="border px-2 py-1 rounded">+</button>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
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
