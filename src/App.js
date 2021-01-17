import { Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Navigation from './components/Navigation/Navigation';
import MoviesPage from './components/MoviesPage';
import HomePage from './components/HomePage';
import MovieView from './views/MovieDetailsPage';

import './App.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/movies" component={MoviesPage} exact />
        <Route path="/movies/:idMovie" component={MovieView} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </QueryClientProvider>
);

export default App;
