import {useParams, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'

function Detail ( {movie, addFavoriteMovie} ) {

    const {id} = useParams();
    console.log(id);

    const navigate = useNavigate();

    return(
        <>
            {movie.map( (oneMovie, index) => {
                if(id === oneMovie.title) {
                    return (
                        <div className="movie-detail-container-display" key={index}>
                            <div className="one-movie-poster-display">
                                <div className="detail-poster-container">
                                    <img className="detail-poster-display" src={`http://image.tmdb.org/t/p/original${oneMovie.poster_path}`} alt={`${oneMovie.title} Poster`} />
                                </div>
                                <div className="detail-data">
                                    <i className="gg-close" onClick={() => navigate(-1)}></i>
                                    <h3>{oneMovie.title}</h3>
                                    <h5>{oneMovie.release_date.substring(0,4)}</h5>
                                    <h5>Rating: {oneMovie.vote_average}</h5>
                                    <p>{oneMovie.overview}</p>
                                    <button className="btn btn-outline-light" onClick={() => addFavoriteMovie(oneMovie)}> Add to Favorites</button>                                    
                                </div>                                    
                            </div>
                        </div>                        
                    )  
                }
            })                    
        }
        </>    
    )   
}

export default Detail;