import React from 'react';

import { ProductsContextProvider } from '../../contexts/Products';
import { DashboardRoutes } from '../../routes';
import Sidebar from '../../components/Sidebar';

import './styles.css';

function Dashboard() {
  return (
    <ProductsContextProvider>
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <DashboardRoutes />
        </div>
      </div>
    </ProductsContextProvider>
  );
}

export default Dashboard;