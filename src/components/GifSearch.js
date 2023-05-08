import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for GIFs:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;