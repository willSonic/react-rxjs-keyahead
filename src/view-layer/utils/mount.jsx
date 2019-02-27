import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

export default function mount({ Component, container }) {
  registerServiceWorker();
  ReactDOM.render(<Component />, container);
}
