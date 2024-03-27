import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api'; // Assuming you have a service to fetch product by ID

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Fetch product details from backend API using the productId
    getProductById(productId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="product-page">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : product ? (
        <div className="product-details">
          <h2>{product.name}</h2>
          <p><strong>Company:</strong> {product.company}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
          <p><strong>Discount:</strong> {product.discount}%</p>
          <p><strong>Availability:</strong> {product.availability ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductPage;
