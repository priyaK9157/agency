import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './input.css'
import { BrowserRouter } from 'react-router-dom';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import rootReducer from "./redux/index" 
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from "./redux/Persist"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
        
      </Provider>
);


