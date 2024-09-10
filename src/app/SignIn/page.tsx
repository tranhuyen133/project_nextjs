'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignIn: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = { email, password }; // Dummy login success

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/productlist');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex w-3/4 max-w-5xl">
        {/* Sign In Section */}
        <div className="flex-1 border-r pr-10">
          <h2 className="text-3xl font-semibold mb-4">Sign In</h2>
          <p className="mb-8">Please sign in to your Tiffany Account.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4">
            <a href="#" className="text-sm text-blue-600 underline">
              Forgot your password?
            </a>
          </div>
        </div>

        {/* Create an Account Section */}
        <div className="flex-1 pl-10">
          <h2 className="text-3xl font-semibold mb-4">Create an Account</h2>
          <p className="mb-8">
            Save time during checkout, view your shopping bag and saved items from any device and access your order history.
          </p>
          <button
            onClick={() => router.push('/register')}
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
