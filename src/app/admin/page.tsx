'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AdminDashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || !user.email) {
      router.push('/SignIn'); 
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      {/* Nội dung admin */}
    </div>
  );
};

export default AdminDashboard;
