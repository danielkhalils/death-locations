import React from "react"
import Carousel from "../Carousel";
import "./NavBar.css";

function NavBar(){
    return(
        <React.Fragment>
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>NavBar</title>
                <link rel="stylesheet" href="NavBar.css"/>
            </head>
            <body>
                <header>
                    <nav>
                        <a className="logo" href="/">Death Locations</a>
                        <div className="mobile-menu">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <ul className="nav-list">
                            <li><a href="/">Início</a></li>
                            <li><a href="/">Sobre</a></li>
                            <li><a href="/">Locais</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Carousel></Carousel>
                </main>
                <script src="mobile-navbar.js"></script>
            </body>
        </React.Fragment>
    )
}

export default NavBar;
