import { Link } from 'react-router-dom';
import {useEffect, useState, useContext } from 'react';
import MoviePoster from "./MoviePoster";
import AddToWatchlist from './AddToWatchlist';

function Main ( {addFavoriteMovie, favorites, results, search, setSearch}) {


    //const [search, setSearch] = useState("");
    //const [results, setResults] = useState([]);

    

    const topSearch = function () {
        window.scrollTo({top: 30, left: 0, behavior: 'smooth'})
    }


    return(
        <>
            <div className="main-body">
                <div className="main-title">
                    <h1>FIND ANY MOVIE</h1>
                    <h2>AND CREATE YOUR OWN WATCHLIST</h2>
                </div>
                <div className="form-location">
                    <div className="search-container">
                        <input
                        className="search-movie"
                        type="text"
                        placeholder="Search Movie"
                        onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className="main-buttons">
                        <Link to="/movies-list" className="list-button btn btn-outline-light" >Movies List</Link>
                        <Link to="/favorites" className="favorite-button btn btn-outline-light"  >Favorite Movies</Link>
                    </div>
                </div>
                {results.length > 0 && (
                    <>
                        <h3 className="display-3 h3-title">Results</h3>
                        <div>
                            <ul className="movies-main">
                                {results.map( oneMovie => (
                                    <li key={oneMovie.id} className="one-movie"> 
                                        <MoviePoster oneMovie={oneMovie} AddToWatchlist={AddToWatchlist} addFavoriteMovie={addFavoriteMovie} favorites={favorites} results={results} />
                                    </li>
                                ))}
                            </ul>
                            <div className='arrow-icon' onClick={topSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-up-circle" 
                                    viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                </svg>
                            </div>
                        </div>
                        
                    </>
                )}
            </div>
        </>
    )
}

export default Main;