import React from 'react';
import Material from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = (props) => {
  return (
    <Material>
      <div>
        <AppBar
          title="HelloSynapse"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        {props.children}
      </div>
    </Material>
  );
};

export default App;
