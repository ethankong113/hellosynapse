import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

document.addEventListener('DOMContentLoaded', e => {
  injectTapEventPlugin();
   const container = document.getElementById("container");
   let store;
   store = configureStore();
   ReactDOM.render(<Root store={store} />, container);
   window.store = store;
 });
