import { Link } from "react-router-dom"

function Header() {
    return(

        <header>
            <section className="header-container">
                <img src="https://img.freepik.com/premium-vector/click-movie-logo-vector_18099-258.jpg" alt="logo" width="200px" />
                <ul className="navbar-list">
                    <li>
                        <Link to="/"> Movies List </Link>
                    </li>
                    <li>
                        <Link to="/watched"> Watched </Link>
                    </li>                    
                    <li>
                        <Link to="/add"> Add Movie </Link>
                    </li>                    
                </ul> 
            </section>
        </header>

    )
}

export default Header;