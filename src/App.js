import React, { Component, lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import styles from './App.css';

import NavBar from './components/NavBar/NavBar';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const MoviesDetailView = lazy(() =>
  import('./views/MoviesDetailView/MoviesDetailView'),
);
const MoviesView = lazy(() => import('./views/MoviesView/MoviesView'));
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Suspense
          fallback={
            <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.moviesDetails} component={MoviesDetailView} />
            <Route path={routes.movies} component={MoviesView} />
            <Route exact component={NotFoundView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
