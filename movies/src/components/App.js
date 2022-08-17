//Libraries
import { Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react';


// components
import Header from './Header'
import Movies from './Movies'
import Detail from './Detail'
import Pagination from './Pagination'
import Watched from './Watched';
import Watchlist from './Watchlist';
import Add from './Add';


function App() {


  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  console.log('movie', movie);
  //console.log('setMovie', setMovie);
  // componentDidMount
  useEffect(() => {
      //Apicall
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
          setMovie(data.results);
          setIsLoading(false)
          //console.log('data', data);
      })
      .catch(err => console.log(err))
  }, [])
  // Ends componentDidMount

  return (
    <div className="App">
      <Header />

      <Switch>

        <Route exact={true} path="/">
          <Movies movie={movie} isLoading={isLoading} />
        </Route>

        <Route path="/watched">
          <Watched />
        </Route>

        <Route path="/add">
          <Add />
        </Route>

        <Route path="/movie/:id" >
          <Detail movie={movie} />
        </Route>

        <Route exact={true} path="/:id"  >
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
