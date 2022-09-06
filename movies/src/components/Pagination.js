import { Link } from 'react-router-dom';

function Pagination( { moviesPerPage, totalMovies, paginate }) {
// Arguments: (8, 100, paginate function)
    const pageNumbers = [];

    //Math.ceil rounds to the next INT number
    for(let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers)

    return (
        <nav className='pagination-wrapper'>
            <ul className="pagination">
                {pageNumbers.map( number => (
                    <li key={number} className="page-item">
                        <Link onClick={ () => paginate(number)} to={`/${number}`} className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Pagination;