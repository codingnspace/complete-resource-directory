import React, { Component, PropTypes } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  handleChange = () => {
    return (
      this.props.onUserInput(
        this.filterTextInput.value,
        this.inStockOnlyInput.checked
      )
    );
  }

  render() {
    return (
      <form className="SearchBar">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          checked={this.props.inStockOnly}
          ref={(input) => this.inStockOnlyInput = input}
          onChange={this.handleChange}
        />
        {' '}
        Only show highlighted resources
      </form>
    );
  }
}

export default SearchBar;
