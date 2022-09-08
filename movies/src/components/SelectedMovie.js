import {useState} from 'react-router-dom'

function SelectedMovie ({clickedMovie, setClickedMovie}) {

    const removeSelected = function() {
        const removeMovie = undefined;
        setClickedMovie(removeMovie)
    }

    return (
        <div className="movie-detail-container-display">
            <div className="one-movie-poster-display">
                <img className="detail-poster-display" src={`http://image.tmdb.org/t/p/original${clickedMovie.poster_path}`} alt={`${clickedMovie.title} Poster`} />
                <div className="detail-data">
                    <i className="gg-close" onClick={() => removeSelected()} ></i>
                    <h3>{clickedMovie.title}</h3>
                    <h5>{clickedMovie.release_date.substring(0,4)}</h5>
                    <h5>Rating: {clickedMovie.vote_average}</h5>
                    <p>{clickedMovie.overview}</p>
                    <button className="btn btn-outline-light" > Add to Favorites</button>                                    
                </div>                                    
            </div>
        </div>


    )
}

export default SelectedMovie;