'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Định nghĩa giao diện cho user
interface User {
  name: string;
  email: string;
}

const AccountPage: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/SignIn'); // Chuyển về trang đăng nhập nếu chưa đăng nhập
    }
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem('user'); // Xóa thông tin người dùng
    router.push('/SignIn'); // Quay lại trang đăng nhập
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Xin chào, {user.name}</h1>

      <div className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold">Tài khoản của bạn</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="/orders" className="text-blue-600 underline">Orders</a>
          </li>
          <li>
            <a href="/account/personal-info" className="text-blue-600 underline">Personal Information</a>
          </li>
          <li>
            <a href="/account/sign-in-info" className="text-blue-600 underline">Sign-in Information</a>
          </li>
          <li>
            <a href="/account/preferences" className="text-blue-600 underline">Preferences</a>
          </li>
          <li>
            <a href="/account/addresses" className="text-blue-600 underline">Addresses</a>
          </li>
          <li>
            <button onClick={handleSignOut} className="text-red-600 underline">Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountPage;
