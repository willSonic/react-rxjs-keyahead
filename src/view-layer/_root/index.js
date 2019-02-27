import mount from '../utils/mount.jsx';
import './index.scss';

import Component from './App';

const container = document.getElementById('root');

const render = () => {
  mount({ Component, container });
};

render();

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    render();
  });
}
