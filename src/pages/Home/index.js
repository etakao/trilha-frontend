import React from 'react';

import ProductCard from '../../components/ProductCard';

import './styles.css';

function Home() {
  const product1 = {
    "id": 1,
    "name": "Headset HyperX I",
    "category": "headset",
    "brand": {
      "id": 1,
      "name": "HyperX"
    },
    "price": 100,
    "description": "Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. ",
    "image_uri": "/assets/headset-hyperx.png"
  }

  return (
    <div className="home-container">
      <section className="logo">
        <img src="/assets/logo.svg" alt="Logo" />
        <p>Onde você encontra</p>
        <span>os melhores periféricos.</span>
      </section>

      <section className="filters">
        <div className="menu-container">
          <button>Filtros</button>
        </div>
        <div className="search-container">
          <span>3 produtos encontrados.</span>
          <input type="text" placeholder="Pesquisar..." />
        </div>
      </section>

      <section className="products">
        <ProductCard product={product1} />
        <ProductCard product={product1} />
        <ProductCard product={product1} />
      </section>
    </div>
  );
}

export default Home;