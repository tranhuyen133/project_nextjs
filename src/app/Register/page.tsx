'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Register: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    router.push('/SignIn');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="bg-white p-8  rounded-lg w-full max-w-md mr-1000">
        <h2 className="text-3xl font-semibold mb-4">Create an Account</h2>
        <p className="text-gray-600 mb-6">
          With a Tiffany.com account, you can save time during checkout, access your shopping bag from any device and view your order history.
        </p>
        <p className="text-black-600 mb-6">Have a Tiffany account? <a href="/SignIn" className="underline">Sign In</a></p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-black text-white w-full py-2 rounded-md hover:bg-gray-800 transition"
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>

      {/* Hình ảnh */}
      <div className="ml-10 hidden md:block">
        <img src="https://www.tiffany.com/shared/images/checkout/blue-box.jpg" alt="Gift Box" className="w-80 h-30" />
      </div>
    </div>
  );
};

export default Register;
