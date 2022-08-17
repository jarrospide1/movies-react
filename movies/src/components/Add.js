import { useState } from "react"
import MoviePoster from "./MoviePoster";

function Add () {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const onChange = function(e) {
        e.preventDefault();
        setSearch(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(response => response.json())
            .then((data) => {
                //console.log(data.results);
                if(data.results) {
                    setResults(data.results);
                    console.log(results)
                } else {
                    setResults([])
                }
            })
            .catch(err => console.error(err));

        };       

    return(
        <>            
            
            <div className="add-page">
                <div className="search-container">
                    <input 
                    className="input-search"
                    type="text" 
                    placeholder="Search Movie"
                    onChange={onChange}
                    />
                </div>
                {results.length > 0 && (
                    <ul className="results-preview">
                        {results.map( oneMovie => (
                            <li key={oneMovie.id}> 
                                <MoviePoster oneMovie={oneMovie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </>
    )
}

export default Add;