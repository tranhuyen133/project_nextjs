'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  email: string;
}

const PersonalInfoPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSave = () => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      alert('Your information has been updated!');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Personal Information</h1>

      <div className="border p-6 rounded-lg">
        <label className="block mb-4">
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </label>
        <label className="block mb-4">
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </label>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
