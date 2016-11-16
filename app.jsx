import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route} from 'react-router';

import HomePage from './components/HomePage/index.jsx';

injectTapEventPlugin();

// "roboto-and-material-icons-fonts": "^1.0.1",
ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router>
      <Route path="/" component={HomePage}  />
    </Router>
  </MuiThemeProvider>
, document.getElementById('content'));
