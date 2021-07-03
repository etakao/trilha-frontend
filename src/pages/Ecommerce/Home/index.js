import React from 'react';

import ProductCard from '../../../components/ProductCard';

import { products } from '../../../products';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <section className="logo">
        <img src="/assets/logo.svg" alt="Logo" />
        <p>Onde você encontra</p>
        <span>os melhores periféricos.</span>
      </section>

      <section className="filters">
        <div className="search-container">
          <span>{products.length} produtos encontrados.</span>
          <input type="text" placeholder="Pesquisar..." />
        </div>
      </section>

      <section className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default Home;