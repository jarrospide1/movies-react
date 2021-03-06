//import OneMovie from './OneMovie'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Pagination from './Pagination'

function Movies() {

    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // it starts in page 1
    const [moviesPerPage, setMoviesPerPage] = useState(8); //number of movies we want per page

    console.log('movie', movie);
    //console.log('setMovie', setMovie);

    // componentDidMount
    useEffect(() => {
        //console.log('the component was mounted');
        const options = {
            //method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'API', 
                'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
            }
        };

        //Apicall
        fetch('https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie', options)
        .then(response => response.json())
        .then(data => {
            setMovie(data.results);
            setIsLoading(false)
            //console.log('data', data);
        })
        .catch(err => console.log(err))
    }, [])
    // Ends componentDidMount


    // Get current Movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movie.slice(indexOfFirstMovie, indexOfLastMovie) // This returns a copy of part of the array, from index 0 to 7 in the first view (not 8)


    // Change Page
    function paginate(pageNumber) {
        return setCurrentPage(pageNumber)
    }

    return(


        
        <section className="movies-main">            

            {isLoading && <h2>Cargando pelis ...</h2> }            

            {movie && (
                <>
                    {currentMovies.map( (oneMovie, index) => {
                        return (

                            
                                    <article className="one-movie">
                                        <div className="inside-one-movie">
                                            <img className="poster" src={oneMovie.img} alt="Movie Poster" />
                                            <h3>{oneMovie.title}</h3>
                                            <h5>{oneMovie.year}</h5>
                                            <p>{oneMovie.synopsis}</p>
                                            <Link to=""> Ver mas </Link> 
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
    )
}

export default Movies;