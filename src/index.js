import React from 'react';
import ReactDOM from 'react-dom/client';
import './Paypal.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./navbar.css";
import { combineReducers } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultState = {
  data: {
    data: []
  }
};

export const setData = (data) => (
  {
    type: "SET_DATA",
    payload: {
      data
    }
  }  
);

const dataReducer = (state=defaultState.data, action) => {
  if (!action) return state;
  if (!action.payload) return state;

  let newState = {
    ...state
  };

  switch (action.type) {
    case "SET_DATA":
      newState.data = action.payload.data;
      break;
    default:
      break;
  }

  return newState;
};

const rootReducer = combineReducers({
  dataReducer
});

const store = configureStore({
  reducer: rootReducer
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();