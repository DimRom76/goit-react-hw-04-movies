import { Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { lazy, Suspense, useState } from 'react';

import Navigation from './components/Navigation';
import Loader from './components/Loader';
import LanguageContext from './service/LanguageContext';

import './App.css';

const MoviesPage = lazy(() =>
  import(
    './components/MoviesPage/MoviesPage.js' /* webpackChunkName: "movies-page" */
  ),
);
const HomePage = lazy(() =>
  import(
    './components/HomePage/HomePage.js' /* webpackChunkName: "home-page" */
  ),
);
const MovieView = lazy(() =>
  import('./views/MovieDetailsPage.js' /* webpackChunkName: "movie-view" */),
);
const GenresPage = lazy(() =>
  import(
    './components/GenresPage/GenresPage.js' /* webpackChunkName: "genres-page" */
  ),
);

const queryClient = new QueryClient();

const App = () => {
  const [languageRu, setlanguageRu] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={languageRu}>
        <div className="App">
          <Navigation languageRu={languageRu} setlanguageRu={setlanguageRu} />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/movies" component={MoviesPage} exact />
              <Route path="/genres" component={GenresPage} />
              <Route path="/movies/:idMovie" component={MovieView} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </Suspense>
        </div>
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
