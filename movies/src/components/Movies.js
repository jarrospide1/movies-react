//import OneMovie from './OneMovie'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import Add from './Add';
import SelectedMovie from './SelectedMovie';


function Movies( {movie, isLoading, AddToWatchlist, addFavoriteMovie, favorites }) {    

    const [currentPage, setCurrentPage] = useState(1); // it starts in page 1
    const [moviesPerPage, setMoviesPerPage] = useState(9); //number of movies we want per page
    const [clickedMovie, setClickedMovie] = useState();


    // Get current Movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movie.slice(indexOfFirstMovie, indexOfLastMovie) // This returns a copy of part of the array, from index 0 to 8 in the first view (not 9)
    //console.log(currentMovies)


    // Change Page
    function paginate(pageNumber) {
        window.scrollTo({top: 100, left: 0, behavior: 'smooth'});
        return setCurrentPage(pageNumber)
    }

    // Watch detail of a movie
    function selectMovie(oneMovie) {
        const newClickedMovie = oneMovie;
        setClickedMovie(newClickedMovie);
        window.scrollTo({top: 100, left: 0, behavior: 'smooth'})
        console.log(clickedMovie)
    }

    return(

        <>

            < Add />
            
            
            {clickedMovie && <SelectedMovie clickedMovie={clickedMovie} setClickedMovie={setClickedMovie} />}

            <h3 className="h3-title">Main Movies</h3>
            <section className="movies-main">            

                {isLoading && <h2>Cargando pelis ...</h2> }            
                
                {currentMovies && (
                    <>                    
                        {currentMovies.map( (oneMovie, index) => {
                            return (
                                
                                        <article className="one-movie" key={index} onClick={() => selectMovie(oneMovie)} >
                                            <div className="inside-one-movie">
                                                <img className="poster" 
                                                    src={`http://image.tmdb.org/t/p/original${oneMovie.poster_path}`} 
                                                    alt={`${oneMovie.title} Poster`} 
                                                />
                                                <div onClick={() => addFavoriteMovie(oneMovie)} className='overlay d-flex align-items'>
                                                    <AddToWatchlist  favorites={favorites} oneMovie={oneMovie}/>
                                                </div>
                                                <h3 >{oneMovie.title}</h3>
                                                <h5>{oneMovie.release_date.substring(0,4)}</h5>
                                                <Link to={`/movie/${oneMovie.title}`} className="btn btn-dark"> Details </Link> 
                                            </div>                
                                        </article>
                                )                        
                            })                    
                        }
                    </>
                )}        

            </section>

            <Pagination moviesPerPage={moviesPerPage} totalMovies={movie.length} paginate={paginate} /> 

        </>
    )
}

export default Movies;