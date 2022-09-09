import { Link } from "react-router-dom"

import logo from "../logo.png"

function Header() {
    return(

        <header>
            <section className="header-container">
                <div className="logo-container">
                    <Link to="/"><img className="logo" src={logo} alt="logo" width="300px" /></Link>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                <ul className="navbar-list">
                    <li>
                        <Link to="/movies-list"> Movies List </Link>
                    </li>
                    <li>
                        <Link to="/favorites"> Favorites </Link>
                    </li>                                      
                </ul> 
            </section>
        </header>

    )
}

export default Header;