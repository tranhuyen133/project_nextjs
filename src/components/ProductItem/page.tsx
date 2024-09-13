import { useRouter } from 'next/router';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${product.id}`); // Điều hướng tới trang chi tiết sản phẩm
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;
