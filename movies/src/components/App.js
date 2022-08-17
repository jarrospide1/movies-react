//Libraries
import { Route, Switch } from 'react-router-dom';


// components
import Header from './Header'
import Movies from './Movies'
import MovieDetail from './MovieDetail'
import Pagination from './Pagination'
import Watched from './Watched';
import Watchlist from './Watchlist';
import Add from './Add';


function App() {

  return (
    <div className="App">
      <Header />

      <Switch>

        <Route exact={true} path="/">
          <Movies />
        </Route>

        <Route path="/watched">
          <Watched />
        </Route>

        <Route path="/add">
          <Add />
        </Route>

        <Route path="/movie/:id" >
          <MovieDetail />
        </Route>

        <Route exact={true} path="/:id" >
          <Movies />
        </Route>

        <Route>
          <h3>Error 404</h3>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
