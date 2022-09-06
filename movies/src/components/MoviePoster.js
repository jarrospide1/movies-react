import { Link } from "react-router-dom"
function MoviePoster ( {oneMovie} ) {

return(
        
            <div className="inside-one-movie">
                <div className="poster">
                    {oneMovie.poster_path ? (
                        <img src={`http://image.tmdb.org/t/p/original${oneMovie.poster_path}`} alt={`${oneMovie.title} Poster`} width="200px"></img>
                    ) : 
                        <div className="no-poster"></div>}
                </div>
                <div className="text-info">
                    <h3 className="search-movie-title"> {oneMovie.title} </h3>
                    <h5>{oneMovie.release_date.substring(0,4)}</h5>
                    {/*<p className="search-movie-description"> {oneMovie.overview} </p>*/}
                    <Link to={`/movie/${oneMovie.title}`} className="btn btn-dark"> Details </Link>
                </div>
            </div>
        
)

}

export default MoviePoster;