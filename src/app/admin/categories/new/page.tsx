import React, { useState } from 'react';

const NewCategoryPage: React.FC = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to submit a new category
  };

  return (
    <div>
      <h1>Create a New Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          required
        />
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default NewCategoryPage;
