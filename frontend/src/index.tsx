import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthMiddleware from './AuthMiddleware';
import './index.css';
import LoginPage from './pages/LoginPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthMiddleware>
      <LoginPage />
    </AuthMiddleware>
  </React.StrictMode>
);