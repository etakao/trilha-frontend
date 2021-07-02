import React from 'react';

import { FiShoppingBag, FiShoppingCart, FiUser } from 'react-icons/fi';

import './styles.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="menu-item">
        <FiShoppingBag /> Produtos
      </div>
      <div className="menu-item">
        <FiUser /> Entrar
      </div>
      <div className="menu-item">
        <FiShoppingCart /> Carrinho
      </div>
    </div>
  );
}

export default Navbar;