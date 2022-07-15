

function OneMovie( { moviesList }) {   
    
    
    return(
        <>
            <p>hola hola</p>

            <ul className="movies-list">

                {moviesList.map( oneMovie => (

                    <li className="movies-list-items" key={oneMovie.index}>

                        <article className="one-movie">
                            <div className="inside-one-movie">
                                <img className="poster" src={oneMovie.poster} alt="Movie Poster" />
                                <h3>{oneMovie.title}</h3>
                                <h5>{oneMovie.year}</h5>
                                <p>{oneMovie.synopsis}</p> 
                            </div>                
                        </article>

                    </li>

                ))


                }
                    
            </ul>





        </>
    )
}

export default OneMovie;