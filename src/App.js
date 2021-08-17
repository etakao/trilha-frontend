import React from 'react';

import Routes from './routes';

import 'antd/dist/antd.css';
import { UserContextProvider } from './contexts/User';

function App() {
  return (
    <UserContextProvider>
      <div>
        <Routes />
      </div>
    </UserContextProvider>
  );
}

export default App;
