import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { WrappedApp } from './App';
import './index.css';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </React.StrictMode>
);
