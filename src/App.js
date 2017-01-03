import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ResourceList from './components/ResourceList';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1 style={{textAlign: 'left'}}>Javascript Resources</h1>
          <ResourceList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
