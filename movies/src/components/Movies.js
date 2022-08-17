//import OneMovie from './OneMovie'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';


function Movies( {movie, isLoading }) {

    const [currentPage, setCurrentPage] = useState(1); // it starts in page 1
    const [moviesPerPage, setMoviesPerPage] = useState(9); //number of movies we want per page




    // Get current Movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movie.slice(indexOfFirstMovie, indexOfLastMovie) // This returns a copy of part of the array, from index 0 to 7 in the first view (not 8)


    // Change Page
    function paginate(pageNumber) {
        return setCurrentPage(pageNumber)
    }

    return(

        <>
        
            <section className="movies-main">            

                {isLoading && <h2>Cargando pelis ...</h2> }            

                {movie && (
                    <>
                        {currentMovies.map( (oneMovie, index) => {
                            return (


                                        <article className="one-movie" key={index}>
                                            <div className="inside-one-movie" >
                                                <img className="poster" src={`http://image.tmdb.org/t/p/original${oneMovie.poster_path}`} alt={`${oneMovie.title} Poster`} />
                                                <h3>{oneMovie.title}</h3>
                                                <h5>{oneMovie.release_date.substring(0,4)}</h5>
                                                <Link to={`/movie/${index}`} className="btn btn-dark"> Details </Link> 
                                            </div>                
                                        </article>


                                )                        
                            })                    
                        }
                    </>
                )}


                {/*<OneMovie moviesList={movie} />*/}
                    
                <Pagination moviesPerPage={moviesPerPage} totalMovies={movie.length} paginate={paginate} />            

            </section>

        </>
    )
}

export default Movies;