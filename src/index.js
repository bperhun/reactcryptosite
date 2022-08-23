
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addNewTraderPost.bind(store)} updateText={store.updateText.bind(store)} />
    </React.StrictMode>
  );
}

rerenderTree(store.getState());

store._subscribe(rerenderTree);