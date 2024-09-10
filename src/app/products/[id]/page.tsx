// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
// }
// // 
// const ProductDetail: React.FC = () => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     if (id) {
//       fetch(`https://api.example.com/products/${id}`) // Thay bằng URL API của bạn
//         .then(response => response.json())
//         .then(data => setProduct(data))
//         .catch(error => console.error('Error fetching product details:', error));
//     }
//   }, [id]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   return (
//     <div className="container mx-auto py-10">
//       <div className="grid grid-cols-2 gap-8">
//         <div>
//           <Image src={product.image} alt={product.name} width={500} height={500} />
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-xl mb-4">${product.price}</p>
//           <p className="text-gray-600 mb-4">{product.description}</p>
//           <button className="bg-blue-500 text-white px-6 py-3 rounded">Add to Bag</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
