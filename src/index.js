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
//just don't add config and require dotenv.


const defaultState = {
  data: {
  data: []
  }
}
export const setData = (data) => (
  {
    type: "SET_DATA", // not an arg, because typos!
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
      // no change
      break;
  }
  return newState;
}

const rootReducer = combineReducers({
  dataReducer
});



const store = configureStore({
  reducer: rootReducer, 
});
window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
