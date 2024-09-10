import { useRouter } from 'next/router';
import React from 'react';

const UserDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the user id from the URL

  return (
    <div>
      <h1>User Details - {id}</h1>
      {/* Add your code to display user details */}
    </div>
  );
};

export default UserDetails;
