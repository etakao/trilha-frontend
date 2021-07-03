import React from 'react';
import { NavLink } from 'react-router-dom';

import { FiShoppingBag, FiShoppingCart, FiUser } from 'react-icons/fi';

import './styles.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <NavLink to="/" className="menu-item">
        <FiShoppingBag /> Produtos
      </NavLink>
      <a href="/login" className="menu-item">
        <FiUser /> Entrar
      </a>
      <NavLink to="/cart" className="menu-item">
        <FiShoppingCart /> Carrinho
      </NavLink>
    </div>
  );
}

export default Navbar;