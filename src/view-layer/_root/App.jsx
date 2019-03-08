import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from '../../data-layer/redux-services';
import getAppRoutes from '../../business-layer/local-view-services/router/routes';
import './App.scss';

import Theme from '../common/mui-modules/muiTheme';
// Store Configuration

const THEME = createMuiTheme(Theme);

// eslint-disable-next-line
class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <Provider store={store}>
          <div className="App">
            <header className="App-header" />
            {getAppRoutes()}
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
