import { Component } from "react";

class SearchBar extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  onInputChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const { searchQuery } = this.state;

    this.props.onSubmit(searchQuery);
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <form action="submit" onSubmit={this.onFormSubmit}>
        <input
          type="input"
          value={searchQuery}
          onChange={this.onInputChange}
          placeholder="напишите"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
