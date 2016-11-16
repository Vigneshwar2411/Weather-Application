import React from 'react';
import AppBar from 'material-ui/AppBar';

const AppBarStyle = {
  position : 'fixed',
  width: '100%'
}

const MainAppBar = () => (
  <AppBar
    title="Weather App"
    showMenuIconButton={false}
    style={AppBarStyle}
  />
);

export default MainAppBar;
