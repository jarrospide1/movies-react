//Libraries
import { Route, Switch } from 'react-router-dom';


// components
import Header from './Header'
import Movies from './Movies'
import Pagination from './Pagination'

function App() {

  return (
    <div className="App">
      <Header />

      <Switch>

        <Route exact={true} path="/">
          <Movies />
        </Route>

        <Route path="/:id" >
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
