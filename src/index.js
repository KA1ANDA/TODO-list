import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/Store';
import './theme.css';
import styles from "./index.module.scss";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <div className={styles.photoBackground}> </div>
        <App/>   
      </div>   
    </Provider>
  </React.StrictMode>
);

