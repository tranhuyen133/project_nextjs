// import Image from 'next/image';
// import Link from 'next/link';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// const ProductList: React.FC = () => {
//   const products: Product[] = [
//     {
//       id: 1,
//       name: 'Gold Bracelet',
//       price: 200,
//       image: 'https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/elsa-perettidiamonds-by-the-yard-single-diamond-pendant-10769213_1031666_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp',
//     },
//     {
//       id: 2,
//       name: 'Silver Ring',
//       price: 150,
//       image: '/images/ring.jpg',
//     },
//     {
//       id: 3,
//       name: 'Diamond Necklace',
//       price: 500,
//       image: '/images/necklace.jpg',
//     },
//   ];

//   return (
//     <div className="grid grid-cols-3 gap-8">
//       {products.map((product) => (
//         <div key={product.id} className="border p-4 rounded-md hover:shadow-lg transition-shadow">
//           <Link href={`/products/${product.id}`} passHref>
//             <a>
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-56 object-cover mb-4 cursor-pointer"
//               />
//             </a>
//           </Link>
//           <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
//           <p className="text-gray-600 mb-4">${product.price}</p>
//           <div className="flex justify-between">
//             <button
//               className="bg-black text-white px-4 py-2 rounded-md"
//               onClick={() => console.log('Added to Bag')}
//             >
//               Add to Bag
//             </button>
//             <button
             
//               onClick={() => console.log('Added to Wishlist')}
//                className="text-gray-600 px-4 py-2 rounded-md"
//             >
//               ♥ Add to Wishlist
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
