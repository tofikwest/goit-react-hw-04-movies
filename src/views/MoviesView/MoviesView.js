import { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchBar from '../../components/SearchBar/SearchBar';
import queryStr from 'query-string';
import Api from '../../Service/Api';

class MoviesView extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidMount() {
    const { query } = this.getQueryFromProps(this.props);

    if (query) {
      this.setState({ searchQuery: query });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.fetchMovies();
      this.props.history.push({
        search: `query=${searchQuery}`,
      });
    }
  }

  fetchMovies() {
    const { searchQuery } = this.state;
    Api.fetchMoviesByQuery(searchQuery).then(r =>
      this.setState({
        movies: r,
      }),
    );
  }

  getQueryFromProps = props => {
    return queryStr.parse(props.location.search);
  };

  onQueryChange = query => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onQueryChange} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesView;
