

function Detail ( {movie} ) {

    
    console.log(movie)

 return(

    <div className="detail-container">
        <div className="poster-detail">
            <h1>detalle de la pelicula {movie.index}</h1>
        </div>

    </div>

 )   
}

export default Detail;