import React, { useState, useEffect } from 'react';

function Filters({ onChange }) {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    // Send filter values to parent component when any filter changes
    onChange({ category, company, sortBy, sortOrder });
  }, [category, company, sortBy, sortOrder, onChange]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={handleCategoryChange} />
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" value={company} onChange={handleCompanyChange} />
      </div>
      <div>
        <label htmlFor="sortBy">Sort By:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          {/* Add more sorting options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="sortOrder">Sort Order:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
