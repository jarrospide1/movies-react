import { Link } from "react-router-dom"

import logo from "../peliculon.png"

function Header() {
    return(

        <header>
            <section className="header-container">
                <img src={logo} alt="logo" width="300px" />
                <ul className="navbar-list">
                    <li>
                        <Link to="/"> Movies List </Link>
                    </li>
                    <li>
                        <Link to="/favorites"> Favorites </Link>
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