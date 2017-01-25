import React, { Component } from 'react';
import { find } from 'lodash';

import ResourceList from './components/ResourceList';
import SearchBar from './components/SearchBar';

import data from './data';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     filterText: '',
     isHighlightedOnly: false,
     resources: data
   };
 }

 handleUserInput = (filterText, isHighlightedOnly)  => {
   this.setState({
     filterText: filterText,
     isHighlightedOnly: isHighlightedOnly
   });
 }

  render() {
    return (
      <div className="App">
        <h1>Javascript Resources</h1>
        <SearchBar
            filterText={this.state.filterText}
            isHighlightedOnly={this.state.isHighlightedOnly}
            onUserInput={this.handleUserInput}
        />
        <ResourceList
            filterText={this.state.filterText}
            isHighlightedOnly={this.state.isHighlightedOnly}
            resources={this.state.resources} />
      </div>
    );
  }
}

export default App;
