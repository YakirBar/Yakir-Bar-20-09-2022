import './i18n';
import './index.css';
import App from './App';
import React from 'react';
import store from './app/store';
import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Box className='select-none'>
          <App />
        </Box>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
