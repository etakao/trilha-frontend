import React from 'react';
import { NavLink } from 'react-router-dom';

import { FiLogIn, FiShoppingBag, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCart } from '../../contexts/Cart';
import { useUser } from '../../contexts/User';

import './styles.css';

function Navbar() {
  const { totalAmount } = useCart();
  const { user } = useUser();

  return (
    <div className="navbar-container">
      <NavLink to="/" className="menu-item">
        <FiShoppingBag /> Produtos
      </NavLink>
      {user ? (
        <NavLink to="/profile" className="menu-item">
          <FiUser /> {user.name}
        </NavLink>
      ) : (
        <a href="/login" className="menu-item">
          <FiLogIn /> Entrar
        </a>
      )}
      <NavLink to="/cart" className="menu-item">
        <FiShoppingCart /> Carrinho
        <span>{totalAmount !== 0 ? totalAmount : ''}</span>
      </NavLink>
    </div>
  );
}

export default Navbar;