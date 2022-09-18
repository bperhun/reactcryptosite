
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store} />
    </React.StrictMode>
  );
}

rerenderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state);
}); 