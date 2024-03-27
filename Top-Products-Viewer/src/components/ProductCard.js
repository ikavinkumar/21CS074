import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p><strong>Company:</strong> {product.company}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Discount:</strong> {product.discount}%</p>
      <p><strong>Availability:</strong> {product.availability ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default ProductCard;
