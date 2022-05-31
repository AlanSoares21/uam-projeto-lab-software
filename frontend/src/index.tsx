import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthMiddleware from './AuthMiddleware';
import './index.css';
import PublicRoutes from './PublicRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthMiddleware>
          <PublicRoutes />
      </AuthMiddleware>
    </BrowserRouter>
  </React.StrictMode>
);