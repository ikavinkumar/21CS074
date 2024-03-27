import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { getProducts } from '../services/api'; 

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    sortBy: '',
    sortOrder: '',
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    setLoading(true);
    getProducts(filters)
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [filters]);

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
      page: 1, 
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: newPage,
    }));
  };

  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <Filters onChange={handleFiltersChange} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            currentPage={filters.page}
            totalPages={Math.ceil(products.length / filters.limit)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default AllProductsPage;
