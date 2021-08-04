import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {StateProvider} from "./context"

ReactDOM.render(
  <StateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById('root')
);

