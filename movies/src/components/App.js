//Libraries
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react';


// components
import Header from './Header'
import Main from './Main'
import Movies from './Movies'
import Detail from './Detail'
import Watchlist from './Watchlist';
import AddToWatchlist from './AddToWatchlist'
import RemoveFromWatchlist from './RemoveFromWatchlist';
import SearchDetail from './searchDetail';


function App() {

  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [ value, setValue] = useState([])

  //console.log('movie', movie);
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

  //  Load the data from LocalStorage when the componente mounts
  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-favorites'));
    if(movieFavorites){
      setFavorites(movieFavorites);
    }
    
  }, [])

  //Configure setItem in LocalStorage
  const saveToLocalStorage = function(items) {
    return localStorage.setItem('react-movie-favorites', JSON.stringify(items))
  };
 
  //Function to update state of Favourites list, and passing the funtion to Movies
  const addFavoriteMovie = function(oneMovie) {
    if (!favorites.includes(oneMovie)) {
      const newFavoriteList = [...favorites, oneMovie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList); 
      //console.log(newFavoriteList)
    }
  }

  const removeFavoriteMovie = function(oneMovie) {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== oneMovie.id      
    );
  
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList); 
    //console.log(newFavoriteList)
  }


  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&page=1&include_adult=false&query=${search}`)
        .then(response => response.json())
        .then((data) => {
            if(data.results) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        })
        .catch(err => console.error(err));
    }, [search]
)
console.log(results)

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact={true} path="/" element={<Main AddToWatchlist={AddToWatchlist} addFavoriteMovie={addFavoriteMovie} favorites={favorites} results={results} search={search} setSearch={setSearch} />}></Route>

        <Route path="/search/movie/:id" element={<SearchDetail results={results} />} />

        <Route exact={true} path="/movies-list" element={<Movies movie={movie} isLoading={isLoading} AddToWatchlist={AddToWatchlist} addFavoriteMovie={addFavoriteMovie} favorites={favorites}/>}></Route>       

        <Route path="/favorites" element={<Watchlist favorites={favorites} RemoveFromWatchlist={RemoveFromWatchlist} removeFavoriteMovie={removeFavoriteMovie} />}></Route>         
        
        <Route path="/movie/:id" element={<Detail movie={movie} AddToWatchlist={AddToWatchlist} addFavoriteMovie={addFavoriteMovie} /> }></Route>
          
        <Route exact={true} path="/:id"  element={<Movies movie={movie} isLoading={isLoading} AddToWatchlist={AddToWatchlist} addFavoriteMovie={addFavoriteMovie} />}></Route>
          
        <Route><h3>Error 404</h3></Route>          
      </Routes>

    </div>
  );
}

export default App;
