import { useRouter } from 'next/router';
import React from 'react';

const CategoryDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the category id from the URL

  return (
    <div>
      <h1>Category Details - {id}</h1>
      {/* Add your code to display/edit the category details */}
    </div>
  );
};

export default CategoryDetails;
