function MovieDetail ( { oneMovie }) {

    return(

        <div className="movie-detail">
            <h3>Detalle de la Pelicula</h3>
            <img className="poster" src={oneMovie.img} alt= {`${oneMovie.title} Poster`} />
            <h3>{oneMovie.title}</h3>
            <h5>{oneMovie.year}</h5>
            <p>{oneMovie.synopsis}</p>
        </div> 

    )

}

export default MovieDetail;