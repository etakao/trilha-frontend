import React from 'react';

import Button from '../Button';

import './styles.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={`/assets/${product.category}-${product.brand.name}.png`}
        alt={product.name}
      />
      <p>{product.name}</p>
      <span>R${(product.price).toFixed(2)}</span>
      <div className="product-actions">
        <span>Detalhes</span>
        <Button title="Adicionar" />
      </div>
    </div>
  );
}

export default ProductCard;