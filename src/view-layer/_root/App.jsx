import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from '../../data-layer/redux-services';
import logo from './logo.svg';
import './App.scss';

import Theme from '../common/mui-modules/muiTheme';
// Store Configuration

const THEME = createMuiTheme(Theme);
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.jsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
