{movie && (
    <>
        {movie.map( (oneMovie, index) => {
            return (
                <article className="one-movie" index>
                    <div className="inside-one-movie">
                        <img src={oneMovie.poster} alt="Movie Poster" />
                        <h3>{oneMovie.title}</h3>
                        <h5>{oneMovie.year}</h5>
                        <p>{oneMovie.synopsis}</p> 
                    </div>                
                </article>
                )
            
            })                    
        }
    </>
)}