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
import AddToWatchlist from './AddToWatchlist'
import RemoveFromWatchlist from './RemoveFromWatchlist';


function App() {


  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([])
  
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

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-favorites'));

    setFavorites(movieFavorites);
  }, [])

  //Configure LocalStorage
  const saveToLocalStorage = function(items) {
    return localStorage.setItem('react-movie-favorites', JSON.stringify(items))
  };

  //Function to update state of Favourites list, and passing the funtion to Movies
  const addFavoriteMovie = function(oneMovie) {
    const newFavoriteList = [...favorites, oneMovie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList); 
    console.log(newFavoriteList)
  }

  const removeFavoriteMovie = function(oneMovie) {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== oneMovie.id
      
    );
  
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList); 
    console.log(newFavoriteList)
  }
  

  return (
    <div className="App">
      <Header />

      <Switch>

        <Route exact={true} path="/">
          <Movies movie={movie} isLoading={isLoading} AddToWatchlist={AddToWatchlist} addFavoriteMovie={addFavoriteMovie} />
        </Route>

        <Route path="/favorites">
          <Watchlist favorites={favorites} RemoveFromWatchlist={RemoveFromWatchlist} removeFavoriteMovie={removeFavoriteMovie} />
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
