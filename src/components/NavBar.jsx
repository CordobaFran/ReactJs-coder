import React from 'react'
import logo from '../assets/img/logo_petshop.png'

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark vw-100">
            <a className="navbar-brand p-0" href=""><img src={logo} alt="logo" style={{width: 80}}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-5 pl-5" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Galería</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;