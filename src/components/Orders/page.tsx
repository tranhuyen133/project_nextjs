'use client';

import { useEffect, useState } from 'react';

interface Order {
  id: number;
  date: string;
  total: number;
  status: string;
}

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Giả sử đây là API call để lấy danh sách đơn hàng
    const fetchOrders = async () => {
      const response = await fetch('/api/orders'); // Cần thay thế bằng API thực tế
      const data: Order[] = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

      <div className="grid grid-cols-1 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-lg">
            <p className="text-lg font-semibold">Order #{order.id}</p>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total.toLocaleString()}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
