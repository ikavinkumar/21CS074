// HomePage.js

import React from 'react';
import AllProductsPage from '../components/AllProductsPage';
import Filters from '../components/Filters';

function HomePage() {
  const handleFiltersChange = (filters) => {
    console.log('Filters changed:', filters);
    // Handle filter changes (e.g., fetch products with updated filters)
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      {/* Render the Filters component */}
      <Filters onChange={handleFiltersChange} />
      {/* Render the AllProductsPage component */}
      <AllProductsPage />
    </div>
  );
}

export default HomePage;
