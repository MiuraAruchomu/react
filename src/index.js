import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { App } from './App';
import { Router } from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={Router}>
    <App />
  </RouterProvider>,
);
