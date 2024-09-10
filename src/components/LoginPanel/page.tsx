import React from 'react';
import Link from 'next/link'; // Import Link từ Next.js

interface Props {
  togglePanel: () => void;  // Function để đóng Login Panel
}

const LoginPanel: React.FC<Props> = ({ togglePanel }) => {
  return (
    <div className="fixed right-0 top-0 h-full w-1/3 bg-white p-6 shadow-lg transition-transform transform translate-x-0 z-50">
      {/* Nút Close */}
      <button onClick={togglePanel} className="text-black text-2xl mb-4">&times;</button>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Sign In or Create an Account</h2>

      {/* Thông tin */}
      <p className="mb-8">
        With an account, you can check out faster, view your online order history, and access your shopping bag or saved items from any device.
      </p>

      {/* Nút Create an Account */}
      <div className="mb-6">
        <Link href="/Register" className="text-black-600 underline">
          Create an Account
        </Link>
      </div>

      {/* Nút Sign In */}
      <div>
        <Link href="/SignIn" className="text-black-600 underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LoginPanel;
