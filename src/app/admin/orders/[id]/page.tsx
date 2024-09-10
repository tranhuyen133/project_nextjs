import { useRouter } from 'next/router';
import React from 'react';

const OrderDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the order id from the URL

  return (
    <div>
      <h1>Order Details - {id}</h1>
      {/* Add your code to display order details */}
    </div>
  );
};

export default OrderDetails;
