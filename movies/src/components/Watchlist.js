import {Link} from "react-router-dom"


function Watchlist( { favorites, RemoveFromWatchlist, removeFavoriteMovie } ) {

    return(
        <div>
            <h1>Favorite Movies</h1>
            <div className="favourites-list" >

            <section className="movies-main">            

                {favorites && (
                    <>
                        {favorites.map( (oneMovie, index) => {

                            
                            return (                            
                            
                                        <article className="one-movie" key={index}>
                                            <div className="inside-one-movie" >
                                                <img className="poster" src={`http://image.tmdb.org/t/p/original${oneMovie.poster_path}`} alt={`${oneMovie.title} Poster`} />
                                                <div onClick={() => removeFavoriteMovie(oneMovie)} className='overlay d-flex align-items'>
                                                    <RemoveFromWatchlist />
                                                </div>
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
                
                
            </section>

            </div>
        </div>

    )

}

export default Watchlist;