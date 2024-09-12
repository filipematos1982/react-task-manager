import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Confirme que o index.css está sendo importado, se necessário
import './App.css'; // Certifique-se de que o App.css está importado aqui também, se não estiver no App.js
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
